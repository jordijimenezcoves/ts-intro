/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
};

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
};

const multiplicar = (numero: number, otroNumero?: number, base: number = 2): number => {
    return numero * base;
};

// const resultado = sumar('Fernando',' Herrera');

const resultado2 = multiplicar(2, 0, 10);

// console.log(resultado);
console.log(resultado2);

//Las interfaces de TS nos facilitan la codificación y ayudan "documentando" el código (al igual que la definición de tipos tanto en variables, parámetros y retornos), pero su código se omite completamente una vez se compilan los ts a js
interface PersonajeLOTR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
};

function curar( personaje: PersonajeLOTR, curarX: number ): void {
    personaje.pv += curarX;
};

const nuevoPersonaje: PersonajeLOTR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vida: ', this.pv);
    }
};

curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarHP();



