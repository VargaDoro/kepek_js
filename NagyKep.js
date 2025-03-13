import { KEPEKLISTA } from "./adatok.js";
import KiemeltKep from "./KiemeltKep.js";

/* bal és a jobb gombbal léptessük 
1. meg kell fogni a gombokat
2. eseménykezelő
3. a lista következő elemével példányosítjuk a NAGYKEP-et */
export default class NagyKep {
    #aktIndex = 0;
    #lista = [];
    constructor(lista){
        this.nagyKepElem = document.getElementsByClassName("kiemeltkep")[0];
        this.#lista = lista;
        new KiemeltKep(
            this.#lista[this.#aktIndex].kep,
            this.#lista[this.#aktIndex].cim,
            this.nagyKepElem,
        );
        this.gombBal = document.querySelector(".bal");
        this.gombJobb = document.querySelector(".jobb");
        this.esemenykezelok()
    }

    esemenykezelok(){
        window.addEventListener("kivalaszt", (event)=>{
            console.log(event.detail)
            this.#aktIndex=event.detail;
            new KiemeltKep(this.#lista[this.#aktIndex].kep, this.#lista[this.#aktIndex].cim, this.nagyKepElem);
        })
        this.gombBal.addEventListener("click", ()=> {
            this.#aktIndex--;
            this.#aktIndex < 0 ? (this.#aktIndex = this.#lista.length -1) : (this.#aktIndex = this.#aktIndex);
            new KiemeltKep(this.#lista[this.#aktIndex].kep, this.#lista[this.#aktIndex].cim, this.nagyKepElem);
        });
    
        this.gombJobb.addEventListener("click", ()=> {
            this.#aktIndex++;
            this.#aktIndex > this.#lista.length -1 ? (this.#aktIndex = 0) : (this.#aktIndex = this.#aktIndex);
            new KiemeltKep(this.#lista[this.#aktIndex].kep, this.#lista[this.#aktIndex].cim, this.nagyKepElem);
        });
    }
} 
