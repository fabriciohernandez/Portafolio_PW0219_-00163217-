function fibo(n){
    let serie = [0,1];
    if(n==1){
        console.log(serie[0]);
        return;
    }

    let aux;

    for(let i=0;i<n-2;i++){
        aux = serie[serie.length-1]+serie[serie.length-2];
        serie.push(aux);
    }

    console.log(serie);

}


fibo(1);