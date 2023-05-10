//Gerando um token com Math.

let tokenGerado = Math.random().toString(32).substring(2);

//declarando objetos
const usuario1 = {
    nomeUsuario : "denden",
    senhaUsuario : "12345",
    gravaDados : true,
    token : tokenGerado
}

tokenGerado = Math.random().toString(32).substring(2);
console.log(tokenGerado);

//declarando objetos
const usuario2 = {
    nomeUsuario : "gege",
    senhaUsuario : "12345",
    gravaDados : true,
    token : tokenGerado
}

let listaDeUsuarios =  [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

console.log(listaDeUsuarios);

addEventListener("click", (evt)=>{

    if(evt.target.id == "btnSubmit"){}
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");
    //console.log(inputUser.value) resgata o valor que foi inputado pelo usuario no site
    
    try{
        
        listaDeUsuarios.forEach((usuario)=>{
            if(inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario){
                throw "Validado!";
            }
        })

        throw "Não Validado";

    } catch(msg){
        const msgError = document.querySelector("#msgError");
        if(msg == "Validado!"){
            msgError.setAttribute("style","color: #00ff00;");
            msgError.innerHTML = "<spam><strong>Login efetuado com sucesso!</strong></spam>";
        }else{
            msgError.setAttribute("style","color: #ff0000;");
            msgError.innerHTML = "<spam><strong>Usuario ou senha invalidos!</strong></spam>";
        }
    }
});