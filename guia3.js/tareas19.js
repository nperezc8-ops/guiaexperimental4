/*
19. Mayores de edad en un arreglo 
• Entrada: [15, 22, 18, 30, 12] 
• Salida: "Mayores de edad: 3" 
*/
function mayores(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad`));
    let i=0;
    let numeros=[]
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese la edad ${i+1}`));
        i++
    }
    i=0;
     let contador=0;
    while(i<numeros.length){
        num=numeros[i];
           if(num>18){
            contador++
            }
            i++
    }
    console.log(`L cantidad de mayores de edad es ${contador} en los numeros ${numeros.join(",")}`)
    
    
}
mayores()