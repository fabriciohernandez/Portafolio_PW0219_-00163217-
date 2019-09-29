function calcArea(radio){

    let result = Math.PI*Math.pow(radio,2);
    if(result<=0){
        return -1;
    }

    return result;


}

console.log(calcArea(5));