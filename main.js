import { KEPEKLISTA } from "./adatok.js";
import Kep from "./Kep.js";
import Galeria from "./Galeria.js";
import KiemeltKep from "./KiemeltKep.js";
import NagyKep from "./NagyKep.js";

let galeriaElem = document.getElementsByClassName("galeria")[0];
new Galeria(KEPEKLISTA, galeriaElem);
new NagyKep(KEPEKLISTA);