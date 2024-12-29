// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Cadastro from './components/Cadastro';
import Consulta from './components/Consulta';
import Editar from './components/Editar';
import Relatorio from './components/Relatorio'; 
import './styles/App.css';
import Footer from './components/Footer'; // Importe o Footer

const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/consulta" element={<Consulta />} />
          
          <Route path="/relatorios" element={<Relatorio />} />
          <Route path="/editar/:id_local" element={<Editar />} />
        </Routes>
        <Footer /> {/* Adicione o Footer aqui */}
      </div>
    </Router>
  );
};

export default App;
