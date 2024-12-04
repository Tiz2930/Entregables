"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
var Mago = /** @class */ (function () {
    function Mago(nickName, ptsVida) {
        this.nombre = nickName;
        this.nivel = 1;
        this.vida = ptsVida;
        this.evolucion = 1;
        this.poder = "Lanza fuego";
    }
    Mago.prototype.getNombre = function () {
        return this.nombre;
    };
    Mago.prototype.getNivel = function () {
        return this.nivel;
    };
    Mago.prototype.getEvolucion = function () {
        return this.evolucion;
    };
    Mago.prototype.getVida = function () {
        return this.vida;
    };
    Mago.prototype.getPoder = function () {
        return this.poder;
    };
    //SETERS
    Mago.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Mago.prototype.setNivel = function (parNivel) {
        this.nivel = parNivel;
    };
    Mago.prototype.setVida = function (parVida) {
        this.vida = parVida;
    };
    Mago.prototype.setPoder = function (parPoder) {
        this.poder = parPoder;
    };
    return Mago;
}());
exports.Mago = Mago;
