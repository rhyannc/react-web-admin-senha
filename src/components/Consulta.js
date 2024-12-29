// src/components/Consulta.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../services/api'; // Importa a instância do Axios
import { FaTrash, FaPen } from 'react-icons/fa'; // Importe o ícone de edição
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate
import ModalConfirmacao from './ModalConfirmacao'; // Importe o modal

const Consulta = () => {
  const [dados, setDados] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate(); // Inicialize o hook

  const fetchDados = async () => {
    try {
      const response = await api.get('/listarlocal');
      setDados(response.data); // Ajuste se a resposta for um array
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar dados.');
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  /*const handleDelete = async (id_local) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      try {
        await axios.delete(`https://awatec.ddns.com.br/deletelocal/${id_local}`);
        setDados(dados.filter((item) => item.id_local !== id_local));
      } catch (error) {
        console.error(error);
        alert('Erro ao excluir o item.');
      }
    }
  };*/

  const handleDelete = async () => {
    try {
      await api.delete(`/deletelocal/${itemSelecionado.id_local}`);
      setDados(dados.filter((item) => item.id_local !== itemSelecionado.id_local));
      setMostrarModal(false);
      setItemSelecionado(null);
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir o item.');
    }
  };

  const abrirModal = (item) => {
    setItemSelecionado(item);
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setItemSelecionado(null);
  };

  const handleEdit = (item) => {
    // Navega para a rota de edição, passando o item como estado
    navigate(`/editar/${item.id_local}`, { state: { item } });
  };

  return (
    <div className="content">
      <div className="container">
        <h2>Consulta</h2>
        <div className="lista-dados">
          {dados.map((item) => (
            <div className="card" key={item.id_local}>
            <div className="card-buttons">
            <button
                  className="btn-editar"
                  onClick={() => handleEdit(item)}
                  title="Editar"
                >
                  <FaPen />
                </button>
                <button
                  className="btn-excluir"
                  onClick={() => abrirModal(item)}
                  title="Excluir"
                >
                <FaTrash />
              </button>
            </div>
          
            <p><strong>Nome:</strong> {item.name}</p>
            <p><strong>Descrição:</strong> {item.description}</p>
          </div>
          
          ))}
        </div>
      </div>
      <ModalConfirmacao
        mostrar={mostrarModal}
        fecharModal={fecharModal}
        confirmarAcao={handleDelete}
        titulo="Confirmar Exclusão"
        mensagem={`Tem certeza que deseja excluir "${itemSelecionado?.name}"?`}
      />
    
    </div>
  );

 /* return (
    <div className="content">
    <div className="container">
      <h2>Consulta</h2>
      <ul>
        {dados.map((item) => (
          <li key={item.id_local}>
            <strong>Nome:</strong> {item.name} <br />
            <strong>Descrição:</strong> {item.description} <br />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );*/
};

export default Consulta;
