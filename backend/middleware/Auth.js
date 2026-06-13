const jwt = require('jsonwebtoken');
const user = require('../model/user')

const auth = async (req,res,next ) => {
    const {authorization } = req.headers 
    if(!authorization) {
        return res.status(401).json({error: 'you must be logged in'})
    }
    const token = authorization.replace('Bearer', '')
    try {
        const {userId} = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await user.findOne({_id: userId})
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'you must be logged in'})
    }
    
}
