/*
24. Factorial de cada número en un arreglo 
• Entrada: [4, 6] 
• Salida: [24, 720]
*/
function facto(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad a ingresar`));
    let numeros=[];
    let i=0;
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
    let num;
    let factorial=[];
    while(i<numeros.length){
        num=numeros[i];
        let total=1;
         for(let k=1;k<=num;k++){
                total*=k;
    }
    factorial.push(total);
    i++;
    }
    console.log(`${factorial.join(",")}`)
    }
    facto();