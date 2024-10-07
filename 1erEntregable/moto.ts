import { autos } from "./modeloAutos";

const ruedas = 2;

export class moto extends autos {

    private ruedas: number

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        super(color, modelo, rodado, vtv);
        this.ruedas= ruedas;
    }
}