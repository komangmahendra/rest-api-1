const todoController = require('../../controllers/todo')
const router = require('express').Router()
const Auth = require('../../middlewares/auth')

router.use(Auth.Authenticate)
router.post('/', todoController.create)
router.get('/', todoController.getAll)

router.get('/:id', Auth.Authorize, todoController.getById)
router.delete('/:id', Auth.Authorize, todoController.delete)
router.patch('/:id', Auth.Authorize, todoController.update)
router.put('/:id', Auth.Authorize, todoController.updatePut)

module.exports = router