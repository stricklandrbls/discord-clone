const user = require("../../models/user");
const bcrypt = require("bcryptjs");
const user = require("../../models/user");

const postRegister = async (req, res) =>{
    try{
        const { username, mail, password } = req.body;
        const userExists = await user.exists({mail: mail.toLowerCase(), username: username});
        if(userExists){
            return res.status(409).send("User / email already exists");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await user.create({ username, mail: mail.toLowerCase(), password: encryptedPassword });

        const token = "JWT Token";
        res.send(201).json({userDetails: {
            mail: user.mail,
            token: token,
            username: user.username
            }
        });
    }catch(err){
        res.status(500).send("Error occured, try again.");
    }
    res.send("register route");
}

module.exports = postRegister