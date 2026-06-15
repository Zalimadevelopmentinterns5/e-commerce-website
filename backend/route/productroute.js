console.log("PRODUCT ROUTE LOADED")
const express = require('express')
const { getallproduct, getproductbyid, createproduct, productupdate, deleteproduct } = require('../controller/productcontroller')
const { uploadProduct } = require("../middleware/upload");
const router = express.Router()
router.get('/', getallproduct)
router.get('/:id', getproductbyid)
router.post('/', uploadProduct.single('image'), createproduct)
router.put('/:id', productupdate)
router.delete('/:id', deleteproduct)
module.exports = router 