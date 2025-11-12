/*

4. Mostrar tablas de multiplicar de varios números
Descripción:
Dada una lista de números, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
Entrada:
numeros = [3, 5]
Proceso:
Ciclo externo: recorrer cada número.
Ciclo interno: multiplicar del 1 al 10.
Salida esperada:
Tabla del 3:
3, 6, 9, 12, 15, 18, 21, 24, 27, 30

Tabla del 5:
5, 10, 15, 20, 25, 30, 35, 40, 45, 50

 */
function tablas(){
    let cantidad=parseInt(prompt(`Ingrese las tablas que desea`));
    let i =0;
    let numeros=[];
    let tabla=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero de la tabla ${i+1}`))
        tabla[i]=parseInt(prompt(`Ingrese hasta que numero desea la tabla ${i+1}`));
        i++
    }
     i=0;
    while(i<cantidad){
        let numero=numeros[i];
        let limite=tabla[i];
        j=1
        console.log(`La tabla del ${numero} es:`)
        while(j<=limite){
        let total=numero*j;
        console.log(`${numero}*${j}=${total}`);
        j++
        }
        i++
    }
    
}
tablas();