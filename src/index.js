const express = require('express')
const morgan = require('morgan')
const server = express()

// Configurations
server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')
server.set('appName', 'crazyServer')


// Middlewares
server.use(morgan('dev'));


// Start server
server.listen(3000, () => {
    console.log(server.get('appName') + " start on port 3000")
})


// Routes
server.get('/', (req, res) => { 
    res.render('index.ejs') 
})

server.get('/login', (req, res) => {
    res.end("Welcome")
})

server.get('/logout', (req, res) => {
    res.end("Come back soon!")
})

server.get('*', (req, res) => {
    res.end("Error 404: Page not found")
})

