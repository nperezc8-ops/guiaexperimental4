/*
12. Suma de divisores en un arreglo 
• Entrada: [6, 12] 
• Salida: 
o Suma divisores de 6 = 12 
o Suma divisores de 12 = 28 
*/
function divisores (){
    let cantidad= parseInt(prompt(`ingrese los numeros a calcular`));
    let numeros=[];
    let i=0;
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese la cantidad`));
        i++
    }
     i=0
     let suma=0;
    while(i<numeros.length){
        num=numeros[i];
        let divisores=[];
        for(let j=1;j<=num;j++){
            if(num%j==0){
                divisores.push(j);
            }   
        }
        for(let k=0;k<divisores.length;k++){
            suma+=divisores[k]
        }
        console.log(`los divisores del  numero ${num} son ${divisores.join(",")} y su suma es ${suma}`)
        suma=0;
        i++
    }

}
divisores();