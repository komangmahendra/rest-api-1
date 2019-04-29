const router = require('express').Router()
const userController = require('../controllers/user')
const Todo = require('./todos')

router.post('/api/signin', userController.signIn)
router.post('/api/signup', userController.signUp)
router.use('/api/todos', Todo)

router.get('/*', function( req, res) {
    res.status(404).json({ message : 'Not Found'} )
})

module.exports = router