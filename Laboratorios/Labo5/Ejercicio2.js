function sumarElementos(arreglo){
    let acum=0;
    for(let i=0;i<arreglo.length;i++){
        acum=acum+arreglo[i];
    } 
    console.log("Sumatoria: "+ acum +" "+"Promedio: " + acum/arreglo.length);
}

let unArreglo = [1,2,3,4];
sumarElementos(unArreglo);
