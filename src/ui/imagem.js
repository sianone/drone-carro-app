import {ElementoBase} from './elemento-base.js';

export class Imagem extends ElementoBase{

    constructor(nomeArquivo){
        super();
        this.nomeArquivo = nomeArquivo;
    }

    getElementoString(){
        return `
        <img src="${this.nomeArquivo}"style="width:100%"; />
        `
    }
}