/*
22. Cubo de elementos de un arreglo 
• Entrada: [2, 3, 4] 
• Salida: [8, 27, 64] 
*/
function cubo(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de numeros a calcular`));
    let numeros=[];
    let i=0;
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`ingrese la cantidad ${i+1}`));
        i++
    }
    i=0;
 
    let cubos=[];
    while(i<numeros.length){
        let num=numeros[i];
           let multi=1;
        for(let j=0;j<3;j++){
            multi*=num;
        }
         cubos.push(multi);
        i++
    }
      
    console.log(`${cubos.join(",")}`)
    
}
cubo();