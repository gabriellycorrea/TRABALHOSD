// BuscarPlaca.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PLACAS = [
  'A', 'B', 'C', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const BuscarPlaca = () => {
  const [placa, setPlaca] = useState('');
  const placaSelecionada = PLACAS.find(placaAtual => placaAtual.includes(placa))

  const buscarPlaca = () => {
    // Realize a lógica de busca aqui (substitua com sua lógica real)
    console.log();
    if (placa) {
      alert(`O QRcode de pagamento foi enviado ao seu celular!`);
    } else {
      alert('Por favor, digite uma placa para buscar.');
    }
  };

  return (
    <main className="container">
      <label htmlFor="placa">Buscar Placa:</label>
      <input
        className='input-primary'
        type="text"
        id="placa"
        placeholder="Digite a placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <div id='botton'>
        <Link className='voltar' to={''} onClick={buscarPlaca}>Concluir</Link>
        <Link className='voltar' to={'/'}>Voltar</Link>
      </div>
      {/* {placaSelecionada.map(placaSele => (
        <p>{placaSele}</p>
      ))} */}
    </main>
  );
};

export default BuscarPlaca;
