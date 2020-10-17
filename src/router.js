'use strict'
const express = require('express')
const router = express.Router()
const AuthController = require('./controllers/user')
const ProductController = require('./controllers/product')
const token = require('./services/token')

router.get('/login', (req, res) => { res.render('login') })
router.post('/login', AuthController.login)

router.get('/signup', (req, res) => { res.render('signUp') })
router.post('/signup', AuthController.signUp)


router.post('/shop', ProductController.createProduct)

router.get('/private', token.verifyToken, (req, res) => {
    res.send({ msg: 'You have access' })
})

router.get('*', (req, res) => { res.end("Error 404: Page not found") })

module.exports = router
