const numOriginal = [1, 2, 3, 4]
const stringOriginal = ['a', 'b', 'c', 'd']
const numStringBoolOriginal = [9, 'horus', true ]

const arrayTresVariaveis = () => {
console.log(`Array número: ${numOriginal}
Array string: ${stringOriginal}
Array número, string e booleano: ${numStringBoolOriginal}`)
}
arrayTresVariaveis()

// a) Adiciona um item de valor número no inicio do array
const numCopia = numOriginal.slice()
numCopia.unshift(777)
console.log(`Array original: ${numOriginal}
Array copia: ${numCopia}`)

// b) Remove o ultimo item do segundo array
const stringCopia = stringOriginal.slice()
stringCopia.pop()
console.log(`Array original: ${stringOriginal}
Array copia: ${stringCopia}`)

// c) Remove o segundo item do terceiro array.
const numStringBoolCopia = numStringBoolOriginal.slice()
numStringBoolCopia.splice(2,1)
console.log(`Array original: ${numStringBoolOriginal}
Array copia: ${numStringBoolCopia}`)