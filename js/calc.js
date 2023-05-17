function insereNumeroNoVisor(botao, visor) {

    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){

       if(visor.value[visor.value.length - 1] == "+" || visor.value[visor.value.length - 1] == "-" || visor.value[visor.value.length - 1] == "*" || visor.value[visor.value.length - 1] == "/"){
            visor.value.slice(visor.value.length - 1);
       }
       else{
            visor.value += botao.value
       }

    }

    else{
        visor.value += botao.value;
    }

}

//function resultadoDasOperacoes2 (){
//    console.log(this.id + " FUNCTION");
//}

//const btnResult = document.querySelector("#btnResultado");
//btnResult.addEventListener("click", resultadoDasOperacoes2);

const resultadoDasOperacoes = (visor) => {
    //UTILIZAR A FUNÇÃO eval PARA PROCESSAR UMA STRING COMO SE FOSSE UMA EXPRESSÃO MATEMÁTICA.
    visor.value = eval(visor.value);
}