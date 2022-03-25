const bcrypt = require("bcryptjs")
const dbuser = require("../../models/user")
const jwt = require("jsonwebtoken")

const postLogin = async (req, res) =>{
    try{
        const {mail, username, password} = req.body;

        const user = await dbuser.findOne({ mail: mail.toLowerCase() });

        if( user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
                { userId: user._id, mail: user.mail },
                process.env.TOKEN_KEY,
                { expiresIn: '24h' }
            )
            res.send(token);
        }
        else{
            res.sendStatus(404);
        }

    }catch(err){
        res.send(`Err: ${err}`)
    }
}

module.exports = postLogin