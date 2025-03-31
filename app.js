console.log ("Luiz")
console.log (21)
 
// formas de criar variaveis
// var, let, const
 
let nome = "Luiz"
let idade = "21"
console.log (nome, idade)
nome = "Luiz Lacerda"
console.log (nome)
 
let nomeCompleto = ("")
nomeCompleto = prompt ("informe seu nome completo:")
console.log (nomeCompleto)
 
//alert("Seja Bem Vindo(a) " + nomeCompleto)
 
//document.write("Seja Bem Vindo(a) " + nomeCompleto)
let cor = prompt ("Informe uma cor: \n 1-azul \n 2-Vermelho \n 3-preto \n 4-Verde \n 5-Rosa \n 6-Laranja")
 
 
let corDeFundo = null
 
if(cor == "1"){
    corDeFundo = "blue"
}
else if(cor =="2"){
    corDeFundo = "red"
}
else if(cor == "3"){
    corDeFundo = "black"
}
else if(cor =="4"){
    corDeFundo = "green"
}
else if(cor == "5"){
    corDeFundo = "pink"
}
else if(cor == "6"){
    corDeFundo = "orange"
}
else{
    corDeFundo = "yellow"
}
 
 
 
document.body.style.backgroundColor = corDeFundo
 
 
 