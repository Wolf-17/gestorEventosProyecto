import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Eventos from "./components/Eventos";
import CrearEvento from "./components/CrearEvento"
import CambiarEvento from "./components/CambiarEvento";
import './App.css'
import 'vite/modulepreload-polyfill'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iniciarsesion" element={<Login />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/crear-Evento" element={<CrearEvento/>} />
        <Route path="/cambiarEvento/:id" element={<CambiarEvento/>}/>
      </Routes>
    </div>
  );
};

export default App;
