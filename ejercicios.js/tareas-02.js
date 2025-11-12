/*
Expresión combinada con potencias y módulo 
Con los valores x=4, y=3, z=2, calcular la siguiente expresión aritmética: 
r = (x^3 + y^2) mod z + (x div y) 
Entrada: x=4, y=3, z=2 
Salida esperada: r=2
*/


function matematica (){
let x=4;
let y=3;
let z=2;

return Math.trunc ((x**3+y**2)%z+(x/y));

}
console.log(matematica());