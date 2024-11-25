import React from "react";
import { Link } from "react-router-dom"; // Para criar um link de volta à página inicial

const Contributors = () => {
  return (
    <div className="contributors-page">
      <h1>Integrantes do Projeto</h1>
      <ul>
        <li>BRUNO VINÍCIUS PAESE</li>
        <li>JOEL ERTHAL</li>
        <li>JOÃO VITOR MAGON</li>
        <li>LUIZ HENRIQUE MAGON</li>
        <li>LUCAS BARBOSA ROSA</li>
      </ul>
      <Link to="/" className="back-btn">Voltar</Link>
    </div>
  );
};

export default Contributors;
