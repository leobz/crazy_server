'use strict'

const User = require('../model/user')
const services = require('../services/token')
const { internalError } = require('../services/errorHandlers')
const { notFoundError } = require('../services/errorHandlers')

function signUp(req, res) {
    let user = new User()
    user.email = req.body.email
    user.displayName = req.body.displayName
    user.password = req.body.password

    user.save((err, stored) => {
        if (err) notFoundError(res, `Error creating user: ${err}`)

        try {
            res.status(200).send({ token: services.createToken(user) })
        }
        catch (error) {
            console.log(error)
        }
    })
}

function signIn(req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) internalError(res, err)
        if (!user || user.length == 0) { notFoundError(res, 'User not exist') }
        else {
            req.user = user
            res.status(200).send({
                message: 'Successful login',
                token: services.createToken(user)
            })
        }
    })
}

module.exports = { signUp, signIn }