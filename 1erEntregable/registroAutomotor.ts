import { autos } from "./modeloAutos"
import { auto } from "./auto";
import { moto } from "./moto";
import { camion } from "./camion";

class RegistroAutomotor {
    private auto: auto;
    private moto: moto;
    private camion: camion;

    constructor(auto: auto, moto: moto, camion: camion) {
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }

    public modificar(vehiculo: auto | moto | camion, rodado?: number, color?: string) {
        if (color) vehiculo.setColor(color);
        if (rodado) vehiculo.setRodado(rodado);
        return "Modificación exitosa";
    }

    public getAuto(): auto {
        return this.auto;
    }

    public getCamion(): camion {
        return this.camion;
    }

    public getMoto(): moto {
        return this.moto;
    }
}

const auto1 = new auto("Blanco", "Volkswagen", 14, true);
const moto1 = new moto("Rojo", "Motomel Blitz Full", 17, true);
const camion1 = new camion("Ocre", "Volvo FH16", 22.5, true);

console.log("Sin VTV")
console.log(moto1);
// Modifico una moto desde su método de clase.
moto1.setVtv(true)
console.log(moto1)

// Creo registro.
const registro = new RegistroAutomotor(auto1, moto1, camion1);

// Obtengo vehículo a cambiar.
let vehiculoModificable = registro.getCamion();

console.log(vehiculoModificable); // Muestro estado inicializado
// Modifico un camión, le cambio el color y el rodado.
registro.modificar(vehiculoModificable, 21, "Azul")

// De esta manera, podría modificar el color o el rodado de cualquier vehículo.
console.log("Vehículos registrados:")
console.log(registro);
