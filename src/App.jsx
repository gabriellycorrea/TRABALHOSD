/* tela-inicial.js */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Main  () {
  return (
    <div id='main'>
      <Link className='Link' to={'/Cadastrar-carro'}>LOCAR ESTACIONAMENTO</Link>
      <Link className='Link' to={'#'}>PAGAR</Link>
    </div>
  );
}