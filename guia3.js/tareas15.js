/*
15. Factorial de números en un arreglo 
• Entrada: [3, 5] 
• Salida: 
o 3! = 6 
o 5! = 120
 */
function factorial(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad`));
    let numeros=[];
    let i=0;
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese la cantidad ${i+1}`));
        i++
    }
    i=0;
    while(i<numeros.length){
        num=numeros[i];
        facto=1;
     
    for(let k=1;k<=num;k++){
        facto*=k
    }
    console.log(`La cantidad que ingreso es ${num}! con su factotrial que es ${facto}`)
   i++
    }
}
factorial();