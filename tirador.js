"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tirador = void 0;
var Tirador = /** @class */ (function () {
    function Tirador(nickName, ptsVida) {
        this.nombre = nickName;
        this.nivel = 1;
        this.vida = ptsVida;
        this.evolucion = 1;
        this.poder = "Lanza fuego";
    }
    Tirador.prototype.getNombre = function () {
        return this.nombre;
    };
    Tirador.prototype.getNivel = function () {
        return this.nivel;
    };
    Tirador.prototype.getEvolucion = function () {
        return this.evolucion;
    };
    Tirador.prototype.getVida = function () {
        return this.vida;
    };
    Tirador.prototype.getPoder = function () {
        return this.poder;
    };
    //SETERS
    Tirador.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Tirador.prototype.setNivel = function (parNivel) {
        this.nivel = parNivel;
    };
    Tirador.prototype.setVida = function (parVida) {
        this.vida = parVida;
    };
    Tirador.prototype.setPoder = function (parPoder) {
        this.poder = parPoder;
    };
    return Tirador;
}());
exports.Tirador = Tirador;
