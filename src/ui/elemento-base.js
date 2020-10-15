import $ from 'jquery';

export class ElementoBase {

    constructor(){
        this.elemento = null;  //objeto jquery
    }

    anexarAoElemento(el){
        this.criarElemento();
        el.append(this.elemento);
        this.habilitarJS();
    }

    criarElemento(){
        let s = this.getElementoString();
        this.elemento = $(s);
    }

    getElementoString(){
        throw 'Override getElementoString() no ElementoBase';
    }

    habilitarJS(){
        componentHandler.upgradeElement(this.elemento[0]);
    }
}