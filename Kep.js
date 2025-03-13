export default class Kep {
    #elUt;
    #cim;
    constructor(elUt, cim, szulelem){
        this.#elUt = elUt;
        this.#cim = cim;
        this.szulelem = szulelem;
        this.megjelenit();
    }

    megjelenit() {
        let html = `<div class="kep">
                        <h3>${this.#cim}</h3>
                        <img src="${this.#elUt}" alt="${this.#cim}">
                    </div>`;
        this.szulelem.innerHTML += html;
    }
}