# Validador de Cartão de crédito

**Esta biblioteca se destina à validação de cartões de crédito válidos ou inválidos.**
**A versão atual é capaz de fazer a validação de cartões, utilizando a fórmula de Luhn.**

Abaixo, seguem instruções do validador.

## Como instalar:

```javascript

$  npm install biblioteca-cartao

```

## Como utilizar:

```node

> const validar = require("./lib/index");
> console.log(validar.cardValidator("4824790159602948"));

```
Obs: Exemplo acima de cartão nao válido.

## roadmap oficial do projeto

#### versão 1.0.0 (released - complete)
- funcionalidade completa = validação do cartao de crédito
