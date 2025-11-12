/*
4. Números perfectos en una lista 
Entrada: 
numeros = [6, 10, 28, 30] 
Proceso: 
• Comparar cada número con la suma de sus divisores. 
Salida: 
Números perfectos: 6, 28
*/
function perfecto (){
    let cantidad= parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingresa el numero ${i+1}`));
        i++
    } 
    i=0;
      let r=[];
    while(i<cantidad){
        let num=numeros[i];
        let j=1;
        let total=0;
        while(j<num){
            if(num%j==0){
                total+=j;
            }
            j++
        }
        if(num==total){
            r.push(num)
        }
        i++
    }
    console.log(`Los numeros perfectos son ${r.join(",")}`);
}
perfecto();