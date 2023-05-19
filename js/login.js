//CRIANDO LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Denden da Silva",
        nomeUsuario : "denden",
        senhaUsuario : "123456"
    },
    { 
        nomeCompleto : "Gersu da Silva",
        nomeUsuario : "gege",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "José da Silva",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Paulo das Couves",
        nomeUsuario : "paulo",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Mary Help",
        nomeUsuario : "mary",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Pedro Silva",
        nomeUsuario : "pedro",
        senhaUsuario : "123456"
    }
];

//GUARDAR A LISTA DE OBJETOS NO LOCAL-STORAGE
localStorage.setItem( "listaUser",  JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");

    //CRIANDO O OBJETO USER-LOGADO
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    //CRIANDO O OBJETO USUÁRIO-VALIDADO
    let usuarioValidado = {};

    if(evt.target.id == "btnSubmit"){
        
        try {
          
            //Recuperar a lista de usuários do LocalStorage
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));

            listaDeUsuarios.forEach((usuario)=>{
                
                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                    usuarioValidado = usuario;
                    throw "VALIDADO";
                }
            });
            
            throw "NÃO VALIDADO";

        } catch (msg) {
            const msgError = document.querySelector("#msgError");
            if(msg == "VALIDADO"){
                msgError.setAttribute("style","color:#00ff00;");
                msgError.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} efetuou o login com sucesso!</strong></span>`;
                
                //adicionado o objeto usuario-validado
                localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));

                //Criando token de autenticação
                let token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
                //adicionando o token no localStorage
                localStorage.setItem("user-token", token);


                //Redirect : Espera 3 segundos antes de redirecionar
                setTimeout( function(){
                    window.location.href = "../pages/sucesso.html";
                }, 3000);

            }else{
                msgError.setAttribute("style","color:#ff0000;");
                msgError.innerHTML = "<span><strong>Usuário ou senha inválidos!</strong></span>";
            }
        }

//DESAFIO:
//Troque o ícone do olho aberto assim que o usuário clicar para ver a senha pelo ícone de olho cortado.

    }else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){
        //Mostrando a senha!
        if(inputPass.getAttribute("type") == "password"){
            evt.target.setAttribute("class","fa fa-eye-slash");
            inputPass.setAttribute("type","text");
        }else{
        //Ocultando a senha!
        evt.target.setAttribute("class","fa fa-eye");
            inputPass.setAttribute("type","password");
        }
        
    }
});