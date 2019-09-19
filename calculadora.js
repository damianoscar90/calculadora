function sumar() {

var numero1 = document.getElementById("numero1").value //El .value es para sacar solo el valor
var numero2 = document.getElementById("numero2").value 
var resultado = 0;
var camporesultado = document.getElementById("resultado") //Cuando el getelementbyid no es .value es para sacar todo el campo

resultado = parseInt(numero1) +  parseInt(numero2)

camporesultado.value = resultado
}

function restar(){
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value 
    var resultado = 0;
    var camporesultado = document.getElementById("resultado")
    
    resultado = parseInt(numero1) -  parseInt(numero2)
    camporesultado.value = resultado

}

function multiplicar() {
    var numero1 = document.getElementById("numero1").value
    var numero2 = document.getElementById("numero2").value 
    var resultado = 0;
    var camporesultado = document.getElementById("resultado")
    resultado = parseInt(numero1) * parseInt(numero2);
    camporesultado.value = resultado
}
