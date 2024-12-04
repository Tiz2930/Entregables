"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
var Luchador = /** @class */ (function () {
    function Luchador(nickName, ptsVida) {
        this.nombre = nickName;
        this.nivel = 1;
        this.vida = ptsVida;
        this.evolucion = 1;
        this.poder = "Lanza fuego";
    }
    Luchador.prototype.getNombre = function () {
        return this.nombre;
    };
    Luchador.prototype.getNivel = function () {
        return this.nivel;
    };
    Luchador.prototype.getEvolucion = function () {
        return this.evolucion;
    };
    Luchador.prototype.getVida = function () {
        return this.vida;
    };
    Luchador.prototype.getPoder = function () {
        return this.poder;
    };
    //SETERS
    Luchador.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Luchador.prototype.setNivel = function (parNivel) {
        this.nivel = parNivel;
    };
    Luchador.prototype.setVida = function (parVida) {
        this.vida = parVida;
    };
    Luchador.prototype.setPoder = function (parPoder) {
        this.poder = parPoder;
    };
    return Luchador;
}());
exports.Luchador = Luchador;
