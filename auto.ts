import { Vehiculo } from "./modeloAutos";

const ruedas = 4;

export class Auto extends Vehiculo {

    private ruedas: number;

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        super(color, modelo, rodado, vtv);
        this.ruedas = ruedas;
    }
}
