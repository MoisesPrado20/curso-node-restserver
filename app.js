require('dotenv').config(); 

const Server = require('./models/server');

const server = new Server(); //* Instancia de clase que levanta el servidor
server.listen(); //* Inicializando servidor




