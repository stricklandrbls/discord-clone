const user = require("../../models/user");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const user = require("../../models/user");

const postLogin = async (req, res) =>{
    try{
        const { mail, password } = req.body;
        const user = await user.findOne({mail: mail.toLowerCase()})

        if (user){
            status = await bcrypt.compare(password, user.password)
            if (status){
                const token = "JWT Token"
                return req.status(200).json({
                    userDetails : {
                        mail: user.mail,
                        token: token,
                        username: user.username
                    }
                })
            }
        }
    }catch(err){
        res.status(500).send(`Error: ${err}`)
    }

    res.send("login route");
}

module.exports = postLogin