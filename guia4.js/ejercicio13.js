/*
3. Suma de divisores de varios números 
Entrada: 
numeros = [6, 12, 28] 
Proceso: 
• Calcular los divisores y sumarlos para cada número. 
Salida: 
6 → 12   
12 → 28   
28 → 56
*/
 function suma(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
     
    while(i<cantidad){
        let num=numeros[i];
        let j=1;
        let total=0;
        while(j<=num){
        if(num%j==0){
            total+=j
        }
         j++
        }
    console.log(`la suma de los divisores del ${num} son: ${total} `);
    i++
    }
   }
   suma();