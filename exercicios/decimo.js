/*
    Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
    ou false.
*/
const divisivelPor3 = (numero) => numero % 3 === 0

console.log('5 é divisível por 3? ', divisivelPor3(5))
console.log('15 é divisível por 3? ', divisivelPor3(15))
console.log('3 é divisível por 3?', divisivelPor3(3))
console.log('2 é divisível por 3? ', divisivelPor3(2))
console.log('1 é divisível por 3? ', divisivelPor3(1))
console.log('0 é divisível por 3? ', divisivelPor3(0))
console.log('-3 é divisível por 3? ', divisivelPor3(-3))