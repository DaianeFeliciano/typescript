import { Negociacao } from './negociacao.js';
export class Negociacoes {
    //generics
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes; // tipo para quando quer retornar uma lista somente de leitura, não consegue alterar a lista;
    }
}
