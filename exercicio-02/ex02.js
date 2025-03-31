let num1 = parseFloat(prompt("Digite um número:"))
let num2 = parseFloat(prompt("Digite outro número"))
let operacao = prompt("Escolha uma operação matemática \nAdição | + \nSubtração | -\nMultiplicação | *\nDivisão | /")

if (operacao == "+"){
    alert("Resultado da soma: " + (num1 + num2))
}
else if (operacao == "-"){
    alert("Resultado da subtração: " + (num1 - num2))
}
else if (operacao == "*"){
    alert("Resultado da multiplicação: " + (num1 * num2))
}
else if (operacao == "/"){
    alert("Resultado da divisão: " + (num1 / num2))
}
else{
    alert("Você não digitou uma operação válida")
}