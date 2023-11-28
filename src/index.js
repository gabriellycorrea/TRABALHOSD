import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tela from './pages/Cadastrar-carro';
import BuscarPlaca from './pages/Pagamento';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  //elemento da pagina de cadastrar o carro 
  {
    path:'/Cadastrar-carro',
    element: <Tela/>
  },
  //elemento da pagina de pesquisa carro
  {
    path:'/Pagamento',
    element: <BuscarPlaca/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
