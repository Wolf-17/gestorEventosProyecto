import  { useState } from "react";
import apiClient from "../api/axiosConfig";

const Register = () => {
    const [nombre, setName] = useState("");
    const [correo, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [direccion, setDireccion]=useState("");
    const [telefono, setTelefono]=useState("");
    const [error, setError] = useState("");
  
    const handleRegister = async (e) => {
      e.preventDefault();
      setError("");
      try {
        console.log({nombre, correo, password, direccion, telefono }); 
        const response = await apiClient.post("/usuario/registrar", { nombre, correo, password,direccion, telefono });
        console.log("Usuario registrado:", response.data);
        alert("Usuario registrado correctamente");
      } catch (err) {
        if (err.response) {
          setError(err.response.data.mensaje || "Error al registrarse");
        } else {
          setError("Error al conectar con el servidor");
        }
      }
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Registrarse</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  