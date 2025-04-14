function boton(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dni = parseInt(prompt("Introduzca su DNI")), letra_usuario = prompt("Escriba la letra correspondiente al DNI")

    if(dni > 99999999 || dni < 0)
        console.log("El número proporcionado no es válido")

    else
        letras = letras[dni%23]
    
    if(letra_usuario == letras)
        console.log("El dni proporcionado corresponde correctamente a la letra "+letras)
    
    if(letra_usuario !== letras)
        console.log("la letra correspondiente al dni proporcionado no coincide con la letra proporcionada")
}
