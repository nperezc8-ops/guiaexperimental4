/*
7. Contar dígitos de un número 
Descripción: 
Determinar cuántos dígitos tiene un número entero. 
Proceso: 
1. Mientras n > 0, dividir entre 10 y aumentar un contador. 
Ejemplo: 
n = 9876   
Iteraciones: 9876 → 987 → 98 → 9 → 0   
→ Cantidad de dígitos: 4 
Salida: 
Cantidad de dígitos: 4  
*/
function contador(){
    let numero=parseInt(prompt(`Ingrese el numero a calcular`));
    let contador=0;
    while(numero>0){
        numero=Math.floor(numero/10)
        contador++
    }
    console.log(`la cantidad de digitos son ${contador}`);
}
contador();
