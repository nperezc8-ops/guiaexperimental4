/* 6. Invertir varios números 
Entrada: 
numeros = [123, 456, 780] 
Proceso: 
• Extraer los dígitos en orden inverso usando ciclos. 
Salida: 
123 → 321   
456 → 654   
780 → 87
*/
function reversa(){
    let cantidad= parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
    let inversos=[];
    while(i<cantidad){
        let num=numeros[i];
        let invertido=0;
        while(num>0){
            let digito=num%10;
            invertido=invertido*10+digito;
            num=Math.floor(num/10);
        }
        inversos.push(invertido);
        i++
    }
    console.log(`Los numeros son ${numeros.join(",")} y sus inversos son ${inversos.join(";")}`);
}
reversa();