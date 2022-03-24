const express = require('express');
const cors = require('cors');


class Server{
  
  constructor(){
    this.app = express(); //* Corriendo app de express
    this.port = process.env.PORT; //* Guardando puerto de variables de entorno
    this.usuariosPath = '/api/usuarios'; //* Ruta principal de la API

    //* Middlewares
    this.middlewares(); 

    //* Rutas de mi aplicacion
    this.routes(); //* Invocando rutas
  }

  middlewares(){
    //* CORS
    this.app.use(cors()); //* Habilitando CORS
    //* Lectura y parseo del body
    this.app.use(express.json()); //* Parseando JSON de un POST, PUT, DELETE o PATCH
    //* Directorio público
    this.app.use(express.static('public')); //* Sirviendo contenido estático(index.html)
  }

  //TODO: Método que guarda las rutas
  routes(){
    //* Middleware que define la ruta principal en donde está la respuesta de la API creada
    this.app.use(this.usuariosPath,require('../routes/usuarios')); //* usando archivo de la carpeta routes para cargar las rutas
  }

  // TODO: Método para iniciar servidor http y definir puerto
  listen(){
    this.app.listen(this.port,() => {
      console.log('Servidor corriendo en puerto',this.port);
    });
  }
}

module.exports = Server;