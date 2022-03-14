// This is a JavaScript file

//Função que é executada no carregamento da página 
window.onload = function(){
    
    let calc = document.querySelector("#calc");
    
    calc.addEventListener("click", function(){
        let A = parseInt(document.querySelector("#valor1").value);
        let B = parseInt(document.querySelector("#valor2").value);
        let C = parseInt(document.querySelector("#valor3").value);

        if((A<B+C) && (B<A+C) && (C<A+B)){
            if(A==B && B==C){
                document.getElementById("result").value = "Equilátero! '-'";
            } else if(A!=B && B!=C){
                document.getElementById("result").value = "Escaleno! '_'";
            } else {
                 document.getElementById("result").value = "Isóceles! 'O'";
            }
        } else{
             document.getElementById("result").value = "Inválido";
        }
    });
}