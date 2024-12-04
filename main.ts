import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";
import { Personajes } from "./personajes";
import { Tirador } from "./tirador";

const magoA = new Mago("Eldarion", 100);
const luchadorA = new Luchador("Tharok", 100);
const arqueroA = new Arquero("Lyriel", 100);
const tiradorA = new Tirador("Jaxen", 200);

const magoB = new Mago("Zyphar", 100);
const luchadorB = new Luchador("Brakhor", 100);
const arqueroB = new Arquero("Fendris", 100);
const tiradorB = new Tirador("Korven", 200);

const equipoA = new Personajes("Equipo A", magoA, arqueroA, luchadorA, tiradorA);
const equipoB = new Personajes("Equipo B", magoB, arqueroB, luchadorB, tiradorB);

equipoA.enfrentarEquipos(equipoA, equipoB);

console.log(equipoA.atacarArquero())