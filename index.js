const express = require('express')
const morgan = require('morgan')
const server = express()

// Configuraciones
server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')

server.get('/', (req, res) => { 
    res.render('index.ejs') 
})


server.get('/login',
    (req, res) => { res.end("Bienvenido")}
)

server.set('nombre-app', 'mi-primer-server')

server.listen(3000, () => {
    console.log("Se levantó el servidor " + server.get('nombre-app') + " en el puerto 3000")
})



server.use(morgan('dev'));

// Rutas


server.get('/logout',
    (req, res) => { res.end("Vuelva pronto")}
)

server.get('*',
    (req, res) => { res.end("Mensaje por default: La ruta no existe")}
)


