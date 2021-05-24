/*
    ===== Código de TypeScript =====
*/

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

// Esta opción de declarar interfaces que contienen atributos que a su vez son otras interfaces es más limpia
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface SuperHeroe2 {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
