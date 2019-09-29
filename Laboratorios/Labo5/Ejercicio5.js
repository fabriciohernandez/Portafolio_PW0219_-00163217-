function palindromo(palabra){
    let len=palabra.length;
    let reverse=len-1;
    let cont=0;

    for(let i=0;i<len;i++){
        if(palabra[i]==palabra[reverse]){         
            cont++;
            reverse--;
            if(cont==len){
                console.log('Es palindromo');
            }
        }
        else
        {
            console.log('No es palidromo');
            return;
        }
    }
    
}
//NO ACEPTA ESPACIOS :(
palindromo('somosonosomos');