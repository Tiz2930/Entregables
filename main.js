"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var luchador_1 = require("./luchador");
var arquero_1 = require("./arquero");
var personajes_1 = require("./personajes");
var tirador_1 = require("./tirador");
var magoA = new mago_1.Mago("Eldarion", 100);
var luchadorA = new luchador_1.Luchador("Tharok", 100);
var arqueroA = new arquero_1.Arquero("Lyriel", 100);
var tiradorA = new tirador_1.Tirador("Jaxen", 200);
var magoB = new mago_1.Mago("Zyphar", 100);
var luchadorB = new luchador_1.Luchador("Brakhor", 100);
var arqueroB = new arquero_1.Arquero("Fendris", 100);
var tiradorB = new tirador_1.Tirador("Korven", 200);
var equipoA = new personajes_1.Personajes("Equipo A", magoA, arqueroA, luchadorA, tiradorA);
var equipoB = new personajes_1.Personajes("Equipo B", magoB, arqueroB, luchadorB, tiradorB);
equipoA.enfrentarEquipos(equipoA, equipoB);
console.log(equipoA.atacarArquero());