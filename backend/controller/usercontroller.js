const User = require('../model/user')
const jwt = require('jsonwebtoken')
const createToken = (_id) => {
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'3d'})
}
exports.getalluser = async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.getuserbyid = async (req,res) => {
    const {id} = req.params
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.createuser = async (req, res) => {
    const { username, email, password } = req.body
    const token = createToken(req.body._id)
    try {
        const newUser = await User.signup(
            username,
            email,
            password,
            req.file ? `/uploads/users/${req.file.filename}` : null
        )
        res.status(200).json({
            user: newUser,
            token
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.userupdate = async (req,res) => {
    const {id} = req.params

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteuser = async (req,res) => {
    const {id} = req.params

    try {
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.loginuser = async (req,res) => {
    const {email,password} = req.body
    try {
        const user = await User.login({email,password})
        if(!user){
            return res.status(400).json({error:"Invalid email or password"})
        }
        const token = createToken(user._id)
        res.status(200).json({user,token})
    }
    catch (error) {
        res.status(500).json({error:error.message})
    }
}
