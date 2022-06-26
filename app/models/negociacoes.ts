import { Negociacao } from './negociacao.js';
export class Negociacoes {
    //generics
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): Array<Negociacao> {
        return [...this.negociacoes]; // pega cada ítem desse array individualmente e coloca nessa lista
    }
}
