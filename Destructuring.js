const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

// const numeros = [numerosPares, numerosImpares]  
// Resultado: [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]

const numeros = [...numerosPares, ...numerosImpares] // extraindo os dados do array

console.log(...numeros)

// const num1 = 1
// const nume2 = 2
// É igual a =

const [num3, num4] = [1,2]

console.log(num3,num4)

const [num1, num2, ...outrosNumeros] = [1,2,3,4,5,6,7]

console.log(...outrosNumeros)

const [nome1 = 'Ju'] = [1]

console.log(nome1)

const [nome2 = 'Ju'] = []

console.log(nome2)

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {...pessoa, telefone: 1234453434}

function impremeDados(dados){
    const {nome, idade} = dados
    console.log(nome, idade)
}

function impremeDados ({nome, idade}) {
    console.log(nome,idade)
}