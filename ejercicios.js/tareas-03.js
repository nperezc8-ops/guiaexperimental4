/*
Expresión aritmética con suma, potencias y módulo 
Dadas las variables m=7, n=4, p=2, calcular el valor de: 
t = (m + n) * (p^2) - (m mod p) 
Entrada: m=7, n=4, p=2 
Salida esperada: t=43
*/

function matematica(){
let m=7;
let n=4;
let p=2;
return Math.trunc ((m+n)*(p**2)-(m%p));

}
console.log(matematica());