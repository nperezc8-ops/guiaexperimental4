/*
10. Restas sucesivas en una lista 
Entrada: 
numeros = [15, 22, 30] 
valor_resta = 4 
Proceso: 
• Restar repetidamente hasta que el resultado sea menor que el valor restado. 
Salida: 
15 → 3   
22 → 2   
30 → 2
*/
function resta(){
    let cantidad=parseInt(prompt(`Ingrese las cantidad que desea`));
    let i=0;
    let numeros=[];
    let resta=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese la cantidad ${i+1}`));
        resta[i]=parseInt(prompt(`Ingrese cuanto quiere restarle al num ${i+1}`));
        i++
    }
    i=0;
    while(i<cantidad){
        let num=numeros[i];
        let original=numeros[i];
        let r=resta[i];
        let total=0;
        while(num-r>=0){
            num-=r;
        }
        console.log(`el numero es ${original} y su resta es ${num}`)
        i++
    }
}
resta();