/*
Expresión con potencias y operaciones mixtas 
Dados los valores x=10, y=2, z=3, calcular la expresión: 
k = (x^2 + y^3) div z + (x mod y) 
Entrada: x=10, y=2, z=3 
Salida esperada: k=35

*/


function matematica (){

let x=10;
let y=2;
let z=3;

return Math.trunc ((x**2+y**3)/z+(x%y));


}
console.log(matematica());