//* Importando response para que se reconozca el 'res' en estas funciones que se usaran como callback 
//* de las rutas definidas
const { response, request } = require('express'); 


const usuariosGet = (req = request, res = response) => {
  const { q,nombre = 'No name', apiKey, page = 1, limit }= req.query;

  res.json({
    msg: 'get API - controlador',
    q,
    nombre,
    apiKey,
    page,
    limit
  });
}

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body; //* JSON enviado al cuerpo del método http POST

  res.json({
    msg: 'post API - usuariosPost',
    nombre,
    edad,
  });
}

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params; //* Obteniendo id pasado en la ruta del endpoint

  res.json({
    msg: 'put API - usuariosPut',
    id,
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - usuariosDelete'
  });
}


const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - usuariosPatch'
  });
}




module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
}