/*
1. Serie de Fibonacci para varios términos 
Entrada: 
n_valores = [5, 8, 10] 
Proceso: 
• Para cada n, generar la serie. 
• Usar un ciclo que sume los dos anteriores. 
Salida: 
Fibonacci(5): 0, 1, 1, 2, 3   
Fibonacci(8): 0, 1, 1, 2, 3, 5, 8, 13   
Fibonacci(10): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 
*/
function serie(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de series que desea`));
    let i=0;
    let limites=[];
    while(i<cantidad){
    limites[i]=parseInt(prompt(`Ingrese hasta que numero desea la serie ${i+1}`));
    i++
}
     i=0;
     while(i<cantidad){
        let j=0; let a=0;let b=1;
     let total=[a,b]
     let c;
     while(j<limites[i]){
        c=a+b;
        total.push(c);
        a=b;
        b=c;
        j++
     }
     console.log(`Fibonnaci (${limites[i]})${total.join(",")}`)
     i++
     }
}
serie();