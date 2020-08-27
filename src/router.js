const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { 
    res.render('index.ejs') 
})

router.get('/login', (req, res) => {
    res.end("Welcome")
})

router.get('/logout', (req, res) => {
    res.end("Come back soon!")
})

router.get('*', (req, res) => {
    res.end("Error 404: Page not found")
})

module.exports = router