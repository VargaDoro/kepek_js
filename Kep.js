export default class Kep {
    #elUt;
    #cim;
    #index;
    constructor(elUt, cim, index, szulelem){
        this.#elUt = elUt;
        this.#cim = cim;
        this.#index = index;
        this.szulelem = szulelem;
        this.megjelenit();

        this.kepElem = document.querySelector(".kep:last-child");
        this.kepElem.addEventListener("click", ()=> {
            console.log(this.#index)
            /* nincs return, létreozunk egy saját eseményt amire tetszőleges osztályban feliratkozunk neve pl:kivalaszt*/
        const e = new CustomEvent("kivalaszt", {detail : this.#index});
        window.dispatchEvent(e);
        })
    }

    megjelenit() {
        let html = `<div class="kep">
                        <img src="${this.#elUt}" alt="${this.#cim}">
                    </div>`;
        this.szulelem.insertAdjacentHTML("beforeend", html);
    }
}