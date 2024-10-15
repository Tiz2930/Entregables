import { Vehiculo } from "./modeloAutos";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    // Agregar vehículo 
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    // Eliminar vehículo
    public eliminarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos = this.vehiculos.filter(v => v !== vehiculo);
    }

    // Modificar vehículo
    public modificar(vehiculo: Vehiculo, rodado?: number, color?: string): string {
        const vehiculoEncontrado = this.vehiculos.find(v => v === vehiculo);
        if (vehiculoEncontrado) {
            if (color) vehiculoEncontrado.setColor(color);
            if (rodado) vehiculoEncontrado.setRodado(rodado);
            return "Modificación exitosa";
        }
        return "Vehículo no encontrado";
    }

    // Obtener todos los vehículos
    public getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }
}

const auto1 = new Auto("Blanco", "Volkswagen", 14, true);
const moto1 = new Moto("Rojo", "Motomel Blitz Full", 17, true);
const camion1 = new Camion("Ocre", "Volvo FH16", 22.5, true);

const registro = new RegistroAutomotor();

// Agregar vehículos
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log("Vehículos registrados:");
console.log(registro.getVehiculos());

// Modificar un camión
registro.modificar(camion1, 21, "Azul");

console.log("Vehículos después de modificación:");
console.log(registro.getVehiculos());

// Eliminar un vehículo
registro.eliminarVehiculo(moto1);

console.log("Vehículos después de eliminar la moto:");
console.log(registro.getVehiculos());
