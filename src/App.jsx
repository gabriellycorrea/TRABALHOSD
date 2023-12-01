import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tela = () => {
  return (
    <main>
      <form>
        <label>
          Placa do automóvel:
          <input
            type="text"
            placeholder='Digite a placa do seu automóvel aqui!'
          />
        </label> 
      </form>
      <div id='botton'>
        <Link className='Link' to={'/Cadastrar-carro'}>Cadastrar</Link>
        <Link className='Link' to={'/Pagamento'}>Pagar</Link>
      </div>
    </main>
  );
};

export default Tela;