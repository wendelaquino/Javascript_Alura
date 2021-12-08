const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]

// const numeros = [numerosPares, numerosImpares]  
// Resultado: [ [ 2, 4, 6 ], [ 1, 3, 5 ] ]

const numeros = [...numerosPares, ...numerosImpares] // extraindo os dados do array

// const num1 = 1
// const nume2 = 2
// É igual a =
const num1, num2 = [1,2]

console.log(numeros)