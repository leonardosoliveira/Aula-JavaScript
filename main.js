/*
var nome = "Leonardo Oliveira";

alert("Hello world " + nome);


var lista = ["Maça", "Pera", "Uva", "Laranja"];

console.log(lista);
console.log(lista.length);

//Um dicionario de fruta
var fruta = {nome:"Laranja", cor:"Laranja"};

//Um array de dicionario de futas
var frutas = [{nome:"Amora", cor:"Violeta"}, {nome:"Melancia", cor:"Verde"}, {nome:"Banana", cor:"Amarela"}];


console.log(fruta);
console.log(frutas);

alert(frutas[0].nome);
*/

/*var idade = prompt("Qual é a sua idade ?");

if(idade < 18){
    alert("Não é maior de idade");
}else{
    alert("Possui 18 anos ou mais");
}*/

/*
var count = 0; 
while(count<=5){
    console.log(count);
    count++;
}*/


/*var diaAtual = new Date;
console.log(diaAtual);

alert(diaAtual.getDay());


function soma(n1, n2){
    return n1 + n2;
}

var n1 = parseInt(prompt("Digite o primeiro numero"));
var n2 = parseInt(prompt("Digite o segundo numero"));

alert(soma(n1,n2));


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/


function botao(){
    document.getElementById("clicou").innerHTML = "<b> Obrigado </b>";
}

function redirecionar(){
    window.open("https://www.w3schools.com/sql/sql_ref_sqlserver.asp");
    window.location.href("https://www.w3schools.com/sql/sql_ref_sqlserver.asp");
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passou o mouse seu baitola";
    elemento.innerHTML = "Passou o mouse ";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse de novo";
    elemento.innerHTML = "Passe o mouse de novo";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}