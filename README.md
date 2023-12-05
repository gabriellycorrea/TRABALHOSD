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

## React no Replit
### Sobre o Replit 
> Replit, anteriormente Repl.it, é uma start-up americana e um ambiente de desenvolvimento integrado on-line (IDE). Replit sendo Software as a service (SaaS) permite aos usuários criar projetos on-line (chamados Repls, não confundir com REPLs) e escrever código. A Replit tem uma comunidade global para programadores interagirem e oferece ao Teams for Education, um produto para auxiliar no ensino de programação em sala de aula.
### Criando o projeto
> Deixando a introdução de lado, vamos ver como criar uma aplicação React por meio do Replit.
>
> Primeiramente, é necessário que você tenha uma conta criada dentro da plataforma.
>
> Logado no site, você deve clicar no botão `+ Create Repl`, como mostrado na imagem abaixo:
>
![botao de criação](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/811315e2-dceb-495f-be29-ced86d39d329)

> Após clicar no botão, abrirá a tela `Create a Repl`, você deve selecionar o template `React Javascript` e selecionar um título para seu projeto. Segue uma ilustração da tela previamente configurada abaixo.
>
> Para concluir a criação, você deve clicar no botão `+ Create Repl`, como ilustra a baixo: 
>
![create repl](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/cde977ce-97fd-48be-b518-28935bb7be36)
> Ao seguir os seguinte passos açbrirá um projeto base para você, como ilustra a tela abaixo.
>
> Após fazer as mudanças que deseja no projeto raiz, você pode clicar em `Run` para executar o projeto. 
>
![tela do código](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/17ddb84d-99c6-4ccd-a482-0a4b55b48191)

> O resultado da execução desse exemplo, é esse: 
>
![codigo rodado](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/746853c6-fe22-40c2-b6f9-de06594706b0)

> Caso queira fazer alguma mudança, a aplicação não atualizara em tempo real como é normalmente em IDEs locais.
>
> Para atualizar a mudança da sua aplicação, você deve clicar em `Stop` e execute o código novamente clicando em `Run`. 
>



## O trabalho em específico 
### Introdução
> O trabalho teve como objetivo aplicarmos nossos conhecimentos teóricos na prática, desenvolvendo um sistema distribuído com tecnologia `React.js`.
> Para aplicação desses, foi suposto o cenário de um <strong>estacionamento inteligente</strong>, onde o grupo deveria criar uma aplicação baseada em <strong>formulários</strong>
> no qual a maior parte do processo de locação fosse automática.

### As telas da aplicação
> Foi sugerido pelo professor uma tela  básica, que houvesse apenas uma tela e somente um <code>input</code>. Esse <code>inputo</code> seria responsavel por pegar a placa do automovél
> do cliente e partindo da inserção dessa placa, o sistema definiria se o automóvel deve ser cadastrado como uma nova vaga locada ou se o motorista estava voltando para buscar seu
> automóvel e então a locação deveria ser encerrada. Vale lembrar que a aplicação deste trabalho está somente no front-end, e portanto não há banco de dados para que de fato essa checagem seja feita.
>
> A baixo, está ilustado a tela inicial da aplicação criada:

![tela inicial](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/e7e97862-a9d3-47f5-80a7-7d2fc7f11480)

> Caso o usuário esteja chegando pela primeira vez no estacionamento, ao clicar no botão `Cadastrar`, ele será redirecionado para uma tela de confirmação indicando que seu cadastro foi realizado corretamente.
>
> Abaixo segue a ilustração da tela de confirmação que o automóvel foi cadastrado corretamente.

![cadastro realizado](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/a503a260-07eb-42a5-bb66-5324a7ae4361)

> Outra opção, dita anteriormente, é o usuário estar retornando para retirar seu automóvel. Assim ao clicar no botão `Pagar`, ele será redirecionado para uma tela de confirmação indicando que seu pagamento foi realizado corretamente.
>
> Abaixo segue a ilustração da tela de confirmação que o pagamento foi efetuado corretamente.

![pagamento realizado](https://github.com/gabriellycorrea/TRABALHOSD/assets/110353094/02c8964d-d479-4f47-8a97-cb8cbe367a94)

### Conclusões sobre o trabalho
> Nessa trabalho, o foco estava na tecnologia `React.js` e foi instruido pelo professor que não houvesse foco **nenhum** em CSS.
>
> A Aplicação foi baseada em `formulários`, como citado anteriormente.
>
> Para redirecionamento entre as páginas, utilizandos a biblioteca `React Router` e seu componente <code>*Link*</code>
>
> Para utilização dessa biblioteca devemos instala-la com o seguinte comando <code>npm install react-router-dom</code>
>
> Para a utilização de <code>*Links*</code> em `React` basta incluir os seguintes <code>imports</code> no seu código:
> 
> Na `App.js`, também nomeada como `App.jsx`, faça o seguinte import: 

```
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

> Logo em seguida, crie o método responsavel por criar um navegador de rotas personalizado.
>
> Nesse exemplo de código, criamos o método `createBrowserRouter`.
>
> Esse método recebe um array que contem as informações sobre as rotas da aplicação.
>
> Em suma essas informação são os atributos `path` e `element`.
>
> O **path** é o caminho da URL que corresponderá a uma rota. Por exemplo, `"/"` corresponde à página inicial, geralmente a `App.jsx`.
>
> O **element** representa o componente React que deve ser renderizado quando a URL corresponder a esse caminho.
>
> Por exemplo, `<App/>` será renderizado quando a URL for a página inicial, geralmente a `App.jsx`. 
>
> A baixo, segue um exemplo em código desse método que foi utilizado no nosso trabalho para fazer redirecionamento de páginas. 

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }
]);
```
