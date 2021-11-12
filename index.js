//primer console log
console.log("Trabajando en typescript");
//variable
var nombre;
nombre = "Guille";
var edad;
edad = 41;
console.log(nombre + edad);
//Sumando valores (colocando de entrada dos valores, se obtiene la suma total de los mismos)
function sumar(valor1, valor2) {
    return valor1 + valor2;
}
console.log(sumar(2, 8));
//Simulador Calculador IVA  (colocando de entrada un monto, se obtiene por consola el monto final con Iva incluido)
var precio;
precio = 400;
var iva;
iva = 1.21;
console.log(precio * iva);
//Simulador Calculador Prestamo  (colocando de entrada un monto que pretende solicitar, se obtiene por consola el monto final con intereses que debe devolver)
var monto;
monto = 10000;
var interes;
interes = 1.40;
console.log(monto * interes);
