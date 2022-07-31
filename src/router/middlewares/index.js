



require('dotenv/config')

const jwt = require('jsonwebtoken');




async function VerifyTokenReverse(req, res, next) {
    console.log('token here reverse')
    const token = req.headers['authorization']
    if (!token) next();
    
    else { 
        try {
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
            console.log("decoded", decoded)
            res.json({ error: true, status: 401, message: '*Redirected*, User is logged in, not authorized to make requests' })
            
        } catch (err) {
            next()
        }
         
    }
}

async function VerifyToken(req, res, next) {
  
    const token = req.headers['authorization']
    console.log('normal token here')
    console.log(token)

    if (!token) return res.json({ error: true, status: 403, message: "Not authorized" })
    else {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
            res.locals.userInfo = decoded
            next()
        } catch (err) {
            return res.json({ error: true, status: 403, message: "Invalid token. Not authorized" })
         }
    }

}



module.exports = { VerifyTokenReverse:VerifyTokenReverse, VerifyToken:VerifyToken }
