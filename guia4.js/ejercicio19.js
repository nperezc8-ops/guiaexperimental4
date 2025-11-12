/*
9. Sumas sucesivas en una lista 
Entrada: 
numeros = [2, 3, 4] 
veces = 4 
Proceso: 
• Repetir la suma de cada número veces veces. 
Salida: 
2 × 4 = 8   
3 × 4 = 12   
4 × 4 = 16
*/
function sumas(){
    let cantidad=parseInt(prompt(`Ingrese el numero que desea`));
    let i=0;
    let numeros=[];
    let veces=[]
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        veces[i]=parseInt(prompt(`Ingrese las veces que se desea sumar ${i+1}`));
        i++
    }
    i=0;
        while(i<cantidad){
            let num=numeros[i];
            let v=veces[i]
            let j=0;
            let total=0;
            while(j<v){
                total+=num;
                j++
            }
            console.log(`El numero ${num} sumado ${v} veces da ${total}`);
            i++
        }
}
sumas();