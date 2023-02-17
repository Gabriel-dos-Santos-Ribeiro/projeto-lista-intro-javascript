// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt('Diga qual é a Altura do rêtangulo ?'))
const largura = Number(prompt('Dgia qual é a largura do retângungulo'))
const retangulo = altura * largura

console.log(retangulo)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt('Em que ano estamos ?'))
const anoNasci = Number(prompt(' Em qual ano você nasceu ?'))
const idade = anoAtual - anoNasci


console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc =  peso / (altura * altura)

  return imc
}
calculaIMC(80, 1.70)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nomeUser = prompt('Qual é o seu nome ?')
const idadeUser = prompt('Qual a sua idade ?')
const seuEmail = prompt('digite seu e-mail :')

console.log(`Meu nome é ${nomeUser}, tenho ${idadeUser} anos, e o meu email é ${seuEmail}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt('Qual sua 1º cor favorita ?')
const cor2 = prompt('Qual a sua 2º cor favorita ?')
const cor3 = prompt('Qual a sua 3º cor favorita ?')

const cores = [cor1, cor2, cor3]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const transformandoEmMaiuscula = string.toUpperCase()

return transformandoEmMaiuscula
}

retornaStringEmMaiuscula('oi')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const semPrejuizo = custo / valorIngresso
return semPrejuizo
}
calculaIngressosEspetaculo(2000, 100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanho1 = string1.length
const tamanho2 = string2.length

const saoDoMesmoTamanho = tamanho1 === tamanho2

return saoDoMesmoTamanho
}

checaStringsMesmoTamanho

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const retornaPrimeiro = array[0]
return retornaPrimeiro
}
retornaPrimeiroElemento('ola', 'abc')

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const retornaUltimo = array.lenght[-1]

return retornaUltimo
}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const minhaCopiaArray = array
const guardaPrimeiroValor = minhaCopiaArray[0]
const guardaSegundoValor = minhaCopiaArray[array.length -1]

minhaCopiaArray.pop()
minhaCopiaArray.shift()

minhaCopiaArray.unshift(guardaSegundoValor)
minhaCopiaArray.push(guardaPrimeiroValor)


const inverteIndices = minhaCopiaArray





return inverteIndices


}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const verificaIgualdade =  string1.toLowerCase() === string2.toLowerCase()

  return verificaIgualdade
}

checaIgualdadeDesconsiderandoCase('ola', 'olA')
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual2 = Number(prompt('Digite em que ano estamos :'))
const anoNasci2 = Number(prompt('Em qual ano você nasceu ?'))
const anoEmitidoRg = Number(prompt('Em que ano você emitiu sua carteira de identidade ?'))
const  idade = anoAtual2 - anoNasci2
const testeAnoeRg = anoAtual2 - anoEmitidoRg

if (idade <= 20 && testeAnoeRg < 5) {
  console.log(false)
} else if (idade > 20 && idade < 50 && teste < 10){
  console.log(false)
} else if (idade > 50 && testeAnoeRg < 15 ){
  console.log(false)
} else {
  console.log(true)
}

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissextoPrimeiro = (ano % 400  === 0 )
  const anoBissextoSegundo = (ano % 4 === 0) && !(ano % 100 === 0 && ano % 400 !== 0)

  return (anoBissextoPrimeiro || anoBissextoSegundo)

}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const ehMaiordeIdade = prompt('Você é maior de 18 anos ?')
  const ensinoMedio = prompt('Você concluiu o ensino médio ?')
  const disponibilidadeHorario = prompt('Você tem disponibilidade de horário ?')

  const condicao = (ehMaiordeIdade === 'sim') && (ensinoMedio === 'sim') && (disponibilidadeHorario === 'sim')

  console.log(condicao)
}