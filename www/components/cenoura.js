// This is a JavaScript file

//Função que é executada no carregamento da página 
window.onload = function(){
    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");
    const valor3 = document.querySelector("#valor3");

    const calc = document.querySelector("#calc");

    calc.addEventListener("click", function(){
        let resultado = parseFloat(valor1.value) + parseFloat(valor2.value) + parseFloat(valor3.value);
        document.querySelector("#result").value = resultado;
    });
}