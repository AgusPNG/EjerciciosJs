function boton(){
    var valores = [true, 5, false, "hola", "adios",2];
    var booleano = valores[0]

    if(valores[3] > valores[4])
        console.log("La palabra mayor es "+ valores[3]);
    
    else
        console.log("La palabra mayor es "+ valores[4]);

    if(booleano == valores[0])
        console.log("El resultado es "+valores[0])

    if(booleano == valores[2])
        console.log("El resultado es "+valores[2])

    console.log(valores[1]+"+"+valores[5]+"="+(valores[1]+valores[5]))
    console.log(valores[1]+"-"+valores[5]+"="+(valores[1]-valores[5]))
    console.log(valores[1]+"*"+valores[5]+"="+(valores[1]*valores[5]))
    console.log(valores[1]+"/"+valores[5]+"="+(valores[1]/valores[5]))
    console.log(valores[1]+"^"+valores[5]+"="+(valores[1]**valores[5]))
}
