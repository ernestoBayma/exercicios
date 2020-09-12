/*
    Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
    aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
    aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
    "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const mediaPonderada = (cod = -1, nota1 = 0, nota2 = 0, nota3 = 0) => {
    const media =
        [nota1, nota2, nota3]
            .sort((n1, n2) => (n1 > n2 ? 1 : -1))
            //! NOTE: Isso pode ser ruim pra performance
            .map((nota, index) =>
                index === 2 ? nota * 4 : nota * 3
            )
            .reduce((add, nota) => add + nota) / 10;

    const resultado = media >= 5 ? "APROVADO" : "REPROVADO";
    console.log(
        `código do aluno ${cod} nota 1: ${nota1} nota 2: ${nota2} nota 3: ${nota3} ${resultado}`
    );
};

mediaPonderada(10, 7, 2, 4);
mediaPonderada(183, 4, 2, 7);
mediaPonderada(12, 8, 5, 8);
