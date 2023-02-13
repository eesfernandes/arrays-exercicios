// Adiciona um item numero ao inicio do primeiro array
console.log('Adiciona um item (5) número ao inicio do array')
const primeiroArrayOriginal = [1,2,3,4]
primeiroArrayOriginal.unshift(5)
const primeiroArrayCopia = [1,2,3,4]
console.log(`Array original: ${primeiroArrayOriginal}
Array copia: ${primeiroArrayCopia}`)
console.log('----------------------------------------------------')

// Remove o último item do segundo array.
console.log('Remove o último item (1) do array')
const segundoArrayOriginal = [4,3,2,1]
segundoArrayOriginal.pop()
const segundoArrayCopia = [4,3,2,1]
console.log(`Array original: ${segundoArrayOriginal}
Array copia: ${segundoArrayCopia}`)
console.log('----------------------------------------------------')

// Remove o segundo item do terceiro array
console.log('Remove o segundo item (b) do array')
const terceiroArrayOriginal = ['a','b','c','d']
terceiroArrayOriginal.splice(1, 1)
const terceiroArrayCopia = ['a','b','c','d']
console.log(`Array original: ${terceiroArrayOriginal}
Array copia: ${terceiroArrayCopia}`)
console.log('----------------------------------------------------')
