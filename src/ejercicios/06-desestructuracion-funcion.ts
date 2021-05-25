/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaISV( productos: Producto[] ): [number, number] {
    let total = 0;

    // productos.map( producto => {
    //     total += producto.precio;
    // });

    // productos.forEach( producto => {
    //     total += producto.precio;
    // });

    // Además de recorrer el array utilizamos desestructuración de objetos para crear la variable con la queremos trabajar
    productos.forEach( ({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];    
}

// Se comenta el código de aquí para que el export e import de la función calculaISV no ejecute este código (se ejecuta el archivo completo al importar funciones. Esto no ocurre al importar interfaces)
// const articulos = [telefono, tableta];

// Desestructuración de array
// const [total, isv] = calculaISV(articulos);

// console.log('Total: ', total);
// console.log('ISV: ', isv);
