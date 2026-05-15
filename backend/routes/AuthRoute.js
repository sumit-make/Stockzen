const router = require("express").Router();

const {
    Signup,
    Login,
} = require("../controller/AuthController");

const {
    userVerification,
} = require("../middleware/AuthMiddleware");

router.post("/signup", Signup);

router.post("/login", Login);

router.get("/verify", userVerification, (req, res) => {
    res.json({
        success: true,
        message: "Authorized",
    });
});

module.exports = router;