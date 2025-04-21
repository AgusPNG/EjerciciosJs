function boton(){
    var valores = [true, 5, false, "hola", "adios",2];

    if(valores[3] > valores[4])
        console.log("La palabra mayor es "+ valores[3]);
    else
        console.log("La palabra mayor es "+ valores[4]);

    if(valores[0] == true)
        console.log("El resultado es "+valores[0])

    if(valores[2] == false)
        console.log("El resultado es "+valores[2])

    console.log(valores[1]+"+"+valores[5]+"="+(valores[1]+valores[5]))
    console.log(valores[1]+"-"+valores[5]+"="+(valores[1]-valores[5]))
    console.log(valores[1]+"*"+valores[5]+"="+(valores[1]*valores[5]))
    console.log(valores[1]+"/"+valores[5]+"="+(valores[1]/valores[5]))
    console.log(valores[1]+"^"+valores[5]+"="+(valores[1]**valores[5]))
}
