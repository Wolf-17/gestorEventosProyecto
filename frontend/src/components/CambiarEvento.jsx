import {   useEffect, useState } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import apiClient from '../api/axiosConfig';

const CambiarEvento=()=>{
    const {id}= useParams()
    const navigate= useNavigate();
    const [error, setError]= useState();
    const [evento, setEvento]= useState({
    nombreEvento: "",
    fechaEvento: "",
    horaEvento: "",
    ubicacionEvento: "",
    descripcion: ""
    });

    useEffect(()=>{
        const fechtCambiarEvento= async()=>{
            try{
                const response = await apiClient.get(`/eventos/${id}`)
                if (response.data) {
                  setEvento(response.data);
              } else {
                  setError("No se encontraron datos del evento");
              }
            }  catch (error) {
              setError(error.response?.data?.mensaje || "Error al conectar con el servidor");
          }    
  };
  fechtCambiarEvento();
  }, [id]);

  const EditarFormulario = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const EditarCambios = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response=await apiClient.put(`/eventos/${id}`, evento, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("Evento editado:", response.data);
      alert("Evento editado con éxito");
      navigate("/eventos"); 
    } catch (error) {
        if(error.response){
            setError(error.response.data.mensaje || "Error al editar el evento")
        }else{
            setError("Error al conectar con el servidor")
        };
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Modificar Evento</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={EditarCambios} className="space-y-4">
        <input type="text" name="nombreEvento" value={evento.nombreEvento} onChange={EditarFormulario} required className="w-full p-2 border"/>
        <input type="date" name="fechaevento" value={evento.fechaEvento} onChange={EditarFormulario} required className="w-full p-2 border"/>
        <input type="time" name="horaEvento" value={evento.horaEvento} onChange={EditarFormulario} required className="w-full p-2 border"/>
        <input type="text" name="ubicacionEvento" value={evento.ubicacionEvento} onChange={EditarFormulario} required className="w-full p-2 border"/>
        <textarea name="descripcion" value={evento.descripcion} onChange={EditarFormulario} required className="w-full p-2 border"/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Guardar Cambios</button>
      </form>
    </div>
  );
};


export default  CambiarEvento;