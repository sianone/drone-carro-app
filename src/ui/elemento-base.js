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
        //elemento criado no jquery
        this.elemento = $(s);
    }

    // método para 'forçar' classes filhas a criar o método com o mesmo nome aka override
    getElementoString(){
        throw 'Precisa de Override: getElementoString()';
    }

    //Elementos MDL (module) criados dinâmicamente precisam disso para serem renderizados corretamente.
    habilitarJS(){
        componentHandler.upgradeElement(this.elemento[0]);
    }
}