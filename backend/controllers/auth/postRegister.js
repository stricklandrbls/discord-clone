const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const dbuser = require("../../models/user")

const postRegister = async (req, res) =>{
    try{
        const { username, mail, password } = req.body;
        const userExists = await dbuser.exists({mail: mail.toLowerCase(), username: username});
        if(userExists){
            return res.status(409).send("User / email already exists");
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await dbuser.create({ username, mail: mail.toLowerCase(), password: encryptedPassword });

        const token = jwt.sign(
            { userId: user._id, mail: user.mail },
            process.env.TOKEN_KEY,
            { expiresIn: '24h' }
        )

        res.send(201).json({userDetails: {
            mail: user.mail,
            token: token,
            username: user.username
            }
        });
    }catch(err){
        res.send(`err: ${err}`)
    }
    res.sendStatus(200);
}

module.exports = postRegister