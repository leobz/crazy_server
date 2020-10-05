'use strict'
const express = require('express')
const router = express.Router()
const AuthController = require('./controllers/user')
const ProductController = require('./controllers/product')
const token = require('./services/token')

router.get('/', (req, res) => { res.render('signUp') })

router.post('/shop', ProductController.createProduct)

router.post('/user', AuthController.signUp)

router.post('/signin', AuthController.signIn)

router.get('/private', token.verifyToken, (req, res) => {
    res.send({ msg: 'You have access' })
})

router.get('*', (req, res) => { res.end("Error 404: Page not found") })

module.exports = router
