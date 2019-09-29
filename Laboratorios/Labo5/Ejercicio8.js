function toBinary(numero){
    console.log(numero%2);
    let binario = [];
    let m;
    let aux=numero;
    while(true){
        m=aux%2;
        aux=Math.trunc(aux/2);
        binario.push(m);

        if(aux<1){
            break
        }
        
    }
    binario = binario.reverse();
    //para que quede bonita la respuesta
    let result='';
    for(let i=0;i<binario.length;i++){
        result=result+binario[i];
    }
    return result;
}



console.log('En binario: '+ toBinary(725));