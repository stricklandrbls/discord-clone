const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth/authController");
const joi = require('joi');
const verifyToken = require("../middleware/tokenauth");
const validator = require("express-joi-validation").createValidator();

const registerSchema = joi.object({
    username: joi.string().min(3).max(12).required(),
    password: joi.string().min(8).max(24).required(),
    mail: joi.string().email().required()
});

const loginSchema = joi.object({
    password: joi.string().min(8).max(24).required(),
    mail: joi.string().email().required()
});

router.post('/register', validator.body(registerSchema), auth.controllers.postRegister);

router.post('/login',validator.body(loginSchema), auth.controllers.postLogin);
router.get('/login', auth.controllers.postLogin);
router.get('/test', verifyToken, (req, res) =>{
    res.send("Token Valid")
})
module.exports = router;