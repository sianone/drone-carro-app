import {ElementoBase} from './elemento-base.js'

export class TabelaDados extends ElementoBase{

    constructor(headers, dados){
        super();
        this.headers = headers;
        this.dados = dados;
    }
}