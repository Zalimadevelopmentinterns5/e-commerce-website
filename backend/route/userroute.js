const express = require('express')
const { getalluser, getuserbyid, createuser, userupdate, deleteuser } = require('../controller/usercontroller')
const { uploadUser } = require("../middleware/upload");
const router = express.Router()
router.get('/', getalluser)
router.get('/:id', getuserbyid)
router.post('/', uploadUser.single('image'), createuser)
router.put('/:id', userupdate)
router.delete('/:id', deleteuser)
module.exports = router