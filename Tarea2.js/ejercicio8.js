/*
Bloque 4: Suscripciones grupales de streaming 
10. Versión condicional: 
Una aplicación de streaming cobra según número de usuarios: 
• ≥100 usuarios → $5 c/u. 
• 50–99 usuarios → $6 c/u. 
• 30–49 usuarios → $8 c/u. 
• <30 usuarios → $300 fijos. 
Calcular el costo total y el costo por usuario para un grupo. 
11. Versión repetitiva: 
La aplicación recibe N solicitudes de grupos. Para cada uno, calcular el costo total y el 
costo por usuario aplicando las mismas reglas. 
12. Versión con arreglos: 
Guardar en un arreglo la cantidad de usuarios de cada grupo y en otro arreglo el costo 
total calculado. Mostrar además en un arreglo paralelo el costo por usuario.
*/
function subscripciones(){
let precioU=[];
let usuariosT=[];
let precioTotal1=[];
let n=parseInt(prompt(`ingrese la cantidad de grupos que va a calcular`));
let c=1;
while(c<=n){
    let precio 
    let precioTotal;
    let usuarios=parseInt(prompt(`Ingrese la cantidad de usuarios subscritos del grupo ${c}`));
    if (usuarios>=100){
        precio=5;
        precioTotal=usuarios*precio;
    }else if(usuarios>=50 && usuarios<=99){
        precio=6;
         precioTotal=usuarios*precio;
    }else if (usuarios>=30 && usuarios<49){
         precio=8;
         precioTotal=usuarios*precio;
    }else{
         precioTotal=300;
         precio=precioTotal/usuarios;
    }
    usuariosT.push(usuarios);
    precioTotal1.push(precioTotal);
    precioU.push(precio);
    c++
}
    let i=0
    while(i<n){
        console.log(`Los usuarios del grupo ${i+1} es ${usuariosT[i]} siendo el total ${precioTotal1[i]} y el c/u ${precioU[i]} `);
        i++
    }

}
    subscripciones();