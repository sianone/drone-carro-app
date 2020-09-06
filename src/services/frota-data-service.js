import {Carro} from '../classes/carro.js';
import {Drone} from '../classes/drone.js';

export class FrotaDataService{

    constructor(){
        this.carros= [];
        this.drones= [];
    }

//Filtro que separa cada Objeto e move pra o array correspondente de seu tipo
    loadData(frota){
        for(let data of frota){
            switch(data.tipo){
                case 'carro':
                    let carro = this.loadCarro(data);
                    this.carros.push(carro);
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
            }
        }
        
    }
    //Instancia cada carro que passa no loop acima
    loadCarro(carro){
        let c = new Carro (carro.registro, carro.modelo, carro.latLong);
        c.kilometragem = carro.kilometragem;
        c.marca = carro.marca;
        return c;
    }

    loadDrone(drone){
        let d = new Drone (drone.registro, drone.modelo, drone.latLong);
        d.horasVoada= drone.horasVoada;
        d.base = drone.base;
        return d;
    }
}
