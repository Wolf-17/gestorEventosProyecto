const Eventos = require ('../modelos/Eventos')

exports.CrearEventos = async(req, res) =>{
    try {
        const iniciarevento = new Eventos(req.body)
        await iniciarevento.save()
        res.status(201).json(iniciarevento)
    } catch (error) {
        res.status(500).json({mensaje:"Error al crear el evento", error:error.message})
    }
}

exports.FiltrarUbicacionEventos = async(req,res)=>{
    try{
        const filtrarUbicacion = await  Eventos.find({"ubicacionEvento":req.params.ubicacionEvento});
        res.status(200).json(filtrarUbicacion)
    }catch(error){
        res.status(500).json({mensaje:'error al filtar el evento', error:error.message})
    }
}


exports.filtarFechaEvento =async(req, res)=>{
    try{
        const{fechaInicio, fechaFinal}= req.params;
        const inicio= new Date(fechaInicio)
        const final= new Date(fechaFinal)
        if(isNaN(inicio) || isNaN(final)){
            return res.status(400).json({ error: ' fechas invalidas. Use el formato YYYY-DD-MM '})
        }
        const filtrarFecha= await Eventos.find({fechaEvento:{
            $gte: inicio,
            $lte: final,
        }, })
        res.status(200).json(filtrarFecha);
    }catch(error){
        res.status(500).json({ mensaje: 'Error al filtrar el eventos por fecha', error: error.message})
    }
}



exports.ObtenerEventos = async(req, res) =>{
    try{
        const eventos = await Eventos.find()
        res.status(200).json(eventos);
    }catch(error){
        res.status(500).json({mensaje: "error al obtener el evento", error:error.message})
    }
}

exports.ActualizarEventos = async(req, res) =>{
    try{
        debugger;
        const eventoActualizado = await Eventos.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(eventoActualizado);
    }catch (error){
        res.status(500).json({mensaje:"error al actualizar el evento", error:error.message})
    }
}

exports.EliminarEventos = async(req, res) =>{
    try{
       await Eventos.findByIdAndDelete(req.params.id);
       res.status(200).json({mensaje: "evento eliminado correctamente"})
    }catch{
        res.status(500).json({mensaje: "error al eliminar el evento", error:error.message})
    }
}