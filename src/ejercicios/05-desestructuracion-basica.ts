/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        anio: 2015,
        autor: 'Ed Sheeran'
    }
}

// Esta constante está declarada para ejemplificar como proceder si al desestructurar una de las constantes ya existe con dicho nombre
const autor = 'Fulano';

// Desestructuración de objetos
// Opción 1
// const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
// Opción 2 (más legible)
const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle } = detalles;
// Nota: Con los ":" podemos cambiar el nombre de la constante declarada

console.log('El volumen actual es de: ', vol);
console.log('El segundo actual es de: ', segundo);
console.log('El canción actual es de: ', reproductor.cancion);
console.log('El autor es: ', autorDetalle);


// Desestructuración de arrays
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ goku, , p3 ] = dbz;
// const [ , , p3] = dbz;

console.log('Personaje 1: ', goku);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);
