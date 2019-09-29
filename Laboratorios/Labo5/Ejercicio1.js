function obtenerTypes(arreglo){
    let tipos = [];
    
    for (let i = 0; i < arreglo.length; i++) {

        tipos.push(typeof arreglo[i]);  
     }
    
     let aux='';
     let cont=0;
    while(true){
        aux=tipos[cont];
        
        for (let i = 0; i < tipos.length; i++) {
            if(tipos.length===0){
                break;
            }
            if(aux==tipos[i]){
                cont++;
                tipos.splice(i,1);
                i=-1;
            }

            
         }
         console.log(aux +': ' + cont);
         cont=0;

         if(tipos.length==0){
            break;
        }

    }
}
let arreglo=["hola",1,2,3,1.4,1.3,2,2,true,false,'c','v','a'];
obtenerTypes(arreglo);

