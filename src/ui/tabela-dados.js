import {ElementoBase} from './elemento-base.js'

export class TabelaDados extends ElementoBase{

    constructor(headers, dados){
        super();
        this.headers = headers;
        this.dados = dados;
    }

    getElementoString(){

        let thTags = '';
        for (let h of this.headers){
            thTags +=`<th class="mdl-data-table__cell--non-numeric">${h}</th>\n`;
        }

        let trTags = '';
        for (let linha of this.dados){
            trTags += '<tr>';
            let td= '';
            for(let propriedade of this.headers){
                let campo = linha[propriedade.toLowerCase()];
                trTags += `<td class="mdl-data-table__cell--non-numeric">
                            ${campo}
                            </td>`;

            }
            trTags += '</tr>';
        }


        return `
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                ${thTags}
                </tr>
            </thead>
            <tbody>
                ${trTags}
            </tbody>
        </table>
        `
    }
}