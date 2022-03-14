// This is a JavaScript file

//Função que é executada no carregamento da página 
window.onload = function(){
    let valor1 = document.querySelector("#valor1");
    let valor2 = document.querySelector("#valor2");
    let valor3 = document.querySelector("#valor3");

    let calc = document.querySelector("#calc");

    calc.addEventListener("click", function(){
        if((valor1.value < valor2.value + valor3.value) && (valor2.value < valor1.value + valor3.value) && (valor3.value < valor1.value + valor2.value)){
            if((valor1.value == valor2.value)&& (valor2.value == valor3.value)&& (valor3.value == valor1.value)){
                document.getElementById("result").value = "Equilátero! '-'";
            } else if((valor1.value != valor2.value)&& (valor2.value != valor3.value)&& (valor3.value != valor1.value)){
                document.getElementById("result").value = "Escaleno! '_'";
            } else {
                 document.getElementById("result").value = "Isóceles! 'O'";
            }
        } else{
             document.getElementById("result").value = "Inválido";
        }
    });
}