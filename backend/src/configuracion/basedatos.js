const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
dotenv.config()

const  conectarBD = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
           console.log('conectado a la base de datosBD')
        
    }catch(error){
        console.error('Error en la conexion a mongoBD', error)
        process.exit(1)
    }
}

module.exports = conectarBD