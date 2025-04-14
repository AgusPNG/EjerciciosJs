function boton(){
    let text = prompt("Indroduzca una oracion palindromo")
    let arr = (text.replaceAll(' ','')).split(''), matches=0, i=0, u=(arr.length-1)

    while(i<=arr.length){
        if(arr[i] == arr[u])
            matches++
        i++
        u--
    }

    if(arr.length-1 == matches)
        console.log("El texto proporcionado es un políndromo")

    if(arr.length-1 !== matches)
        console.log("El texto proporcionado no es un políndromo")
}
