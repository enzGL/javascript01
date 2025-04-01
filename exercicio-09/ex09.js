let salario = parseFloat(prompt("Digite o salário: "))
let porcentagem = parseFloat(prompt("Digite a porcentagem a ser reajustada: "))

let reajuste = salario * (porcentagem / 100)
let novoSalario = salario + reajuste

alert("O salário reajustado é " + novoSalario)