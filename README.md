
# Projeto Desafio Tecnico XP

Este projeto consiste na criação de uma api que lista ações para ser passado ao front-end.

Essa lista de ações constitui-se de requisições de investimentos em uma base de dados 


## Implementações realizadas

- [ ] cadastro de Cliente

- [x] Login

- [ ] cadastro de Ações/Compra

- [ ] cadastro de Ações/Venda

- [ ] busca por Cliente

- [x] busca por Ações

- [ ] atuação de valor depositado

- [ ] atuação de valor de saque

- [ ] busca valor de saldo

## Implementações Tecnicas 

- instação das dependencias e configação de scripts do package.json.
- configuração de arquivos de ambiente: .env, Dockerfiler, docker-composer.
- estruturação da base de dados e da entidade de relaciomento.
- criação das migation e seeders.
- estrutura das Tabelas:

    **Cliente:**  codCliente*, nome, cpf, email, password, saldo.

    **Ativo:** codAtivo*, nomeAtivos, qtdeAtivos, valor.

    **ClientesAtivos:** codCliente*, codAtivo*, qtdeAtivos.

- criação de rota login e cadastro de Clientes.
- criação de token pelo JWT
- criação de middleware para autenticação das rotas logadas
- criação da rota de investimentos de compra e venda de ações pelo cliente.
- criação da rota de busca por cliente e por ativos.
- criação da rota de depósito e saque.
- criação de rota para busca de saldo do cliente.

## Stack utilizada

**Back-end:** Node, Express js, ExpressJS Async Errors Sequelize ORM, Sequelize-CLI, MySql2, Nodemoon, Dotenv, EsLint.


## Instalação

- baixando o projeto: 

```bash
git clone git@github.com:thaistcardoso/desafio-tec-XP-BackEnd.git
cd desafio-tec-XP-BackEnd

```
- Instale as dependencias e inicie o servidor 

```bash
  npm install
  npm dev
```
ou

```bash
  yarn install
  yarn dev
```

## Autora

- [@thaistcardoso](https://www.github.com/thaistcardoso)

