/*
5. Números primos en una lista 
Entrada: 
numeros = [5, 6, 7, 8, 11] 
Proceso: 
• Verificar si cada número solo tiene dos divisores. 
Salida: 
Primos: 5, 7, 11
*/
function primos(){
    let cantidad=parseInt(prompt(`ingrese la cantidad`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numeros ${i+1}`));
        i++
    }
    i=0;
     let v=[];
    while(i<cantidad){
        let num=numeros[i];
        let primo=true;
        let j=0;
            if(num<=1){
                primo=false;
            }else{
             j=2;
            }  while(j<num){
                if(num%j==0){
                    primo=false;
                }
                j++
        }
        if(primo){
            v.push(num)
        }
        i++
}
console.log(`los numeros primos ${v.join(",")}`)
}
primos();