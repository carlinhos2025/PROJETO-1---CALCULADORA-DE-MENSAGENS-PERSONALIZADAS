// VARIAVEIS
let nome = "João"
let idade = 25 
let cidade = "São paulo"
let profissao = "Desenvolvimento web"
let anoAtual = 2025 
// CALCULO DE ANO DE NACIMENTO
let anoNacimento = anoAtual - idade
// CALCULOS DO SALARIO
let salario = 2500
let bonus = 400

let salarioTotal = salario + bonus

let totalnoAno = salarioTotal * 12
let anoDobrado = salarioTotal * 12 * 2

// SAIDA NO CONSOLE

alert(`========= RELATÓRIO DE USUARIO =========
Nome: ${nome}
Idade: ${idade}
Ano de Nacimento: ${anoNacimento}
Cidade: ${cidade}
Profissão: ${profissao}

Salario base: R$${salario}
Bonus: R$${bonus}
Total no mês: R$${salarioTotal}
Total no ano: R$${totalnoAno}
Total no ano (dobrado): R$${anoDobrado}
=========================================`)