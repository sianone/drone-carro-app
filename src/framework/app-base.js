import {BarraTitulo} from '../ui/barra-titulo.js';

//A mágia dos links/navegação acontece aqui
export class AppBase {

    constructor(titulo){
        this.titulo = titulo;
        this.barraTitulo = new BarraTitulo(this.titulo);
        this.rotaMapa = {};
        this.rotaPadrao = null;
    }

    //A troca de página acontece aqui. Conteudo será procurado no rotaMapa
    rotaAtivada(rota){
        let conteudo = this.barraTitulo.elemento.find('.page-content');
        conteudo.empty();

        this.rotaMapa[rota].anexarAoElemento(conteudo);
    }

    //Adiciona as paginas e seus conteudos para o objeto rotaMapa
    adicionarRota(id, paginaObjeto, rotaPadrao = false){
        this.barraTitulo.adicionarLink(id, '');

        this.rotaMapa[id] = paginaObjeto;

        if(rotaPadrao){
            this.rotaPadrao = id;
        }
    }

    //Clickhandler dos links
    mostrar(elemento){
        this.barraTitulo.anexarAoElemento(elemento);
        
        this.barraTitulo.elemento.find('.mdl-navigation__link').click((event) => {
            let rota = event.target.innerHTML;
            //se usar function inves de arrow, esse 'this' não funcionará corretamente
            //devemos usar trim(), por causa de whitespace no 'links' em battle-titulo.js
            this.rotaAtivada(rota.trim());
        });

        if(this.rotaPadrao){
            this.rotaAtivada(this.rotaPadrao);
        }
    }
}