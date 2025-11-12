/*
. Área de triángulo válida 
Leer base y altura de un triángulo y calcular el área únicamente si ambos valores son 
positivos. 
• Entrada: base=10, altura=5 
• Salida: Área=25

*/
function calcular(){
    let base=parseFloat(prompt("ingrese el valor de la base"));
    let altura=parseFloat(prompt("ingrese el valor de la altura"));
    let area= (base* altura)/2
    if(base >=0 && altura >=0 ){
        console.log(`El area del triangulo es ${area} siendo su base ${base} y su altura ${altura}`);
    } else {
        console.log(`No se puede usar numeros negativos para el area`);
    }
}
calcular()