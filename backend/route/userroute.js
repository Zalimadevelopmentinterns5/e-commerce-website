const express = require('express')
const { getalluser, getuserbyid, createuser, userupdate, deleteuser } = require('../controller/usercontroller')
const router = express.Router()

router.get('/', getalluser)
router.get('/:id', getuserbyid)
router.post('/', createuser)
router.put('/:id', userupdate)
router.delete('/:id', deleteuser)
module.exports = router