function ordernarArreglo(arreglo)
{

    for(var i=1;i<arreglo.length;i++)

    {

        for(var j=0;j<(arreglo.length-i);j++)

        {

            if(arreglo[j]>arreglo[j+1])

            {

                aux=arreglo[j+1];

                arreglo[j+1]=arreglo[j];

                arreglo[j]=aux;

            }

        }

    }

    console.log(arreglo);

}

let unArreglo=[4,3,2,5,6,1];

ordernarArreglo(unArreglo);