const notas = [10, 6.5, 8, 9.5 , 7.5]

const notasAtualizadas = notas.map(nota => 
   nota >= 9.1 ? nota = 10 : ++nota)

console.log(notasAtualizadas)
