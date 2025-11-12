/*
22. Número mayor de dos 
Desarrollar un programa que lea dos números y muestre cuál de ellos es mayor. 
• Entrada: 8, 12 
• Salida: "El mayor es 12"

*/
function comparar(){
    let n1=parseFloat(prompt("Ingrese el primer valor"));
    let n2=parseFloat(prompt("ingrese el segundo valor"));
    if(n1>n2){
        console.log(`El valor mayor es ${n1}`);

    } else if(n1==n2){
        console.log(`los valores son iguales`);

    } else {
        console.log (`El valor mayor es ${n2}`);
    }
}
comparar();