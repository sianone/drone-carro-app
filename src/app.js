import $ from 'jquery';
import {frota} from './frota-data.js';
import {FrotaDataService} from './services/frota-data-service.js';

import {AppBase} from './framework/app-base.js';
import {PaginaHome} from './paginas/pagina-home.js';
import {PaginaCarros} from './paginas/pagina-carros.js';
import {PaginaDrones} from './paginas/pagina-drones.js';
import {PaginaMapa} from './paginas/pagina-mapa.js';

export class Aplicacao extends AppBase{
    
    constructor(){
        super('Gerenciador de Frota');
        //encapsulamento dos dados
        this.dataService = new FrotaDataService();
        this.dataService.loadData(frota);

        this.adicionarRota('Home', new PaginaHome(), true);
        this.adicionarRota('Carros', new PaginaCarros());
        this.adicionarRota('Drones', new PaginaDrones());
        this.adicionarRota('Mapa', new PaginaMapa());
    }
}

export let app = new Aplicacao();
app.mostrar($('body'));


// //interface
// let tb= new BarraTitulo ('Drone app');
// tb.adicionarLink('Home', '');
// tb.adicionarLink('Carros', '');
// tb.adicionarLink('Drone', '');
// tb.adicionarLink('Mapa', '');
// tb.anexarAoElemento ($('body'));

// //botao
// let b = new Botao('Clique aqui');
// b.anexarAoElemento ($('body'));

//imagem banner 100%
// let i= new Imagem ('../imagens/drone.jpg');
// i.anexarAoElemento ($('body'));


// //tabela
// let headers = "Registro Marca Modelo Kilometragem".split(' ');
// let dt = new TabelaDados (headers, dataService.carros);
// dt.anexarAoElemento($('body'));

console.log(app.dataService.carros);
 console.log(app.dataService.drones);

//google maps
// let centroMapa = {lat: 40.783661, lng: -73.965883};
// let mapa = new GoogleMapa(centroMapa, dataService.drones);
// mapa.anexarAoElemento($('body'));

// //get(placa)
// let carro1 = dataService.getCarroPorRegistro ('AT99000');
// console.log(carro1);

// //sort(placa)
// let carro2 = dataService.getSortCarroPorRegistro();
// for (let carro of carro2)
//     console.log(carro.registro);

// //filtro/procura
// let carro3 = dataService.filtroCarroPorMarca('a');
// for (let carro of carro3)
//     console.log(carro.marca);

// for(let e of dataService.erros)
//      console.log(e.messagem, e.data);







//    <script src="node_modules/es6-module-loader/dist/es6-module-loader-dev.js">
//  System.paths['jquery'] = './node_modules/jquery/dist/jquery.js';
//System.paths['jquery'] = './node_modules/jquery/dist/jquery.js';