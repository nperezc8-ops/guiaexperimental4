/*
23. Tabla de multiplicar de elementos 
• Entrada: [3, 5] 
• Salida: 
o Tabla de 3: 3, 6, 9, …, 30 
o Tabla de 5: 5, 10, 15, …, 50 
*/
function tablas(){
    let cantidad=parseInt(prompt(`ingrese la cantidad de numeros`));
    let numeros=[];
    let i=0;
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
    while(i<numeros.length){
        let num=numeros[i];
        let multi=1;
        total=[];
        for(let j=1;j<=10;j++){
            multi=num*j;
            total.push(multi);
        }
        console.log(`la tabla${num} es ${total.join(",")}`);    
        i++
    }

}
tablas();