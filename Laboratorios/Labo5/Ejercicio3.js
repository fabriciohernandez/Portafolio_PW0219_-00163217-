function encontrarOcurrencias(unArreglo,unNumero){
    let cont=0;
    for(let i=0;i<unArreglo.length;i++){
        if(unNumero==unArreglo[i]){
            cont++;
        }
    }
 
   return cont;
} 
let numero = 1; //Cambiar para ir probando :)

let arreglo = [1,1,1,1,1,2,2,2,2,3,4,5,5,5,5,6,7,7,7,7,7,8,10,1,2,4,1];
let ocurrencias = encontrarOcurrencias(arreglo,numero);

console.log("El numero: " + numero + " " + "se encontro " + ocurrencias + " " + "veces");