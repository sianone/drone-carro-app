import {Pagina} from '../framework/pagina.js';
import {TabelaDados} from '../ui/tabela-dados.js';
import {app} from '../app.js';

export class PaginaCarros extends Pagina {

    constructor() {
        super('Carros');
    }

    criarElemento(){
        super.criarElemento();

        let headers = 'Registro Marca Modelo Kilometragem'.split(' ');
        let t = new TabelaDados(headers, app.dataService.carros);
        t.anexarAoElemento(this.elemento);
    }

    getElementoString(){
        return `<div style="margin: 20px;"><h3>Carros</h3></div>`
    }
}