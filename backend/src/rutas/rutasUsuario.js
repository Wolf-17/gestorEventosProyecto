const express = require('express')
const router = express.Router()
const controladorusuario = require('../controlador/controladorUsuario')

router.post('/registrar',controladorusuario.registrarUsuario)
router.post('/iniciarsesion',controladorusuario.iniciarSesion)
router.get('/',controladorusuario.obtenerUsuario)
router.put('/:id',controladorusuario.actualizarUsuario)
router.delete('/:id',controladorusuario.eliminarUsuario)



module.exports=router;