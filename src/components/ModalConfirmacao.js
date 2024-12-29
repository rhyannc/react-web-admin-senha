// src/components/ModalConfirmacao.js
import React from 'react';
import './ModalConfirmacao.css';

const ModalConfirmacao = ({ mostrar, fecharModal, confirmarAcao, titulo, mensagem }) => {
  if (!mostrar) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <h3>{titulo}</h3>
        <p>{mensagem}</p>
        <div className="modal-botoes">
          <button onClick={fecharModal} className="btn-cancelar">Cancelar</button>
          <button onClick={confirmarAcao} className="btn-confirmar">Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacao;
