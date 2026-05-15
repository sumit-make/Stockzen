const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
        });

        res.status(201).json({
            success: true,
            message: "Signup successful",
            user,
        });

    } catch (error) {
        console.log(error);
    }
};

module.exports.Login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const auth = await bcrypt.compare(
            password,
            user.password
        );

        if (!auth) {
            return res.json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
        });

        res.status(200).json({
            success: true,
            message: "Login successful",
        });

    } catch (error) {
        console.log(error);
    }
};