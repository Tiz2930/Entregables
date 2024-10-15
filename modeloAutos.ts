export class Vehiculo {
    private color: string;
    private modelo: string;
    private rodado: number;
    private vtv: boolean;

    constructor(color: string, modelo: string, rodado: number, vtv: boolean) {
        this.color = color;
        this.modelo = modelo;
        this.rodado = rodado;
        this.vtv = vtv;
    }

    //Metodo get

    getColor(): string {
        return this.color;
    }

    getModelo(): string {
        return this.modelo;
    }

    getRodado(): number {
        return this.rodado;
    }

    getVtv(): boolean {
        return this.vtv;
    }

    //Metodo set

    setColor(color: string): void {
        this.color = color;
    }

    setRodado(rodado: number): void {
        this.rodado = rodado;
    }

    setVtv(vtv: boolean): void {
        this.vtv = vtv;
    }

}