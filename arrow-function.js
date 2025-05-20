// function apresentação(nome){
//     `Ola ${nome}`
// }



//arrow function
const apresentarArrow = nome => `Ola ${nome}`;

const soma = (num1, num2) => num1 + num2;

// arrow com mais de uma linha de cod.
const somaPequenos = (num1, num2) => {
    if (num1 > 9 || num2 > 9){
        return 'Use apenas numeros de 1 a 9'
    } else{
        return num1 + num2;
    }
}