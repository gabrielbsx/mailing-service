# Aplicação de Serviço de Mailing

Este repositório contém uma aplicação de serviço de mailing desenvolvida utilizando TypeScript, RabbitMQ, Node.js, DDD (Domain-Driven Design), TDD (Test-Driven Development) e Clean Architecture.
O objetivo dessa aplicação é enviar e-mails de forma assíncrona, utilizando a fila do RabbitMQ para processar os envios.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados localmente:

- Node.js
- RabbitMQ

## Configuração

1. Clone este repositório em sua máquina local.
2. Execute o comando `npm install` para instalar as dependências necessárias.
3. Crie um arquivo de configuração `.env` baseado no exemplo fornecido no arquivo `.env.example`. Certifique-se de fornecer as informações corretas para a conexão com o RabbitMQ.
4. Execute o comando `npm run start:dev` para iniciar a aplicação em modo desenvolvimento.
5. Execute o comando `npm run test:unit` para executar os testes unitários.
6. Execute o comando `npm run test:integration` para executar os testes de integração.
7. Execute o comando `npm run test:ci` para executar todos os testes e gerar o relatório de cobertura de testes.
8. Execute o comando `npm run build` para gerar o build da aplicação.
9. Execute o comando `npm run start:prod` para iniciar a aplicação em modo produção.

## Testes

A aplicação utiliza o TDD como metodologia de desenvolvimento, garantindo a qualidade e a integridade do código.
Os testes automatizados estão localizados na pasta `tests` e podem ser executados usando o comando `npm run test:tipo_de_teste`.
