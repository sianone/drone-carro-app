import {ElementoBase} from './elemento-base.js';

export class Botao extends ElementoBase{

    constructor(titulo){
        super();
        this.titulo = titulo;
    }

    getElementoString(){
        return `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                ${this.titulo}
            </button>
        `
    }
}