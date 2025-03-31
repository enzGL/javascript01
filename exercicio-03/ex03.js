let nome = prompt("Escreva seu nome: ")
let idade = parseInt(prompt("Digite sua idade"))

if (idade < 18){
    alert("Olá " + nome +  " você ainda não pode fazer aulas de direção")
}
else if (idade >= 18){
    alert("Olá " + nome + ", seja bem vindo(a) a nossa escola! Já fez sua matrícula?")
}