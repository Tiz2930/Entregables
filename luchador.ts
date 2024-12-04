export class Luchador {
    protected nombre: string;
    protected nivel: number;
    protected vida: number;
    protected evolucion: number;
    private poder: string;

    constructor(nickName: string, ptsVida: number) {
        this.nombre = nickName;
        this.nivel = 1;
        this.vida = ptsVida;
        this.evolucion = 1;
        this.poder = "Lanza fuego";
    }


    public getNombre(): string {
        return this.nombre
    }

    public getNivel(): number {
        return this.nivel
    }

    public getEvolucion(): number {
        return this.evolucion;
    }

    public getVida(): number {
        return this.vida
    }

    public getPoder(): string {
        return this.poder
    }

    //SETERS

    public setNombre(parNombre: string): void {
        this.nombre = parNombre
    }

    public setNivel(parNivel: number): void {
        this.nivel = parNivel
    }

    public setVida(parVida: number): void {
        this.vida = parVida
    }

    public setPoder(parPoder: string): void {
        this.poder = parPoder
    }
}