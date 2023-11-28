// cadastrar-carro.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tela = () => {
  const [dados, setDados] = useState({
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para lidar com os dados submetidos
    console.log('Dados do formulário:', dados);
    setModalIsOpen(true); // Abre o modal ao enviar o formulário
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main>
      <div id='formulario'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do motorista:
            <input
            className='input-primary '
            placeholder='Digite o nome do motorista'
            type="text"
            name="campo1"
            value={dados.campo1}
            onChange={handleChange}
            />
          </label>
          {/* <br /> */}
          <label>
            Placa do automóvel:
            <input
            className='input-primary '
            placeholder='Digite a placa do carro'
              type="text"
              name="campo2"
              value={dados.campo2}
              onChange={handleChange}
            />
          </label>
          {/* <br /> */}
          {/* <label>
            Horário de entrada:
            <input
              type="time"
              name="campo3"
              value={dados.campo3}
              onChange={handleChange}
            />
          </label>
          <br /> */}
          <label>
            Tipo de estacionamento:
            <select
              name="campo4"
              value={dados.campo4}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="Comum">Comum</option>
              <option value="Exclusive">Exclusive</option>
            </select>
          </label>
          {/* <br /> */}
          {/* <label>
            Quantidade de horas:
            <input
              type="text"
              name="campo5"
              value={dados.campo5}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
                setDados((prevDados) => ({
                  ...prevDados,
                  campo5: value,
                }));
              }}
            />
          </label> */}
          <br />
        </form>
      </div>
      <div id='botton'>
        <Link className='voltar' to={'#'}>Concluir</Link>
        <Link className='voltar' to={'/'}>Voltar</Link>
      </div>
    </main>
  );
};

export default Tela;