const router = require('express').Router()
const userController = require('../controllers/user')
const Todo = require('./todos')

router.post('/api/signin', userController.signIn)
router.post('/api/signup', userController.signUp)
router.use('/api/todos', Todo)

module.exports = router