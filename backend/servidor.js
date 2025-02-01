const express = require ('express')
const dotenv = require ('dotenv')
const cors = require ('cors')
const conectarBDMongo = require('./src/configuracion/basedatos');
const middleware = require ('./src/middleware/middlewereAutenticacion');



dotenv.config();

const app = express()


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5000',
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}));
app.use('/api/eventos',require('./src/rutas/rutasEvento'))
app.use('/api/usuario',require('./src/rutas/rutasUsuario'))
app.use((error,req,res,next)=>{
    console.error(error.stack);
    res.status(500).json({mensaje:'error en el servidor',error:error.message})
})
const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{console.log(`servidor ejecuntandose en el puerto ${PORT}`)})
app.use((req, res, next)=>{
    res.status(404).json({mensaje:'ruta no encontrada'})
})

conectarBDMongo();