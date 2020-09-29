'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    picture: {type: String, default: 0},
    price: Number,
    category: {type: String, enum: ['computers', 'phone', 'accesories']
    },
    description: String
})

exports.Product = mongoose.model('Product', ProductSchema)