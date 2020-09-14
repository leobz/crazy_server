const express = require('express')
const mysql = require('mysql')
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
//app.use('/', router)


// MySQL

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nativeuser',
    password: 'password',
    database: 'prueba'
});

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!')
});


// Users SQL Query
app.get('/users', (req, res) => {
    const querySQL = 'SELECT * FROM prueba.Usuario'

    connection.query(querySQL, (error, results) => {
        if (error) throw error;
        res.json(results);
    })

})