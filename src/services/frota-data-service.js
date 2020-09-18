import {Carro} from '../classes/carro.js';
import {Drone} from '../classes/drone.js';
import {DataErro} from './data-erro.js';

export class FrotaDataService{

    constructor(){
        this.carros = [];
        this.drones = [];
        this.erros = [];
    }

//Filtro que separa cada Objeto e move pra o array correspondente de seu tipo
    loadData(frota){
        for(let data of frota){
            switch(data.tipo){
                case 'carro':
                    if (this.validacaoCarroDados(data)){
                        let carro = this.loadCarro(data);
                        if (carro)
                        this.carros.push(carro);
                    }else{
                        let e = new DataErro('Campos do tipo carro não foram validos', data);
                        this.erros.push(e);
                    }
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new DataErro('Tipo de veículo inválido', data);
                    this.erros.push(e);
                    break;
            }
        }
        
    }
    //Instancia cada carro que passa no loop acima.
    loadCarro(carro){
        try{
            let c = new Carro (carro.registro, carro.modelo, carro.latLong);
            c.kilometragem = carro.kilometragem;
            c.marca = carro.marca;
            return c;
        }catch(e){
            this.erros.push(new DataErro('Erro: carreger carro não foi possivel', carro));
        }
        return null;
    }

    loadDrone(drone){
        let d = new Drone (drone.registro, drone.modelo, drone.latLong);
        d.horasVoada= drone.horasVoada;
        d.base = drone.base;
        return d;
    }

    validacaoCarroDados(carro){
        let camposObrigatorios = 'registro modelo latLong kilometragem marca'.split(' ');
        let temErros = false;
        for(let campo of camposObrigatorios){
            if (!carro[campo]){
                this.erros.push( new DataErro(`Campo invalido: ${campo}`, carro));
                temErros = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(carro.kilometragem))){
            this.erros.push(new DataErro('kilometragem inválida',carro));
            temErros = true;
        }
        return !temErros;
    }
}
