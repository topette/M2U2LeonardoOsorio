// Script del ejercicio 2

const nombre = document.getElementById("nombre")
const materiasCantidad = document.getElementById("materiasCantidad")
const valorMateria = 100000
const enviar1 = document.getElementById("enviar1")
const resultado = document.getElementById("resultado")
const resultadoFinal = document.getElementById("resultadoFinal")

function enviarboton(){
    if (nombre.value == ''){
        alert("Escriba su nombre")
    }
    else if (materiasCantidad.value == ''){
        alert("Escriba la cantidad de materias")
    }
    else {
        resultado.textContent = parseInt(materiasCantidad.value) * valorMateria
        let costoTotal = parseInt(materiasCantidad.value) * valorMateria
    let descuento = costoTotal * 0.20
    let restarDescuento = costoTotal - descuento
    let sumarFijos = restarDescuento + 28000
    resultadoFinal.textContent = sumarFijos
}
}