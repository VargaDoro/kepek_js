import { KEPEKLISTA } from "./adatok.js";
import Kep from "./Kep.js";
import Galeria from "./Galeria.js";

let galeriaElem = document.getElementsByClassName("galeria")[0];
let nagyKepElem = document.getElementsByClassName("kiemeltkep")[0];

new Galeria(KEPEKLISTA, galeriaElem);
const NAGYKEP = new Kep(KEPEKLISTA[0].kep, KEPEKLISTA[0].cim, nagyKepElem);