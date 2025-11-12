/*
Operaciones básicas entre dos números 
Elaborar un programa que lea dos números enteros e imprima su suma, resta, 
multiplicación y división. 
Entrada: 8 y 2 
Salida esperada: Suma=10, Resta=6, Multiplicación=16, División=4
*/
function operaciones(){
    let n1=prompt("introduzca el numero 1");
    let n2= prompt("introduzca el numero 2");
    n1=parseInt(n1);
    n2=parseInt(n2);
    let suma= n1+n2;
    let resta= n1-n2;
    let multiplicar=n1*n2;
    let dividir=n1/n2;
    return (`La suma es ${suma}, la resta es ${resta}, la multiplicacion es ${multiplicar}, la division es ${dividir}`);
}
console.log(operaciones());

