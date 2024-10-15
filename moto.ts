import { Vehiculo } from "./modeloAutos";

const ruedas = 2;

export class Moto extends Vehiculo {

    private ruedas: number

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        super(color, modelo, rodado, vtv);
        this.ruedas = ruedas;
    }
}