const express = require('express')
const router = express.Router()
const controladorevento = require('../controlador/controladorEvento')

router.post('/',controladorevento.CrearEventos);
router.get('/',controladorevento.ObtenerEventos);
router.get('/:ubicacionEvento',controladorevento.FiltrarUbicacionEventos);
router.get('/:fechaInicio/:fechaFinal',controladorevento.filtarFechaEvento);
router.put('/:id',controladorevento.ActualizarEventos);
router.delete('/:id',controladorevento.EliminarEventos);



module.exports=router;