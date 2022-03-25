const jwt = require("jsonwebtoken")

const verifyToken = (req, res, callback) => {
    let token = req.body.token || req.query.token || req.headers['authorization']
    if(!token) return res.status(403);
    
    try{
        token = token.replace(/^Bearer\s+/, "")
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = decoded
    }catch(err){
        res.send(`Error Occurred: ${err}`)
    }

    return callback()
}

module.exports = verifyToken