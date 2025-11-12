/*
4. Expresión con división entera y multiplicación 
Se tienen las variables a=12, b=5, c=3. Se pide resolver la expresión: 
q = (a div b) + (b^2 mod c) * a 
Entrada: a=12, b=5, c=3 
Salida esperada: q=22 
*/


function matematica(){
let a=12;
let b=5;
let c=3;
return Math.trunc ((a/b)+(b**2%c)*a);

}

console.log(matematica());