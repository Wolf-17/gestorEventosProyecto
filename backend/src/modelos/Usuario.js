const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    nombre:{ type: String, required:true},
    correo:{ type: String, required:true, unique:true},
    password:{ type: String, required: true},
    direccion:{ type: String, required: true},
    telefono:{ type: String, required:true},
    fechaCreacion:{ type: Date, default: Date.now}
})

module.exports=mongoose.model('Usuario', UsuarioSchema);