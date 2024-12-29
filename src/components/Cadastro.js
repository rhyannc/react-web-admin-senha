// src/components/Cadastro.js
import React, { useState } from 'react';
import axios from 'axios';
import api from '../services/api'; // Importa a instância do Axios

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');
    try {
      await api.post('/insertlocal', { name: nome,
      description: descricao, });
      setMensagem('Cadastro realizado com sucesso!');
      setNome('');
      setDescricao('');
    } catch (error) {
      console.error(error);
      setErro('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <div className="content">
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Digite o nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            placeholder="Digite a descrição"
          />
        </div>
        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
        {erro && <p className="mensagem-erro">{erro}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </div>
  );
};

export default Cadastro;
