import { Negociacoes } from './../models/negociacoes.js';
export class NegociacoesView {

    private element: HTMLElement;
    constructor(seletor: string) {
        this.element = document.querySelector(seletor);

    }
    // metodo template serve para declarar o template da view
    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map( negociacao => {
                        return `
                            <tr>
                                <td>${ new Intl.DateTimeFormat()
                                    .format(negociacao.data)}
                                </td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        
        `;
    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template)   
        this.element.innerHTML = template// renderizar esse template no elemento que capturou no construtor passando o seletor e pegando com query selector
    }
}