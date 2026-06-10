const express = require('express')
const { getallproduct, getproductbyid, createproduct, productupdate, deleteproduct } = require('../controller/productcontroller')
const router = express.Router()
router.get('/products', getallproduct)
router.get('/products/:id', getproductbyid)
router.post('/products', createproduct)
router.put('/products/:id', productupdate)
router.delete('/products/:id', deleteproduct)
module.exports = router
