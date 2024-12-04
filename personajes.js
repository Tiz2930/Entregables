"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    function Personajes(nombre, mago, arquero, luchador, tirador) {
        this.nombre = nombre;
        this.mago = mago;
        this.arquero = arquero;
        this.luchador = luchador;
        this.tirador = tirador;
    }
    Personajes.prototype.getNombre = function () {
        return this.nombre;
    };
    Personajes.prototype.getMago = function () {
        return this.mago;
    };
    Personajes.prototype.getArquero = function () {
        return this.arquero;
    };
    Personajes.prototype.getLuchador = function () {
        return this.luchador;
    };
    Personajes.prototype.getTirador = function () {
        return this.tirador;
    };
    //Ataques
    Personajes.prototype.atacarMago = function () {
        return "".concat(this.mago.getNombre(), " realiza un hechizo.");
    };
    Personajes.prototype.atacarArquero = function () {
        return "".concat(this.arquero.getNombre(), " realiza un ataque.");
    };
    Personajes.prototype.atacarLuchador = function () {
        return "".concat(this.luchador.getNombre(), " realiza un ataque.");
    };
    Personajes.prototype.atacarTirador = function () {
        return "".concat(this.arquero.getNombre(), " realiza un ataque.");
    };
    //Defensas
    Personajes.prototype.defensaMago = function () {
        return "".concat(this.mago.getNombre(), " realiza una defensa");
    };
    Personajes.prototype.defensaArquero = function () {
        return "".concat(this.arquero.getNombre(), " realiza una defensa.");
    };
    Personajes.prototype.defensaLuchador = function () {
        return "".concat(this.luchador.getNombre(), " realiza una defensa.");
    };
    Personajes.prototype.defensaTirador = function () {
        return "".concat(this.arquero.getNombre(), " realiza una defensa.");
    };
    //Evoluciones
    Personajes.prototype.evolucionMago = function (personaje1, personaje2) {
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return "Evoluci\u00F3n exitosa. ".concat(personaje1.getNombre(), " tiene las propiedades de ").concat(personaje2.getNombre(), ".");
    };
    Personajes.prototype.evolucionArquero = function (personaje1, personaje2) {
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return "Evoluci\u00F3n exitosa. ".concat(personaje1.getNombre(), " tiene las propiedades de ").concat(personaje2.getNombre(), ".");
    };
    Personajes.prototype.evolucionTirador = function (personaje1, personaje2) {
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return "Evoluci\u00F3n exitosa. ".concat(personaje1.getNombre(), " tiene las propiedades de ").concat(personaje2.getNombre(), ".");
    };
    //Enfrentar equipos
    Personajes.prototype.enfrentarEquipos = function (equipoA, equipoB) {
        var personajesA = [
            equipoA.getMago(),
            equipoA.getLuchador(),
            equipoA.getArquero(),
            equipoA.getTirador()
        ];
        var personajesB = [
            equipoB.getMago(),
            equipoB.getLuchador(),
            equipoB.getArquero(),
            equipoB.getTirador()
        ];
        console.log("Comienza el duelo entre el equipo A y el equipo B");
        for (var i = 0; i < personajesA.length; i++) {
            var atacanteA = personajesA[i];
            var defensorB = personajesB[i];
            // Equipo A ataca y Equipo B se defiende
            console.log("".concat(atacanteA.getNombre(), " del Equipo A ataca. ").concat(defensorB.getNombre(), " del Equipo B se defiende."));
            console.log(equipoA.atacarArquero());
            // Equipo B contraataca
            console.log("".concat(defensorB.getNombre(), " del Equipo B contraataca. ").concat(atacanteA.getNombre(), " del Equipo A se defiende."));
            console.log(equipoB.defensaArquero());
        }
        console.log("El enfrentamiento termino");
    };
    return Personajes;
}());
exports.Personajes = Personajes;
