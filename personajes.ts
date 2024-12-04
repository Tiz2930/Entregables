import { Mago } from "./mago"
import { Arquero } from "./arquero"
import { Luchador } from "./luchador"
import { Tirador } from "./tirador"

export class Personajes {
    private nombre: string;
    private mago: Mago;
    private arquero: Arquero;
    private luchador: Luchador;
    private tirador: Tirador;

    constructor(nombre: string, mago: Mago, arquero: Arquero, luchador: Luchador, tirador: Tirador) {
        this.nombre = nombre;
        this.mago = mago;
        this.arquero = arquero;
        this.luchador = luchador;
        this.tirador = tirador;
    }

    public getNombre(): string {
        return this.nombre
    }

    public getMago(): Mago {
        return this.mago
    }

    public getArquero(): Arquero {
        return this.arquero
    }

    public getLuchador(): Luchador {
        return this.luchador
    }

    public getTirador(): Tirador {
        return this.tirador
    }

    //Ataques

    public atacarMago(): string {
        return `${this.mago.getNombre()} realiza un hechizo.`;
    }

    public atacarArquero(): string {
        return `${this.arquero.getNombre()} realiza un ataque.`;
    }

    public atacarLuchador(): string {
        return `${this.luchador.getNombre()} realiza un ataque.`;
    }

    public atacarTirador(): string {
        return `${this.arquero.getNombre()} realiza un ataque.`;
    }

    //Defensas

    public defensaMago(): string {
        return `${this.mago.getNombre()} realiza una defensa`;
    }

    public defensaArquero(): string {
        return `${this.arquero.getNombre()} realiza una defensa.`;
    }

    public defensaLuchador(): string {
        return `${this.luchador.getNombre()} realiza una defensa.`;
    }

    public defensaTirador(): string {
        return `${this.arquero.getNombre()} realiza una defensa.`;
    }

    //Evoluciones

    public evolucionMago(personaje1: Mago, personaje2: Arquero): string {
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return `Evolución exitosa. ${personaje1.getNombre()} tiene las propiedades de ${personaje2.getNombre()}.`;
    }

    public evolucionArquero(personaje1: Arquero, personaje2: Luchador): string {
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return `Evolución exitosa. ${personaje1.getNombre()} tiene las propiedades de ${personaje2.getNombre()}.`;
    }

    public evolucionTirador(personaje1: Tirador, personaje2: Mago): string {
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return `Evolución exitosa. ${personaje1.getNombre()} tiene las propiedades de ${personaje2.getNombre()}.`;
    }

    //Enfrentar equipos

    public enfrentarEquipos(equipoA: Personajes, equipoB: Personajes) {
        let personajesA = [
            equipoA.getMago(),
            equipoA.getLuchador(),
            equipoA.getArquero(),
            equipoA.getTirador()
        ];

        let personajesB = [
            equipoB.getMago(),
            equipoB.getLuchador(),
            equipoB.getArquero(),
            equipoB.getTirador()
        ];

        console.log("Comienza el duelo entre el equipo A y el equipo B");

        for (let i = 0; i < personajesA.length; i++) {
            const atacanteA = personajesA[i];
            const defensorB = personajesB[i];

            // Equipo A ataca y Equipo B se defiende
            console.log(`${atacanteA.getNombre()} del Equipo A ataca. ${defensorB.getNombre()} del Equipo B se defiende.`);
            console.log(equipoA.atacarArquero());

            // Equipo B contraataca
            console.log(`${defensorB.getNombre()} del Equipo B contraataca. ${atacanteA.getNombre()} del Equipo A se defiende.`);
            console.log(equipoB.defensaArquero());
        }
        console.log("El enfrentamiento termino");

    }


}