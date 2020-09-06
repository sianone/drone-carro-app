import {Veiculo} from './veiculo.js';

export class Carro extends Veiculo {

    constructor(registro,modelo,latLong){
        super(registro,modelo,latLong);
        this.kilometragem= null;
        this.marca = null;
    }
}