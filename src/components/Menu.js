// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            {/* Se tiver uma logo, substitua o texto abaixo pela imagem da logo */}
            <h1>Admin AwSenha</h1>
          </Link>
        </div>
        <ul className="menu-links">
          <li><Link to="/">Cadastro</Link></li>
          <li><Link to="/consulta">Consulta</Link></li>
          <li><Link to="/relatorios">Relatórios</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
