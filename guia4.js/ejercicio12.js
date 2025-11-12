/*
2. Divisores de varios números 
Entrada: 
numeros = [6, 10, 15] 
Proceso: 
• Recorrer cada número y calcular sus divisores. 
Salida: 
6 → 1, 2, 3, 6   
10 → 1, 2, 5, 10   
15 → 1, 3, 5, 15
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
        let divisores=[];
        while(j<=num){
        if(num%j==0){
            divisores.push(j);
        }
         j++
    }
    console.log(`los divisores de ${numeros[i]} son: ${divisores.join(",")}`);
    i++
    }
    
   }
   suma();