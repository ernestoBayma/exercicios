/*
    Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
    registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
    mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
    pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
    vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
    jogo. (Número do pior jogo).
    Obs.: O primeiro jogo não conta como novo recorde do melhor.
    Exemplo:
    String: “10 20 20 8 25 3 0 30 1”
    Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
    aconteceu no sétimo jogo.)
*/

const recordeMelhorPior = (string = "") => {
    if (string.length > 0) {
        const scores = string.split(" ").map((str) => parseInt(str));

        const scoresLen = scores.length;
        const firstScore = scores[0];

        //*  NOTE Checks if the array have different elements
        if (scores.findIndex((value) => value != firstScore) != -1) {
            let recordsBeat = 0;
            let record = {
                biggest: firstScore,
                worst: { score: firstScore, index: 0 },
            };

            for (let i = 1; i <= scoresLen; i++) {
                if (scores[i] > record.biggest) {
                    record.biggest = scores[i];
                    recordsBeat++;
                } else if (scores[i] < record.worst.score) {
                    record.worst.score = scores[i];
                    record.worst.index = i;
                }
            }

            //* NOTE Covert index to game number 
            const index = record.worst.index + 1;
            return [recordsBeat, index];
        }
    }
    return [0, 0];
};

module.exports = recordeMelhorPior;
