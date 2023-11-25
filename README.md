# Trabalho de Sistemas Distribuidos - GCC129
> Grupo composto por: Fabrício Alves Smargiasse, Gabrielly Cristina Ferreira Correa e Jaqueline da Silva Nicolau
## Um pouco sobre o React
> <img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />
>O React (também conhecido como React.js ou ReactJS) é uma biblioteca de código aberto em JavaScript para construir interfaces de usuário baseadas em componentes. É mantido pela Meta (antigo Facebook) e uma comunidade de desenvolvedores individuais e empresas.
> 
> O React pode ser utilizado para desenvolver aplicações de página única, mobile ou renderizadas no servidor com frameworks como o Next.js. Como o React está focado exclusivamente na interface do usuário e na renderização de componentes no DOM, as aplicações React frequentemente dependem de bibliotecas para roteamento e outras funcionalidades do lado do cliente.
### Criando um App React
> Para aprender e testar o React, você deve configurar um Ambiente React em seu computador.
> 
> Neste tutorial utilizamos o <code>create-react-app</code>
>
> A ferramenta é uma maneira oficialmente suportada de criar aplicações React.
>
> O `Node.js` é necessário estar instalado para utilizar o <code>create-react-app</code>.
> 
> Abra seu terminal no diretório onde você gostaria de criar sua aplicação.
> 
> Execute este comando para criar uma aplicação React chamada "my-react-app": <code>npx create-react-app my-react-app</code>
>
> O comando <code>create-react-app</code> configurará tudo que você precisa para executar um aplicativo React.
>
> *Obs: se você já instalou globalmente anteriormente, é recomendável desinstalar o pacote para garantir que o npx sempre use a versão mais recente. Para desinstalar, execute este comando: <code>create-react-appcreate-react-appnpm desinstalar -g criar-react-app</code>*
>
> Isso criará um diretório chamado "my-react-app" dentro da pasta atual.
> Dentro desse diretório, irá gerar uma estrutura inicial do projeto semelhante a abaixo, além de instalar as dependências transitivas:
```
my-react-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```
### Rodando a aplicação React
> Execute este comando para ir para o diretório "my-react-app": <code>cd my-react-app</code>
>
> Execute este comando para executar o aplicativo React "my-react-app": <code>npm start</code>
>
> Uma nova janela do navegador aparecerá com seu aplicativo React recém-criado!
>
> Caso contrário, abra seu navegador e digite na barra de endereço `localhost:3000`
>
> O resultado:
> 
![Tela incial de quando a aplicação React é executada pela primeira vez](https://www.w3schools.com/react/screenshot_myfirstreact.png)

### O clássico exemplo de código
> Por tradição, o exemplo básico em qualquer linguagem que se estuda é o "Hello World!".
>
> Então vamos demostrar esse exemplo no React:
```
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
```
> O resultado:
> 
![exemplo de código do Hello World](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/5a3836f9-c8c4-416c-813a-8de77c283778)

## O trabalho em específico 
### Introdução
> O trabalho teve como objetivo aplicarmos nossos conhecimentos teóricos na prática, desenvolvendo um sistema distribuído com tecnologia `React.js`.
> Para aplicação desses, foi suposto o cenário de um <strong>estacionamento inteligente</strong>, onde o grupo deveria criar uma aplicação baseada em <strong>formulários</strong>
> no qual a maior parte do processo de locação fosse automática. Assim nasceu a ideia desta aplicação, que consiste em uma forma de coletar os dados do motorista que deseja locar o
> estacionamento e quando o mesmo retornar para retirar seu carro, bastasse ele inserir a placa dele que a aplicação retornará seus dados para confirmação e o preço total da locação.   
