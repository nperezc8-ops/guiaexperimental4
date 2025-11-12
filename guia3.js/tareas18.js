/*
18. Contar impares en un arreglo 
• Entrada: [2, 5, 7, 8, 10] 
• Salida: "Cantidad de impares: 2"

*/
function impar(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad`));
    let i=0;
    let numeros=[]
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero${i+1}`));
        i++
    }
    i=0;
     let contador=0;
    while(i<numeros.length){
        num=numeros[i];
            if(num%2!==0){
                contador++
            }
            i++
    }
    console.log(`L cantidad de impares es ${contador} en los numeros ${numeros.join(",")}`)
    
    
}
impar()