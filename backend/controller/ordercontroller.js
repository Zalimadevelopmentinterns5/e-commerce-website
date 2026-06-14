const Order = require('../model/order')

exports.getallorder = async (req,res) => {
    try {
        const order = await Order.find()
        res.status(200).json(order)
    }
        catch (error) {
    res.status(400).json({error: error.message})
    }
}
exports.getorderbyid = async (req,res) => {
    const {id} = req.params
    try {
     const order = await Order.findById(id)
   res.status(200).json(order)
    } catch (error) {
         res.status(500).json({error:error.message})
    }
}

exports.createorder =async (req,res) => {
    const {userId,products,Price,status} =req.body 
    try {
        const order = await Order.create({userId,products,Price,status})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.orderupdate = async (req,res) => {
const {id} = req.params
const {userId,products,Price,status} = req.body  
    try {
        const order = await Order.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(order)
    }
        catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteorder = async (req,res) => {
    const {id} = req.params
    try {
        const order = await Order.findByIdAndDelete(id)
        res.status(200).json(order)
    }catch (error) {
    res.status(500).json({error:error.message})
    }
}