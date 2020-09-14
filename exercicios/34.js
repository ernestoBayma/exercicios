/*
    Construa uma função que receberá duas Strings de tamanhos variados e que 
    retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) 
    estejam contidos em ambas palavras.
*/


const temOMesmoConteudo = (p1 = "", p2 = "") =>
    p1.length === p2.length
        ? p1.toLowerCase().split("").sort().join("") ===
          p2.toLowerCase().split("").sort().join("")
        : false;

console.log(temOMesmoConteudo("abc", "cba"));
console.log(temOMesmoConteudo());
console.log(temOMesmoConteudo('cbaww', 'abaww'));
