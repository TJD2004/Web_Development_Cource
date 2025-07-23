const express = require('express')
const router = express.Router()
const {getUser, createUser, updateUser, deleteUser} = require('../controller/userController')


router.get('/user', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


module.exports = router