// /*<button id="meu-btn">CLICK</button>*/
// const btn = document.getElementById("meu-btn");

// //Adicionando um evendo ao elemento
// btn.addEventListener("click",function(){

//     //Função matematica Math
//     //Math.randon = retorna números aleatórios entre 0 e 1. Ex.: 0.35841
//     //Math.floor = função de arrendondamento para baixo
//     //Math.ceil = Função de arrendondamento para cima
//     //Math.round = Função de arrendondamento aleatório

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// } );
// /*
// const titsec = document.getElementById("tit-sec");

// titsec.addEventListener("click",function(){

//     let pixels = 100;
//     pixels = Math.round(Math.random() * 10);

//     this.setAttribute()
    
// } );
// */

// /*
// UTILIZANDO ELEMENTBYID
// const h2Element = document.getElementById("meu-tit");
// h2Element.addEventListener("click", ()=>{
//     h2Element.setAttribute("style","font-size:15px");
// } );
// */

// //UTILIZANDO A CLASSE DO ELEMENTO
// const h2Element = document.querySelector(".tit-sec");
// h2Element.addEventListener("click", ()=>{
//     h2Element.setAttribute("style","font-size:15px");
// } );

//ARRAYS E SEUS M[ETODOS] 

// let frutas = ["maçã","banana","uva","pêra","goiaba","morango","manga","ameixa"];
// console.log(frutas);
// //descobrindo o tamanho pelo length
// console.log(`o Tamanho do array é: ${frutas.length}`);
// //Array é um objeto
// //Adicionado um item ao final do Array com o metodo push
// frutas.push("fruta-conde");
// console.log(frutas);
// console.table(frutas);
// //Adicionando um item no inicio do Array com o metodo unshift
// frutas.unshift("jabuticaba");
// console.log(frutas);

// //removendo o ultimo item com o metodo pop
// frutas.pop();
// console.log(frutas);

// //Remover um iten do inicio do array com o método shift();
// frutas.shift();
// console.log(frutas);

// //Localizando um item com o método indexOf(itenNome);
// //Obs: O indexOf(itenNome), vai retornar o indice onde se encontra o iten buscado.
// //let indice = frutas.indexOf("morango");
// //console.log(indice);
// //console.log(frutas[indice]);

// //Removendo um indice uma determinada quantidade de vezes utilizando o método splice.
// // splice(indice do iten, quantidade de vezes a ser removido);
// //Obs: Para obter o indice utilize o método indexOf(itenNome);
// let indice = frutas.indexOf("banana");
// console.log(indice);
// console.log(`FRUTA QUE ESTAVA NO INDICE ANTES DA REMOÇÃO : ${frutas[indice]}`);
// //Aplicando o splice e usando o indice obtido com indexOf.
// frutas.splice(indice,1);
// console.log(`FRUTA QUE FICOU NO INDICE DEPOIS DA REMOÇÃO : ${frutas[indice]}`);

// //Percorrer array utilizando o ForEach  
// frutas.forEach( (fruta)=>{
//     console.log(`Olha ela : ${fruta}`);
// } );

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log(`ARRAY 1: ${nr1}`);
console.log(`ARRAY 2: ${nr2}`);
//Concatenando arrays
let nr3 = [nr1,nr2];
console.log(`NOVO ARRAY: ${nr3}`);
//Percorrendo o novo array com forEach
nr3.forEach((nr)=>{
    console.log(`ITEM DO NOVO ARRAY: ${nr}`);
});

//Concatenando o array com o operador SPREAD( ... )
nr3 = [...nr1,...nr2];
console.log(`NOVO ARRAY: ${nr3}`);
//Percorrendo o novo array com forEach
nr3.forEach((nr)=>{
    console.log(`ITEM DO NOVO ARRAY COM SPREAD: ${nr}`);
});