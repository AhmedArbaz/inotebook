const jwt = require('jsonwebtoken');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req,res,next)=>{ //end may next ko call karin gay Q kay ya chalnay kay bad boly ga mara kam ho gaya ab next

//Get the user from the jwt token and add id to req object
const token = req.header('auth-token'); //ya name jab thunder client may request maray gain to header may dana ho ga 

if(!token){
    res.status(401).send({error:"Please authenticate using a valid token"})
}
try {
    const data = jwt.verify(token,JWT_SECRET)
    req.user = data.user;
    next()
} catch (error) {
    res.status(401).send({error:"please authenticate using a valid token"})
}

}

module.exports = fetchuser;