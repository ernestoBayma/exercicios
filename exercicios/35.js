/*
    Crie dois vetores chamados vetorPilha e vetorAdiciona. 
    Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. 
    Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] 
    ao vetor pilha e mostrá-los no console. 
    É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
    final das operações imprima os vetores no console.
*/

const adicionarNaPilha = (vetorPilha = [], vetorAdiciona = []) => {
    for (const valor of vetorAdiciona) {
        vetorPilha.push(valor);
    }
    return vetorPilha;
};

const adicionarNaPilha2 = (vetorPilha = [], vetorAdiciona = []) =>
    vetorPilha.concat(vetorAdiciona).flat();


console.log(adicionarNaPilha([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
console.log(adicionarNaPilha2([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))