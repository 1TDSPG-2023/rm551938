/*<button id="meu-btn">CLICK</button>*/
const btn = document.getElementById("meu-btn");

//Adicionando um evendo ao elemento
btn.addEventListener("click",function(){

    //Função matematica Math
    //Math.randon = retorna números aleatórios entre 0 e 1. Ex.: 0.35841
    //Math.floor = função de arrendondamento para baixo
    //Math.ceil = Função de arrendondamento para cima
    //Math.round = Função de arrendondamento aleatório

    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

} );
/*
const titsec = document.getElementById("tit-sec");

titsec.addEventListener("click",function(){

    let pixels = 100;
    pixels = Math.round(Math.random() * 10);

    this.setAttribute()
    
} );
*/

/*
UTILIZANDO ELEMENTBYID
const h2Element = document.getElementById("meu-tit");
h2Element.addEventListener("click", ()=>{
    h2Element.setAttribute("style","font-size:15px");
} );
*/

//UTILIZANDO A CLASSE DO ELEMENTO
const h2Element = document.querySelector(".tit-sec");
h2Element.addEventListener("click", ()=>{
    h2Element.setAttribute("style","font-size:15px");
} );

