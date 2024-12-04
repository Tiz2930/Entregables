"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var Arquero = /** @class */ (function () {
    function Arquero(nickName, ptsVida) {
        this.nombre = nickName;
        this.nivel = 1;
        this.vida = ptsVida;
        this.evolucion = 1;
        this.poder = "Lanza fuego";
    }
    Arquero.prototype.getNombre = function () {
        return this.nombre;
    };
    Arquero.prototype.getNivel = function () {
        return this.nivel;
    };
    Arquero.prototype.getEvolucion = function () {
        return this.evolucion;
    };
    Arquero.prototype.getVida = function () {
        return this.vida;
    };
    Arquero.prototype.getPoder = function () {
        return this.poder;
    };
    //SETERS
    Arquero.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Arquero.prototype.setNivel = function (parNivel) {
        this.nivel = parNivel;
    };
    Arquero.prototype.setVida = function (parVida) {
        this.vida = parVida;
    };
    Arquero.prototype.setPoder = function (parPoder) {
        this.poder = parPoder;
    };
    return Arquero;
}());
exports.Arquero = Arquero;
