import {Veiculo} from './veiculo.js';

export class Drone extends Veiculo {

    constructor(registro, modelo, latLong){
        super(registro, modelo, latLong);
        this.horasVoada = null;
        this.base = null;
    }
}