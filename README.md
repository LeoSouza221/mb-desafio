# MB-Desafio

Projeto realizado com projeto de aplicação para a vaga de Desenvolvedor Front-end Sênior. Caso haja alguma dúvida estou disponivel no [Linkedin](https://www.linkedin.com/in/leonardo-de-souza-a75557156/)

## Projeto

Minha escolha de abordagem do projeto foi utilizar VueJs com Vite e somente Css para estilização, por acreditar que não havia complexidade que exigisse utilização de Sass, onde CSS já supria a necessidade.
A organização do projeto segue uma abordagem padrão do Vuejs, separando componentes, composables e pages por suas respectivas funcionalidades
Para o Backend escolhi a utilização do Express por maior familiriadade e já conter recursos que adiantariam o desenvolvimento, o projeto foi separado também por responsabilidades, ou seja, os diretorios middlewares, routes e controllers, contém apenas arquivos referentes a sua execução

## Executando Projeto

### 1- Para a execução do projeto é necessario a criação dos `.envs` tanto para o projetos de backend, então primeiramente vá para a raiz do diretorio `mb-backend`, crie o `.env` com a porta escolhida para execução do projeto, como no exemplo abaixo

```sh
PORT=3000
```

### 2- Após isso vá para o projeto `mb-frontend`, crie o `.env` também na raiz do diretorio e coloque a sua porta backend no lugar destacado no exemplo abaixo

```sh
API_URL=http://localhost:**PORTA BACKEND**
```

### 3- Por fim rode o comando abaixo na raiz principal, ou seja, nem no mb-backend nem no mb-frontend

```sh
npm run dev
```

### OBS: observe no console se a porta escolhida é a mesma do .env do mb-backend, caso não, será necessário para a execução, retornar ao passo 2 e trocar o valor do .env para a que está aparecendo no console e rodar o comando do passo 3 novamente
