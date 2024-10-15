import { Vehiculo } from "./modeloAutos";

const ruedas = 6;

export class Camion extends Vehiculo {

    private ruedas: number;

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        super(color, modelo, rodado, vtv);
        this.ruedas = ruedas;
    }
}