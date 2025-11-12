//* Operación con potencias, módulo y división entera 
//En una fórmula matemática se tienen los valores a=3, b=2, c=5. Se pide calcular la 
//expresión: 
//x = (a + b^2) mod c div a 
//Entrada: a=3, b=2, c=5 
//Salida esperada: x=1 //*

function matematica(){
let a=3;
let b=2;
let c=5;

return Math.trunc((a+b**2)%c/a);

}
console.log(matematica());