const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('./model/products')
const User = require('./model/user')
const bcrypt = require('bcrypt')


router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/login', (req, res) => {
    res.end("Welcome")
})

router.get('/logout', (req, res) => {
    res.end("Come back soon!")
})

router.post('/shop', (req, res) => {
    console.log(req.body)
    let product = new Product.Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, stored) => {
        res.status(200).send({
            product: stored
        })
    })
})

router.post('/user', (req, res) => {
    console.log(req.body)
    let user = new User()
    user.email = req.body.email
    user.displayName = req.body.displayName
    user.password = req.body.password

    user.save((err, stored) => {
        if (err) console.log(err)

        res.status(200).send({
            user: stored
        })
    })
})

router.get('*', (req, res) => {
    res.end("Error 404: Page not found")
})

module.exports = router
