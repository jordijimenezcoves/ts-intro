/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {
    // Safe operator o secure operator
    // El ? en la propiedad hijos es necesario para que no salte error de propiedad length no existe en undefined, dado que estaríamos dando por supuesto que dicha propiedad siempre existe en el objeto, cuando en realidad esta es opcional
    // Por otro lado, la expresión "undefined || 0" consigue que se devuelva 0 siempre que no se recupere un lenght (prevalece el 0)
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);

