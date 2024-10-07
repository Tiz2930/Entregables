import { autos } from "./modeloAutos";

const ruedas= 6;

export class camion extends autos {

    private ruedas: number;

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        super(color, modelo, rodado, vtv);
        this.ruedas= ruedas;
    }
}