/*
8. Factorial de varios números 
Entrada: 
numeros = [3, 4, 5] 
Proceso: 
• Multiplicar valores consecutivos hasta n. 
Ejemplo: 
5! = 5 × 4 × 3 × 2 × 1 = 120 
Salida: 
3! = 6   
4! = 24   
5! = 120
*/
function Factorial(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese la cantidad ${i+1}`));
        i++
    }
    i=0;
    while(i<cantidad){
        let num=numeros[i];
        let j=1;
        let multi=1;
        while(j<=num){
            multi*=j;
            j++
        }
        console.log(`el numeros es ${num} y su factorial es ${multi}`);
        i++
    }
}
Factorial();