const express = require('express')

const studentController = require('../controllers/studentController')
const router = express.Router()

router.post('/add-student',studentController.insertUser)
router.get('/get-students',studentController.getUsers)
router.put('/update-student/:id',studentController.updateUser)
router.delete('/delete-student/:id',studentController.deleteUser)

module.exports = router
