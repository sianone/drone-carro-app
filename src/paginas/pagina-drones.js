import {Pagina} from '../framework/pagina.js';
import {TabelaDados} from '../ui/tabela-dados.js';
import {app} from '../app.js';

export class PaginaDrones extends Pagina{

    constructor(){
        super('Drones');
    }

    criarElemento(){
        super.criarElemento();

        //Arrumar o header horasvoada depois
        let headers = 'Registro,Modelo,Horas Voada,Base'.split(',')
        let t = new TabelaDados(headers, app.dataService.drones);
        t.anexarAoElemento(this.elemento);
    }

    getElementoString(){
        return `<div style="margin: 20px;"><h3>Drones</h3></div>`
    }
}