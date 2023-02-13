function numStrBool(){
    const num = [1,2,3,4]
    const string = ['a','b','c','d']
    const booleanos = [1,'a', 3 === 3]
    
    // Imprimi a quantidade de itens de cada array
    console.log(`Qtd de itens do arrays de números: ${num.length}
Qtd de itens do arrays de strings: ${string.length}
Qtd de itens do arrays de booleanos: ${booleanos.length}`)

    // Imprimi o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
    console.log(`Primeiro item do primeiro array: ${num[0]}
Segundo item do segundo array: ${string[1]}
Terceiro item do terceiro array ${booleanos[2]}`)

    // Verifica itens no primeiro e no terceiro array
    console.log(`Tem o número "3" incluído no primeiro array? ${num.includes(3)}
Tem a letra "c" incluída no terceiro array? ${booleanos.includes('c')}`)
}
numStrBool()