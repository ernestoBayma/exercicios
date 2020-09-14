/*
    Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
    primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
    Faça a troca sem utilizar uma variável auxiliar.
*/

const trocar = (vetorA = [], vetorB = []) => {
    const len = vetorA.length;
    vetorA.push(vetorB.concat());
    vetorB.splice(0, len, vetorA.splice(0, len));

    //NOTE: Isso é só pra ter um vetor flat
    const currA = vetorA.pop();
    const currB = vetorB.pop();

    currA.map((value) => vetorA.push(value));
    currB.map((value) => vetorB.push(value));
};

const vetorA = [1, 2, 3, 4];
const vetorB = [2, 3, 5, 6];

console.log("--- antes de trocar ---");
console.log("vetor a : ", vetorA);
console.log("vetor b : ", vetorB);

trocar(vetorA, vetorB);

console.log("--- depois de trocar ---");
console.log("vetor a : ", vetorA);
console.log("vetor b : ", vetorB);

trocar(vetorA, vetorB);

console.log("--- depois de trocar de novo ---");
console.log("vetor a : ", vetorA);
console.log("vetor b : ", vetorB);
