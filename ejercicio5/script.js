function boton(){
    let num = parseInt(prompt("Introduzca un numero"))
    let y = num

    for(let n=(num-1); n>0; n--)
        y *= n
        
    console.log("El resultado del factorial de "+num+" es "+y)
}
