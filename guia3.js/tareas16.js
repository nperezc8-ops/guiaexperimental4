/*
16. Invertir números en un arreglo 
• Entrada: [123, 450] 
• Salida: [321, 54]
*/
function invertir(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad`));
    let numeros=[];
    let i=0;
    let num;
        while(i<cantidad){
            numeros[i]=(prompt(`Ingrese el numero ${i+1}`));
            i++
        }
        i=0;
        while(i<numeros.length){
            num=numeros[i];
            let j=num.length-1;
               let invertido="";
            while(j>=0){
                invertido+=num[j];
                j--
            }
             console.log(`L cantidad es ${num} y su reversa es ${invertido}`);
            i++
            }
           
        }

invertir();