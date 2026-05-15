const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.json({
            success: false,
        });
    }

    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, data) => {

            if (err) {
                return res.json({
                    success: false,
                });
            }

            req.user = data.id;

            next();
        }
    );
};