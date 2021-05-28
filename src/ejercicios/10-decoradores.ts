/*
    ===== Código de TypeScript =====
*/

// Los decoradores en realidad no son mas que una función que expande una clase para añadirle nuevas características
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    
    public miPropiedad: string = 'ABC';

    imprimir() {
        console.log('Hello world');
    }

}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase);
