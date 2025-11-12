/*
. Procesos Repetitivos (15 ejercicios) 
36. Bienvenida a varios nombres 
Leer n nombres y mostrar “Bienvenido” únicamente a los que no estén vacíos. 
• Entrada: [“Juan”, “”, “Ana”] 
• Salida: "Bienvenido Juan", "Bienvenida Ana" 
*/
function bienvenido(){
    let n=parseInt(prompt("Cuantos nombres vas a ingresar"))
    let c=1
    let nombre
    while (c<=n){
        nombre=prompt(`Ingrese su nombre ${c}`)
        if(nombre.trim()!==""){
            console.log(`Bienvenido ${nombre}`)
        }
        c=c+1
    }
}
bienvenido()