/*
    As regras para o cálculo dos anos bissextos são as seguintes:
    De 4 em 4 anos é ano bissexto;
    De 100 em 100 anos não é ano bissexto;
    De 400 em 400 anos é ano bissexto;
    Prevalecem as últimas regras sobre as primeiras.
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
    mensagem e retornando true ou false
*/

const anoBissexto = (ano) => 
    ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0


console.log('1600 é um ano bissexto ?', anoBissexto(1600))
console.log('2016 é um ano bissexto ? ', anoBissexto(2016))
console.log('2012 é um ano bissexto ? ', anoBissexto(2012))
console.log('1900 é um ano bissexto ? ', anoBissexto(1900))
console.log('2056 é um ano bissexto ? ', anoBissexto(2056))
console.log('2052 é um ano bissexto ? ', anoBissexto(2052))