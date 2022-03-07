// This is a JavaScript file

//Função que é executada no carregamento da página 
window.onload = function(){
    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");

    const somar = document.querySelector("#somar");

    somar.addEventListener("click", function(){
        let parseFloat(resultado = valor1.value) + parseFloat(valor2.value);
        document.querySelector("#result").value = resultado;
    });
}