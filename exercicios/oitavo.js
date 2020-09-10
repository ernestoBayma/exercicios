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
