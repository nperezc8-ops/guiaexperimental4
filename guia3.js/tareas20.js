/*
20. Buscar valor en un arreglo 
• Entrada: [4, 8, 15, 23], valor = 15 
• Salida: "El valor 15 sí existe en el arreglo."

*/
function existe(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad`));
    let i=0;
    let numeros=[]
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    let buscar=parseInt(prompt(`Ingrese el numero que desea buscar`));
    let existe=false;
    i=0;
    while(i<numeros.length){
        num=numeros[i];
           if(buscar===num){
            existe=true;
            break;
        } 
         i++;
}
        if(existe){
            console.log(`el numero ${buscar} es ${existe} SI existe en los numeros ${numeros.join(",")}`);
        }else{
            console.log(`el numero ${buscar} es ${existe} NO existe en los numeros ${numeros.join(",")}`);

        }

}
existe()