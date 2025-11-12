/*
7. Versión condicional: 
Una tienda de electrónicos fija un precio inicial a un celular y ajusta según marca y 
capacidad: 
o Marca A, 64 GB → +$20. 
o Marca A, 128 GB → +$30. 
o Marca B, 64 GB → –$30. 
o Marca B, 128 GB → –$50. 
Determinar el precio final de un celular vendido. 
8. Versión repetitiva: 
La tienda vende N celulares. Para cada uno se ingresan marca y capacidad, y se calcula 
el precio final con las reglas anteriores. 
9. Versión con arreglos: 
Guardar en un arreglo las marcas, en otro las capacidades y en un tercer arreglo los 
precios finales de cada celular.
*/
function  marcas(){
    let marcas=[];
    let capacidad=[];
    let preciosTotal=[];
    let c=1;
    let total;
    let n= parseInt(prompt(`Ingrese la cantidad de celulares que va a comprar `));
    while (c<=n){
      let  marca=prompt(`Ingrese la marca(A o B)`);
       let capacidad2=parseInt(prompt(`Ingrese la capacidad (64 o 128)`));
       let precio=parseFloat(prompt(`Ingrese el valor del celular`));
        if(marca=="A" && capacidad2===64){
            total=precio+20;
        } else if (marca=="A" && capacidad2===128){
            total=precio+30;
        }else if (marca=="B" && capacidad2===64){
            total=precio-30;
        }else if(marca=="B" && capacidad2===128){
            total=precio-50;
        }
        marcas.push(marca);
        capacidad.push(capacidad2);
        preciosTotal.push(total);
        c++
    }
        let i=0;
        while(i<n){
            console.log(`Celular=${preciostotal[i]}$ siendo su capacidad ${capacidad[i]} y su marca ${marcas[i]} siendo su total ${total}`)
            i++;
        
    }
}
marcas();