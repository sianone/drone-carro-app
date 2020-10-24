import {ElementoBase} from './elemento-base.js';

export class Botao extends ElementoBase{

    constructor(titulo){
        super();
        this.titulo = titulo;
        this.styleString = '';
    }

    getElementoString(){
        return `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            style="${this.styleString}">
                ${this.titulo}
            </button> 
        `
    }

    setStyleString(style){
        this.styleString = style;
    }
}