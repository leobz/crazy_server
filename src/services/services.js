'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')

function createToken(user) {
    const payload = { sub: user._id }
    const token = jwt.sign(payload, config.JWS_SECRET_KEY, {
        expiresIn: 1440 // One day
    })

    return token
}

module.exports = { createToken }