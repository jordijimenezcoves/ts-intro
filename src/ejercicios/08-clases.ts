/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}

}

class Heroe extends PersonaNormal {
    // Forma clásica de declarar atributos y crear el constructor
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;
    // 
    // constructor( alterEgo: string, edad: number, nombreReal: string) {
    //     this.alterEgo = alterEgo;
    //     this.edad = edad;
    //     this.nombreReal = nombreReal;
    // }

    // Si se declara el constructor de esta forma, no es necesario declarar los atributos ni mencionar y asignar cada uno en el constructor, se ahorra código. Además se parece mucho a la inyección de dependencias de Angular.
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) {
        super( nombreReal, 'New York, USA' );
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);

// Este es el objeto resultante que aparece por consola:
const resultadoFinal = {
    alterEgo: "Ironman",
    direccion: "New York, USA",
    edad: 45,
    nombre: "Tony Stark",
    nombreReal: "Tony Stark"
}