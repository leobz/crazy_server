const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const exphbs  = require('express-handlebars');
const cors = require("cors")

// Configurations
app.use(cors())
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')
app.set('appName', 'crazyServer')

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())

// Start server
app.listen(3000, () => {
    console.log(app.get('appName') + " start on port 3000")
})

// Routes
app.use('/', router)

// Mongoose
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB connection successful')
    } catch (error) {
        console.error(error);
    }
}

connect();
