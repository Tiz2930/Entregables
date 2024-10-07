import { autos } from "./modeloAutos";

const ruedas = 4;

export class auto extends autos {

    private ruedas: number;

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        super(color, modelo, rodado, vtv);
        this.ruedas= ruedas;
    }
}
