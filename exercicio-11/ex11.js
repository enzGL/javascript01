let nome = prompt("Digite o nome do aluno: ")
let nota1 = parseFloat(prompt("Digite a 1 nota: "))
let nota2 = parseFloat(prompt("Digite a 2 nota: "))
let nota3 = parseFloat(prompt("Digite a 3 nota: "))
let nota4 = parseFloat(prompt("Digite a 4 nota: "))

let resultado = (nota1 + nota2 + nota3 + nota4) / 4

if(resultado > 4){
    alert("O aluno" + nome + " foi aprovado")
}
else if (resultado < 5){
    alert("O aluno" + nome + "foi reprovado")
}