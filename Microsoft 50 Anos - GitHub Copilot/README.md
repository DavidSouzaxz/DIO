# Validador de Bandeira de Cartão

Este projeto foi desenvolvido como parte do desafio do Bootcamp da DIO em parceria com a Microsoft, utilizando o GitHub Copilot para auxiliar na implementação.

## Descrição

O objetivo deste projeto é identificar a bandeira de um cartão de crédito com base no número informado. O código verifica os prefixos e intervalos numéricos para determinar se o cartão pertence a uma das seguintes bandeiras:

- Visa
- Mastercard
- Elo
- American Express
- Bandeira desconhecida (caso não corresponda a nenhuma das anteriores)

## Como funciona

A função `identificarBandeira(numeroCartao)` recebe como entrada o número do cartão de crédito e retorna a bandeira correspondente.

### Exemplo de uso

```javascript
const numeroCartao = '4389123456789012';
console.log(`A bandeira do cartão é: ${identificarBandeira(numeroCartao)}`);
```

Saída esperada:

```
A bandeira do cartão é: Elo
``` 

## Estrutura do Projeto

- ``Validador-bandeira-cartao.js``: Contém a lógica para identificar a bandeira do cartão.
- ``README.md``: Este arquivo, com informações sobre o projeto.

## Como executar
1.Certifique-se de ter o Node.js instalado.   
2.Clone este repositório.  
3.Navegue até o diretório do projeto.  
4.Execute o arquivo JavaScript com o comando:  
```
node [Validador-bandeira-cartao.js](http://_vscodecontentref_/0)
```

## Tecnologias Utilizadas
- JavaScript
- Node.js

## Autor
Desenvolvido como parte do desafio do Bootcamp da DIO.