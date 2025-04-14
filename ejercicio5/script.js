function boton(){
    let num = parseInt(prompt("Introduzca un numero"))
    let x = 0, y = num

    for(let n=(num-1); n>0; n--){
        x = y * n
        y = x
    }
    console.log("El resultado del factorial de "+num+" es "+y)
}