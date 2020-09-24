const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('./model/products')

 
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

router.get('*', (req, res) => {
    res.end("Error 404: Page not found")
})


module.exports = router
