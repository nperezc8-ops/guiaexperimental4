/*
7. Contar dígitos de varios números 
Entrada: 
numeros = [45, 678, 12345] 
Proceso: 
• Dividir cada número entre 10 y contar iteraciones. 
Salida: 
45 → 2 dígitos   
678 → 3 dígitos   
12345 → 5 dígitos
*/
function digitos(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de numeros que desea`));
    let i=0;
    let numeros=[];
        while(i<cantidad){
            numeros[i]=parseInt(prompt(`Ingrese la cantidad ${i+1}`));
            i++
        }
        i=0;
        while(i<cantidad){
            let num=numeros[i];
            let c=0;
            while(num>0){
                num=Math.floor(num/10);
                c++
            }
            console.log(`EL numero ${numeros[i]} tiene ${c} digitos`);
            i++
        }
}
digitos();