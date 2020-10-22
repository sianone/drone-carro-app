import {ElementoBase} from './elemento-base.js';

export class GoogleMapa extends ElementoBase{

    constructor(centroMapa,dados){
        super();
        this.centroMapa= centroMapa;
        this.dados = dados;
    }

    criarElemento(){
        super.criarElemento();

        //usamos setTimeout para que o div abaixo aparece antes dessa função
        //DOM ainda não está criado, por isso temos que usar setTimeout
        setTimeout(()=> {
            var mapa = new google.maps.Map(document.getElementById("mapa"),{
                zoom: 13,
                center: this.centroMapa
            });

            for (let veiculo of this.dados){
                let [lat, long] = veiculo.latLong.split(' ');
                console.log('lat:'+ lat);
                let mLatLng = new window.google.maps.LatLng(lat, long);

                var marcacao= new window.google.maps.Marker({
                    position: mLatLng,
                    map: mapa
                });

                marcacao.setMap(mapa);
            }
        }, 0);
    }

    //precisa ser chamado antes do codigo acima
    getElementoString(){
        return `<div style="width:800px; height:400px;" id="mapa"></div>`
    }
}