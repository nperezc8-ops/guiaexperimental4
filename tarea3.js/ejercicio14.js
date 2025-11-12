/*
4. Mostrar la tabla de multiplicar de un número
Descripción:
Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
Entrada / Proceso:
Ingresar el número.
Usar un ciclo for desde 1 hasta 10.
Mostrar el producto en cada iteración.
Salida esperada:
Ingrese un número: 4  
Tabla del 4:
4 × 1 = 4  
4 × 2 = 8  
4 × 3 = 12  
…  
4 × 10 = 40
*/
function tablas(){
    let numero=parseInt(prompt(`Ingrese el numero de la tabla que desea`));
    let tabla=parseInt(prompt(`Ingrese hasta que numero desea la tabla`));
    let i=1;
    console.log(`La tabla del ${numero} es:`)
    while(i<=tabla){
        let total=numero*i;
        console.log(`${numero}*${i}=${total}`);
        i++
    }
    
}
tablas();