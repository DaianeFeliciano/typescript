export class Negociacoes {
    constructor() {
        //generics
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; // tipo para quando quer retornar uma lista somente de leitura, não consegue alterar a lista;
    }
}
