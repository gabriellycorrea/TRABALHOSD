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
    console.log('Dados do formulário:', dados);
    setModalIsOpen(true);
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Placa do automóvel:
            <input
              placeholder='Digite a placa do seu automóvel aqui!'
              type="text"
              name="campo1"
              value={dados.campo1}
              onChange={handleChange}
            />
          </label> 
        </form>
      </div>
      <div id='botton'>
        <Link className='Link' to={'/Cadastrar-carro'}>Cadastrar</Link>
        <Link className='Link' to={'/Pagamento'}>Pagar</Link>
      </div>
    </main>
  );
};

export default Tela;