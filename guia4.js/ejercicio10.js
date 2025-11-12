/*
10. Restas sucesivas 
Descripción: 
Restar un número de manera repetitiva hasta llegar a 0 o menor. 
Proceso: 
1. Restar el valor dado en cada ciclo. 
2. Contar el número de restas necesarias. 
Ejemplo: 
Número = 15, Valor = 4   
15 − 4 − 4 − 4 = 3 
Salida: 
Resultado final: 3
*/
function resta(){
    let numero=parseInt(prompt(`Ingrese la cantidad a restar`));
    let resta=parseInt(prompt(`Ingrese que numero quieres restarle`));
    let contador=0;
    while(numero-resta>=0){
    numero-=resta;
    contador++
    }
    console.log(`El resulatdo final es ${numero} y se resto ${contador} veces`);
}
resta();