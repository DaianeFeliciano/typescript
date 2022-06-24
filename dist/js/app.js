import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100)
console.log(negociacao);

negociacao.quantidade = 1000; // Não muda o valor, adiciona
                             // dinamicamente uma propriedade quantidade de mesmo nome dinamicamente com esse valor 
console.log(negociacao); 

