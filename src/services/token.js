'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const {authError} = require('./errorHandlers')


function createToken(user) {
    const payload = { sub: user._id }
    const token = jwt.sign(payload, config.JWS_SECRET_KEY, {
        expiresIn: 1440 // One day
    })

    return token
}

function verifyToken(req, res, next) {
    const token = req.headers['access-token'] 

    if (token) {
        try {
            req.decoded = jwt.verify(token, config.JWS_SECRET_KEY)
            console.log("Token verified!")
            next()
        }
        catch(err){
            authError(res, err)
        }
    }
    else {authError(res, "There is no token")}
}

module.exports = {createToken, verifyToken}
