/*
Bloque 2: Ejercicios con Arreglos (16 ejercicios) 
Arreglos con propiedades numéricas (6 ejercicios) 
11. Divisores de números en un arreglo 
• Entrada: [6, 10] 
• Salida: 
o Divisores de 6: 1, 2, 3, 6 
o Divisores de 10: 1, 2, 5, 10
*/
function divisores (){
    let numero=parseInt(prompt(`Ingrese los  numeros a calcular`));
    let numeros=[];
    let i=0;
    while(i<numero){
        numeros[i]=parseInt(prompt(`Ingrese el numero`));
        i++
    }
    i=0;
    while(i<numeros.length){
        let divisores=[];
        num=numeros[i];
        
        for(let j=1;j<=num;j++){
            if(num%j==0){
            divisores.push(j);
         }
        }
        console.log(`los divisores del numero ${num} son ${divisores.join(",")}`)
        i++
    
    }
}
    divisores();



    




    
