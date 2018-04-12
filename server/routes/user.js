const router = require('express').Router()
const userController = require('../controllers/userController')

router
  .get('/', (req,res)=>{res.send(`Halaman User`)})
  .post('/signup', userController.signup)
  .post('/signin', userController.signin)

module.exports = router
