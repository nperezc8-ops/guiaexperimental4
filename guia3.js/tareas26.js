/*
26. Suma de dos arreglos en un tercero 
• Entrada: A = [2, 4, 6], B = [1, 3, 5] 
• Salida: C = [3, 7, 11]
*/
function suma(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea sumar`));
    let numeros1=[],numeros2=[];
    let i=0;
    while(i<cantidad){
        numeros1[i]=parseFloat(prompt(`Ingrese la cantidad ${i+1} del grupo A`));
        numeros2[i]=parseFloat(prompt(`Ingrese la cantidad ${i+1} del grupo B`));
        i++
    }
    i=0;
    let suma=[];
    while(i<numeros1.length && i<numeros2.length){
        let num1=numeros1[i];
        let num2=numeros2[i];
        suma[i]=num1+num2;
        i++
    }
    console.log(`la suma del grupo A y el grupo B es ${suma.join(",")}`)
    
}
suma();