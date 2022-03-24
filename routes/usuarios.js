const { 
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} = require('../controllers/usuarios');


const { Router } = require('express'); //* Importando Router
const router = Router();   //* Invocando Router


router.get('/',usuariosGet);

router.post('/',usuariosPost);

//*  '/:id' significa que se le puede pasar un id a la URL para mostrar solo info con ese id en el JSON 
router.put('/:id',usuariosPut);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);



module.exports = router;