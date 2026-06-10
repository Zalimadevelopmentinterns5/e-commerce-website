const product = require('../model/product')

exports.getallproduct = async (req,res) => {
    try {
        const product = await product.find()
        res.status(200).json(product)
    } catch (error) {
    res.status(400).json({error: error.message})
    }
}
exports.getproductbyid = async (req,res) => {
    const {id} = req.params
    try {
     const product = await product.findById(id)
   res.status(200).json(product)
    } catch (error) {
         res.status(500).json({error:error.message})
    }
}

exports.createproduct =async (req,res) => {
    const {name,description,price,category,image,discountprice} =req.body
    try {
        const product = await product.create({name,description,price,category,image,discountprice})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
exports.productupdate = async (req,res) => {
const {id} = req.params
const {name,description,price,category,image,discountprice} = req.body  
    try {
        const product = await product.findoneAndReplace(id,req.body,{new:true})
        res.status(200).json(product)
    }
        catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteproduct = async (req,res) => {
    const {id} = req.params
    try {
        const product = await product.findByIdAndDelete(id)
        res.status(200).json(product)
    }catch (error) {
    res.status(500).json({error:error.message})
    }
}