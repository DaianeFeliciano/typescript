export class Negociacao {
    // atributos privados - acesso pelo construtor
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}