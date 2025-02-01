const Usuario = require("../modelos/Usuario")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_para_jwt'

// Registrar un nuevo usuario
exports.registrarUsuario = async (req,res)=>{
    try{
        const { nombre, correo, password,  direccion, telefono}= req.body;
        if (!nombre || !correo|| !password || !direccion|| !telefono ) {
            return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
        }
        //verificar si el usuario existe
        const usuarioExistente = await Usuario.findOne({ correo });
        if(usuarioExistente){
            return res.status(400).json({ mensaje: 'El correo ya esta en uso'});
        }

        //Encriptar la contraseña
        const passwordEncriptado = await bcrypt.hash(password, 10);

        //Crear un nuevo usuario
        const nuevoUsuario =new Usuario({
            nombre,
            correo,
            password: passwordEncriptado ,
            direccion ,
            telefono,
        });

        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario registrado con éxito'});
    }catch(error){
        console.log(error);
        res.status(500).json({ mensaje: 'Error al registrar el usuario '})
    }
};

// Iniciar sesión de un usuario
exports.iniciarSesion = async(req,res)=>{
    try{
        const {correo,password}= req.body;
// Verificar si el usuario existe
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(400).json({mensaje:"Correo o contraseña incorrectos"})
        }
// Verificar la contraseña
        const esPasswordValido = await bcrypt.compare(password, usuario.password);
        if(!esPasswordValido){
            return res.status(400).json({mensaje: "Correo o contraseña incorrectos"})
        }

        
        // Crear el token JWT
        const token = jwt.sign({id: usuario._id}, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({mensaje: "Inicio de sesión exitoso", token})
    }catch(error){
        res.status(500).json({ mensaje: 'Error al iniciar sesión', error: error.message });
    }
};


exports.obtenerUsuario = async(req, res)=>{
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios)
    }catch(error){
        res.status(500).json({mensaje:"error al obtener el usuario", error:error.message})
    }
}

exports.actualizarUsuario = async(req, res) =>{
    try{
        const usuarioActualizado = Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(usuarioActualizado)
    }catch(error){
        res.status(500).json({mensaje:"error al actualizar el usuario", error:error.message})
    }
}

exports.eliminarUsuario = async(req,res)=>{
   try{
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({mensaje:"usuario eliminado correctamente"})
   }catch(error){
    res.status(500).json({mensaje:"Error al eliminar el usuario"})
   }
};