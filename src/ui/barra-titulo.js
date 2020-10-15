import {ElementoBase} from './elemento-base.js';

export class BarraTitulo extends ElementoBase{

    constructor(titulo){
        super();
        this.titulo = titulo;
        this.links = [];
    }

    adicionarLink(titulo, href){   
        this.links.push({
                titulo,         //es6 syntax, es5 titulo:titulo
                href
            });
    }

    getElementoString(){
        let links = '';
        for (let link of this.links)
            links += `<a class="mdl-navigation__link" 
                href="${link.href}">${link.titulo}</a>`;

        return `
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title">${this.titulo}</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                      ${links}
                    </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${this.titulo}</span>
                    <nav class="mdl-navigation">
                        ${links}
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content"><!-- Your content goes here --></div>
                </main>
                </div>
            `
    }
}