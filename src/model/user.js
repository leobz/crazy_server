'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    profilePicture: String,
    password: { type: String, select: false },
    signupDate: { type: Date, default: Date.now },
    lastLogin: Date
})

UserSchema.pre('save', function (next) {
    let user = this
    if (!user.isModified('password')) return next()

    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err)

        user.password = hash
        next()
    })
})

module.exports = mongoose.model('User', UserSchema)
