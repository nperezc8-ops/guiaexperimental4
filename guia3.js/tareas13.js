/*
13. Números perfectos en un arreglo 
• Entrada: [6, 10, 28] 
• Salida: "Números perfectos: 6, 28" 

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
     let numPerfecto=[];
    while(i<numeros.length){
        num=numeros[i];
        let divisores=[];
        for(let j=1;j<num;j++){
            if(num%j==0){
                divisores.push(j);
            }   
        }
        for(let k=0;k<divisores.length;k++){
            suma+=divisores[k]
            if(suma==num){
                numPerfecto.push(num);
            }
        }
        suma=0;
        i++
    }
     console.log(`Los numeros perfectos son: ${numPerfecto.join(",")}`);

}
divisores();