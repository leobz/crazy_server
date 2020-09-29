'use strict'

const User = require('../model/user')
const services = require('../services/services')

function signUp(req, res) {
    let user = new User()
    user.email = req.body.email
    user.displayName = req.body.displayName
    user.password = req.body.password

    user.save((err, stored) => {
        if (err) res.status(500).send({message: `Error creating user: ${err}`})

        try{
            res.status(200).send({token: services.createToken(user)})
        }
        catch (error) {
            console.log(error)
        }
    })
}   

function signIn (req, res) {

}

module.exports = {
    signUp,
    signIn
}