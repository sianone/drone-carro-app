import $ from 'jquery';
import {Carro} from './classes/carro.js';
import {Drone} from './classes/drone.js';
import {frota} from './frota-data.js';
import {FrotaDataService} from './services/frota-data-service.js';
import { BarraTitulo } from './ui/barra-titulo.js';
import { Botao } from './ui/botao.js';
import { Imagem } from './ui/imagem.js';
import { TabelaDados } from './ui/tabela-dados.js';

let tb= new BarraTitulo ('Drone app');
tb.adicionarLink('Home', '');
tb.adicionarLink('Carros', '');
tb.adicionarLink('Drone', '');
tb.adicionarLink('Mapa', '');
tb.anexarAoElemento ($('body'));

let b = new Botao('Clique aqui');
b.anexarAoElemento ($('body'));

let i= new Imagem ('../imagens/drone.jpg');
i.anexarAoElemento ($('body'));

let headers = "Registro Marca Modelo Kilometragem".split(' ');
let dataService = new FrotaDataService(frota);
let dt = new TabelaDados (headers, dataService.carros);
dt.anexarAoElemento($('body'));

dataService.loadData(frota);
console.log(dataService.carros);
console.log(dataService.drones);

let carro1 = dataService.getCarroPorRegistro ('AT99000');
console.log(carro1);

let carro2 = dataService.getSortCarroPorRegistro();
for (let carro of carro2)
    console.log(carro.registro);

let carro3 = dataService.filtroCarroPorMarca('a');
for (let carro of carro3)
    console.log(carro.marca);

for(let e of dataService.erros)
     console.log(e.messagem, e.data);







//    <script src="node_modules/es6-module-loader/dist/es6-module-loader-dev.js">
//  System.paths['jquery'] = './node_modules/jquery/dist/jquery.js';
//System.paths['jquery'] = './node_modules/jquery/dist/jquery.js';