// tela inicial
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tela = () => {
  const [dados, setDados] = useState({
    campo1: '',
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
            Placa do automóvel:
            <input
            className='input-primary '
            placeholder='Digite a placa do carro'
              type="text"
              name="campo1"
              value={dados.campo1}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <div id='botton'>
        <Link className='voltar' to={'/Cadastrar-carro'}>Cadastrar</Link>
        <Link className='voltar' to={'/Pagamento'}>Pagar</Link>
      </div>
    </main>
  );
};

export default Tela;