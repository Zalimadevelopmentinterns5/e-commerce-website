const order = require('../model/order')

exports.getallorder = async (req,res) => {
    try {
        const order = await order.find()
        res.status(200).json(order)
    }
        catch (error) {
    res.status(400).json({error: error.message})
    }
}
exports.getorderbyid = async (req,res) => {
    const {id} = req.params
    try {
     const order = await order.findById(id)
   res.status(200).json(order)
    } catch (error) {
         res.status(500).json({error:error.message})
    }
}

exports.createorder =async (req,res) => {
    const {userId,products,totalPrice,status} =req.body 
    try {
        const order = await order.create({userId,products,totalPrice,status})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.orderupdate = async (req,res) => {
const {id} = req.params
const {userId,products,totalPrice,status} = req.body  
    try {
        const order = await order.findoneAndReplace(id,req.body,{new:true})
        res.status(200).json(order)
    }
        catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteorder = async (req,res) => {
    const {id} = req.params
    try {
        const order = await order.findByIdAndDelete(id)
        res.status(200).json(order)
    }catch (error) {
    res.status(500).json({error:error.message})
    }
}