const express = require('express')
const router = express.Router()
const AuthController = require('./controllers/auth')
const ProductController = require('./controllers/product')

router.get('/', (req, res) => {res.render('index.ejs')})

router.post('/shop', ProductController.createProduct)

router.post('/user', AuthController.signUp)

router.get('*', (req, res) => {res.end("Error 404: Page not found")})

module.exports = router
