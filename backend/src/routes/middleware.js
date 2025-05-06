const jwt = require('jsonwebtoken');
require('dotenv').config();

const middleware=async (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token= authHeader.split(' ')[1]
    if(!token || !authHeader){
        res.status(401).json({ message: 'Token missing' });
    }   
    
    
    try {
        const verified = jwt.verify(token , process.env.JWT_SECRET);
        req.email = verified.email ;
        next() ;
    } catch (error) {
        res.json({
            message : "Invalid Token"
        })
    }
}

module.exports = {
    middleware
}

