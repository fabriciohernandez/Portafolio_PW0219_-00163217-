function llenarArregloYjugar(){
    let arreglo = [];
    let unNumeroRandom;
    for(let i=0;i<20;i++){
        unNumeroRandom = Math.floor(Math.random() * 100);
        arreglo.push(unNumeroRandom);
    }

    let numeroUsuario;
    numeroUsuario = prompt('Ingrese un numero para jugar');

    for(let i=0;i<arreglo.length;i++){
        if(numeroUsuario==arreglo[i]){
            //console.log(arreglo);
            console.log("Ganaste :)")
            return;         
        }
    }
    //console.log(arreglo);
    console.log('Perdiste :(');


}

//Vamos a jugar llamando a la funcion

llenarArregloYjugar();