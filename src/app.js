import {Carro} from './classes/carro.js';
import {Drone} from './classes/drone.js';
import {frota} from './frota-data.js';
import {FrotaDataService} from './services/frota-data-service.js';

let dataService = new FrotaDataService();

dataService.loadData(frota);
console.log(dataService.carros);
console.log(dataService.drones);







