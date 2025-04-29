# Validador de Bandeira de Cartão

<div flex="row" display="flex">
  <img src="https://w7.pngwing.com/pngs/49/82/png-transparent-credit-card-visa-logo-mastercard-bank-mastercard-blue-text-rectangle.png" alt="Visa" width="150" style="margin-left: 20px;">
  <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-1.png" alt="Visa" width="150">
  <img src="https://logopng.com.br/logos/elo-30.png" alt="Visa" width="150">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/960px-American_Express_logo_%282018%29.svg.png" alt="Visa" width="150">
  
</div>
Este projeto foi desenvolvido como parte do desafio do Bootcamp da DIO em parceria com a Microsoft, utilizando o GitHub Copilot para auxiliar na implementação.

## Descrição

O objetivo deste projeto é identificar a bandeira de um cartão de crédito com base no número informado. O código verifica os prefixos e intervalos numéricos para determinar se o cartão pertence a uma das seguintes bandeiras:

- Visa
- Mastercard
- Elo
- American Express

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
