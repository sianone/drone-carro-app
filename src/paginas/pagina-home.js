import {Pagina} from '../framework/pagina.js';
import {Imagem} from '../ui/imagem.js';
import {app} from '../app.js';
import { Botao } from '../ui/botao.js';

export class PaginaHome extends Pagina{

    constructor(){
        super('Home');
    }

    criarElemento(){
        super.criarElemento();

        let i = new Imagem('../../imagens/drone.jpg');
        i.anexarAoElemento(this.elemento);

        let styleString = 'width: 300px; height:80px; font-size: 22px;';
        let b = new Botao ('Carros');
        b.setStyleString(styleString);
        b.anexarAoElemento(this.elemento);
        b.elemento.click(() => app.rotaAtivada('Carros'));
 
        b = new Botao ('Drones');
        b.setStyleString(styleString);
        b.anexarAoElemento(this.elemento);
        b.elemento.click(() => app.rotaAtivada('Drones'));
    }

    getElementoString(){
        return '<div style="text-align: center;"></div>';
    }
}