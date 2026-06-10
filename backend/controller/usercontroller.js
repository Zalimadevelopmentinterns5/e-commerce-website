const user = require('../model/user')

exports.getalluser = async (req,res) => {
    try {
        const user = await user.find()
        res.status(200).json(user)
    } catch (error) {
    res.status(400).json({error: error.message})
    }
}
exports.getuserbyid = async (req,res) => {
    const {id} = req.params
    try {
     const user = await user.findById(id)
   res.status(200).json(user)
    } catch (error) {
       res.status(500).json({error:error.message})   
    }
}
exports.createuser =async (req,res) => {
    const {username,email,password} =req.body
    try {
        const user = await user.create({username,email,password})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.userupdate = async (req,res) => {
const {id} = req.params
const {username,email,password} = req.body
    try {
        const user = await user.findoneAndReplace(id,req.body,{new:true})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteuser = async (req,res) => {
    const {id} = req.params
    try {
        const user = await user.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}