 import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const usuarioGuardado = localStorage.getItem("usuario");
      if (usuarioGuardado) {
        setUsuario(JSON.parse(usuarioGuardado));
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      setUsuario(null);
      navigate("/iniciarsesion");
    };
  const CrearEvento = ()=>{
    navigate("/crear-Evento")
  }

  const CambiarEvento = ()=>{
    const IdEvento= prompt("Ingrese el Id del evento a modificar")
    if(IdEvento){
      console.log("Navegando a:", `/cambiarEvento/${IdEvento}`)
      navigate(`/cambiarEvento/${IdEvento}`)
    }else{
      alert("Ingrese un id valido")
    }
  }
    return (
      <header className="bg-gray-600 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h2 className="text-lg font-bold">Gestor de Eventos</h2>
          <div className="flex space-x-4 items-center">
          {usuario && location.pathname === "/eventos" && (
           <div className=" flex space-x-6">
            <button
               onClick={CrearEvento}
               className="text-red-500 hover:text-blue-300 ml-4">
                    Crear evento
                 </button>
                 <spam className="text-gray-400"> </spam>
                 <button
               onClick={CambiarEvento}
               className="text-red-500 hover:text-blue-300 ml-4">
                    Cambiar Evento
                 </button></div> )}
                { usuario ? ( // Mostrar solo en /productos
              <>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faUser} className="text-gray-300" />
                  <span className="text-gray-300">{usuario.nombre}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-blue-300 ml-4"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link to="/iniciarsesion" className="hover:text-gray-300">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
    
 
