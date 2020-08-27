const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./router')

// Configurations
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('appName', 'crazyServer')


// Middlewares
app.use(morgan('dev'));


// Start server
app.listen(3000, () => {
    console.log(app.get('appName') + " start on port 3000")
})


// Routes
app.use('/', router)

