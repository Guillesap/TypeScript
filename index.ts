//primer console log
console.log("Trabajando en typescript")

//variable
var nombre;
nombre= "Guille";
var edad;
edad= 41;
console.log(nombre + edad);

//Sumando valores (colocando de entrada dos valores, se obtiene la suma total de los mismos)
function sumar (valor1: number, valor2:number){
    return valor1 + valor2;
}
console.log(sumar(2,8));

//Simulador Calculador IVA  (colocando de entrada un monto, se obtiene por consola el monto final con Iva incluido)
var precio;
precio = 400;
var iva;
iva=1.21;
console.log(precio*iva)


