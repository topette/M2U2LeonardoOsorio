//Archivo de JS

const a = document.getElementById("valorA")
const b = document.getElementById("valorB")
const c = document.getElementById("valorC")
const d = document.getElementById("valorD")
const enviar1 = document.getElementById("enviar1")
const resultado = document.getElementById("resultado")
const resultadomin = document.getElementById("resultadomin")
const resultadomax = document.getElementById("resultadomax")
let gracias = document.getElementById("gracias")
let graciasclase2 = document.getElementsByClassName("graciasclase2")
let numeros = []

//enviar1.addEventListener("click", enviarboton);

enviarboton => {
    if (a.value == '' || b.value == '' || c.value == '' || d.value == ''){
        alert("A esta vacio ")
    }
    else if (a.value == b.value || a.value == c.value || a.value == d.value || b.value == c.value || b.value == d.value || c.value == d.value ){
        alert("Los valores deben ser diferentes")
    }
    else {
    numeros[0] = parseInt(a.value)
    numeros[1] = parseInt(b.value)
    numeros[2] = parseInt(c.value)
    numeros[3] = parseInt(d.value)

    let minimo = Math.min(...numeros)
    let maximo = Math.max(...numeros)

    resultado.textContent = parseFloat(a.value) + parseInt(b.value) + parseInt(c.value) + parseInt(d.value)
    resultadomin.textContent = minimo
    resultadomax.textContent = maximo
    
    limpiarcampos()
}

}

function limpiarcampos(){
    a.value = ''
    b.value = ''
    c.value = ''
    d.value = ''
    otrafuncion()
}

function otrafuncion() {
    gracias.textContent = "Muchas gracias por llenar el form " + graciasclase2[1].textContent 

}

