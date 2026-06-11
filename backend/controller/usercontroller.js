const User = require('../model/user')

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

exports.createuser = async (req,res) => {
    const {username,email,password} = req.body
    try {
        const newUser = await User.create({
            username,
            email,
            password
        })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({error:error.message})
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