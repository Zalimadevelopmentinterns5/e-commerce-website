const Product = require('../model/product')

exports.getallproduct = async (req,res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
    res.status(400).json({error: error.message})
    }
}
exports.getproductbyid = async (req,res) => {
    const {id} = req.params
    try {
     const product = await Product.findById(id)
   res.status(201).json(product)
    } catch (error) {
         res.status(500).json({error:error.message})
    }
}

exports.createproduct = async (req,res) => {
    const {name,description,price,category,discountprice} = req.body
    try {
        const product = await Product.create({
            name,
            description,
            price,
            category,
            discountprice,
            image: req.file
                ? `/uploads/products/${req.file.filename}`
                : null
        })

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.productupdate = async (req,res) => {
const {id} = req.params
const {name,description,price,category,image,discountprice} = req.body  
    try {
        const product = await Product.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(product)
    }
        catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.deleteproduct = async (req,res) => {
    const {id} = req.params
    try {
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json(product)
    }catch (error) {
    res.status(500).json({error:error.message})
    }
}