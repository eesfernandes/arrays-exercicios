    const num = [1, 2, 3, 4]
    const string = ['a', 'b', 'c', 'd']
    const numStringBool = [9, 'horus', true ]

const arrayTresVariaveis = () => {
    console.log(`Array número: ${num}
Array string: ${string}
Array número, string e booleano: ${numStringBool}`)
}
arrayTresVariaveis()

// a) Imprimir a quantidade de cada array
const qtdNum = num.length
console.log(`Qtd de itens array número: ${qtdNum}`)

// b) Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
const itemPrimeiroArray = num[0]
const itemSegundoArray = string[1]
const itemTerceiroArray = numStringBool[2]
console.log(`Primeiro item do primeiro array: ${itemPrimeiroArray}
Segundo item do segundo array: ${itemSegundoArray}
Terceiro item do terceiro array: ${itemTerceiroArray}`)

// c) Verifica se um item está incluído no primeiro array e depois no terceiro array
const temUm = num.includes(1)
const temHorus = numStringBool.includes('horus')
console.log(`Tem "1" no primeiro array: ${temUm}
Tem a palavra "horus" no terceiro array: ${temHorus}`)