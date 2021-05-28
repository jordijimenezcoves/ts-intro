/*
    ===== Código de TypeScript =====
*/

// Tipo genérico <T>
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hello');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,3,4]);
let soyExplicito = queTipoSoy<number>(123);