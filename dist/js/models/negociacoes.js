export class Negociacoes {
    constructor() {
        //generics
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes]; // pega cada ítem desse array individualmente e coloca nessa lista
    }
}
