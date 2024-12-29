// src/components/Editar.js
import React, { useState } from 'react';
import axios from 'axios';
import api from '../services/api'; // Importa a instância do Axios
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Editar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id_local } = useParams();
  const [nome, setNome] = useState(location.state?.item.name || '');
  const [descricao, setDescricao] = useState(location.state?.item.description || '');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');
    try {
      await api.put(`/updatelocal`, {
        id_local: id_local,
        name: nome,
        description: descricao,
      });
      setMensagem('Alteração realizada com sucesso!');
      // Redireciona de volta para a consulta após a alteração
      navigate('/consulta');
    } catch (error) {
      console.error(error);
      setErro('Erro ao alterar. Por favor, tente novamente.');
    }
  };

  return (
    <div className="content">
      <div className="container">
        <h2>Editar</h2>
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
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
};

export default Editar;
