import {Pagina} from '../framework/pagina.js';
import {GoogleMapa} from '../ui/google-mapa.js';
import {app} from '../app.js';

export class PaginaMapa extends Pagina {

    constructor(){
        super('Map');
    }

    criarElemento(){
        super.criarElemento();

        let centroMapa = {lat: 40.783661, lng: -73.965883};
        let mapa = new GoogleMapa(centroMapa, app.dataService.drones);
        mapa.anexarAoElemento(this.elemento);

    }

    getElementoString(){
        return '<div style="margin: 20px;"><h3>Mapa</h3></div>';
        
    }
}