'use strict'

const Product = require('../model/product')

function createProduct(req, res) {
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
}

module.exports = { createProduct }