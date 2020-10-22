import $ from 'jquery';
import {Carro} from './classes/carro.js';
import {Drone} from './classes/drone.js';
import {frota} from './frota-data.js';
import {FrotaDataService} from './services/frota-data-service.js';
import { BarraTitulo } from './ui/barra-titulo.js';
import { Botao } from './ui/botao.js';
import { Imagem } from './ui/imagem.js';
import { TabelaDados } from './ui/tabela-dados.js';
import {GoogleMapa} from './ui/google-mapa.js';

//interface
let tb= new BarraTitulo ('Drone app');
tb.adicionarLink('Home', '');
tb.adicionarLink('Carros', '');
tb.adicionarLink('Drone', '');
tb.adicionarLink('Mapa', '');
tb.anexarAoElemento ($('body'));

//botao
let b = new Botao('Clique aqui');
b.anexarAoElemento ($('body'));

//imagem banner 100%
let i= new Imagem ('../imagens/drone.jpg');
i.anexarAoElemento ($('body'));

//encapsulamento dos dados
let dataService = new FrotaDataService();
dataService.loadData(frota);
//tabela
let headers = "Registro Marca Modelo Kilometragem".split(' ');
let dt = new TabelaDados (headers, dataService.carros);
dt.anexarAoElemento($('body'));

console.log(dataService.carros);
console.log(dataService.drones);

//google maps
let centroMapa = {lat: 40.783661, lng: -73.965883};
let mapa = new GoogleMapa(centroMapa, dataService.drones);
mapa.anexarAoElemento($('body'));

//get(placa)
let carro1 = dataService.getCarroPorRegistro ('AT99000');
console.log(carro1);

//sort(placa)
let carro2 = dataService.getSortCarroPorRegistro();
for (let carro of carro2)
    console.log(carro.registro);

//filtro/procura
let carro3 = dataService.filtroCarroPorMarca('a');
for (let carro of carro3)
    console.log(carro.marca);

for(let e of dataService.erros)
     console.log(e.messagem, e.data);







//    <script src="node_modules/es6-module-loader/dist/es6-module-loader-dev.js">
//  System.paths['jquery'] = './node_modules/jquery/dist/jquery.js';
//System.paths['jquery'] = './node_modules/jquery/dist/jquery.js';