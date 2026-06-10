const express = require('express')
const { getallproduct, getproductbyid, createproduct, productupdate, deleteproduct } = require('../controller/productcontroller')
const router = express.Router()
router.get('/', getallproduct)
router.get('/:id', getproductbyid)
router.post('/', createproduct)
router.put('/:id', productupdate)
router.delete('/:id', deleteproduct)
module.exports = router

