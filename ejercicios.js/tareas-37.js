/*
 Mayor de varios pares de números 
Leer 10 pares de números y mostrar cuál es el mayor en cada caso. 
• Entrada: [(5,7), (9,2)] 
• Salida: "Mayor=7", "Mayor=9" 

*/
function pares(){
    let c=1
    let n1
    let n2
    while(c<=10){
        n1=parseFloat(prompt(`Ingrese el primer numero par ${c}`));
        n2=parseFloat(prompt(`Ingrese el segundo numero del par ${c} `));
            if (n1>n2){
                console.log(`el valor mayor es ${n1}`)
            }else if(n1<n2){
                console.log(`el valor mayor es ${n2}`)
            }else{
                console,log(`Ambos son iguales`)
            }
            c=c+1
    }


}
pares()