/*
 Segunda nota aprobada 
Leer un arreglo con 4 notas y verificar si la segunda es mayor o igual a 7. 
• Entrada: [5, 7, 8, 6] 
• Salida: "La segunda nota aprueba"

*/
function notas(){
let nota=[];
nota[0]=parseFloat(prompt("ingrese su nota 1"));
nota[1]=parseFloat(prompt("ingrese su nota 2"));
nota[2]=parseFloat(prompt("ingrese su nota 3"));
nota[3]=parseFloat(prompt("ingrese su nota 4"));
if(nota[1]>=7){
    console.log(`La segunda nota es ${nota[1]} por lo tanto aprueba`)
}else {
    console.log(`La segunda nota es ${nota[1]} no aprueba`) 
}
}
notas()