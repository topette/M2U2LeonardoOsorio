// for boton
const inputMaterias = document.getElementById("inputMaterias")
const casillaUl = document.getElementById("casillaUl")
const botonOculto = document.getElementById("botonOculto")
const inputBoton = document.getElementById("inputBoton")

inputBoton.addEventListener("click", ()=> {
    casillaUl.innerHTML = ""
    if(inputMaterias.value != "" && inputMaterias.value < 20){
        for (let x = 0; x < inputMaterias.value; x++){
            casillaUl.innerHTML += `<input id='${x}' class="valorMaterias" type='number' placeholder='Ingrese el valor de la materia'><br>`
        }
        botonOculto.style.display = "block"
    } else {
        alert("solo se pueden hasta 20 materias")
    }  
})



botonOculto.addEventListener("click", ()=>{
    let valorTotal = document.getElementById("valorTotal")
    let calcularValores = 0
    let valorMaterias = document.getElementsByClassName("valorMaterias")
        for (let y = 0; y < valorMaterias.length; y++){
            console.log(valorMaterias[y].value)
            calcularValores += parseInt(valorMaterias[y].value)
        }
        valorTotal.textContent = calcularValores
})