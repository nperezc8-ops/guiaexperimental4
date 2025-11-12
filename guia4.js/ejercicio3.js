/*
3. Suma de los divisores de un número 
Descripción: 
Calcular la suma total de los divisores positivos de un número. 
Proceso: 
1. Encontrar los divisores (como en el ejercicio anterior). 
2. Acumularlos en una variable suma. 
Ejemplo: 
Divisores de 12 = 1 + 2 + 3 + 4 + 6 + 12 = 28 
Salida: 
Suma de divisores: 28
*/
function divisores(){
    let numero=parseInt(prompt(`Ingrese la cantidad que desea ver su divisores`));
    let i=0;
    let suma=0;
    while(i<=numero){
        if(numero%i==0){
             suma+=i;
        }
      i++   
    }
        console.log(`La suma de los divisores del ${numero} es ${suma}`);
    }
       
divisores();