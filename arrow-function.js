// function apresentar(nome) {
//     return `meu nome é ${nome}`;
// }

// const apresentarArrow = nome => `meu nome é ${nome}`;

// const soma = (num1,num2) => num1 + num2;

// const somaNumerosPequenos = (num1,num2) => {
// 	if (num1||num2 > 10) {
// 		return "Somente numeros de 1 a 9"
// 	} else{
// 		return num1 + num2;
// 	}
// }	

const calculaMedia = (numeros = []) => {
	let soma = Number;
	let media = Number;
	for (let i = 0; i < numeros.length - 1; i++) {
		soma += numeros[i];
	}
	media = soma / numeros.length;
	console.log(media);
}
let listaMedia = [8,8,8,9,10,5]

listaMedia.push(10,2,3)
listaMedia.pop()
listaMedia.
console.log(listaMedia);

const listaDeChamada = ['João', 'Ana', 'Caio']