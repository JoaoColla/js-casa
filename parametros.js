//parametros de uma função

function soma(num1, num2){
    return num1 + num2
}

//Aplicando/chamando a função com valores

// console.log(soma(2, 2))
// console.log(soma(432, 2234567))
// console.log(soma(-1000000, 2222))


// Teste boombastic

function idadeFilme(nome = 'Usuário', idade = 'idade indefinida em') {
    if (idade >= 18 || null) {
        return `Olá ${nome}, você poderá assistir Premonição e Minecraft`;
    } else {
        return `Olá ${nome}, infelizmente por você ter ${idade} anos, você poderá optar apenas por Minecraft`;
    }
}

console.log(idadeFilme());