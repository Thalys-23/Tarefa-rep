/* Agora o professor gostaria de ter algumas estatísticas das respostas, para isso calcule quantos 
% de acerto cada questão teve, assim será possível saber quais questões eram mais difíceis e 
quais eram mais fáceis. 
Seu programa deve escrever uma questão por linha e exibir o total de acertos vs participantes 
e a porcentagem associada. Exemplo: 
1º Questão: 7/11 (64%) 
(O programa deve funcionar para qualquer lista que for provida, não necessariamente a exibida 
acima) */

import { createInterface } from 'node:readline/promises';

const term = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada
const gabaritoStr = await term.question("Qual o gabarito da prova? (separado por ',')\nR: ");
const nomAlun = await term.question("Quais os nomes dos alunos?(separados por ',')\nR: ");
const respAlunStr = await term.question("Quais as respostas dos alunos?(cada aluno separado por ';', e dentro por ',')\nR: ");

let gabarito = gabaritoStr.split(',');
for (let i = 0; i < gabarito.length; i++) {
    gabarito[i] = gabarito[i].trim().toUpperCase();
}

let nomes = nomAlun.split(',');
for (let i = 0; i < nomes.length; i++) {
    nomes[i] = nomes[i].trim();
}

let respostasAlunosStr = respAlunStr.split(';');
let respostasAlunos = [];
for (let i = 0; i < respostasAlunosStr.length; i++) {
    let respostas = respostasAlunosStr[i].split(',');
    for (let j = 0; j < respostas.length; j++) {
        respostas[j] = respostas[j].trim().toUpperCase();
    }
    respostasAlunos.push(respostas);
}

const qtdAlunos = nomes.length;
const qtdQuestoes = gabarito.length;

// Contagem de acertos por questão
let acertosPorQuestao = [];
for (let i = 0; i < qtdQuestoes; i++) {
    acertosPorQuestao[i] = 0;
}

for (let i = 0; i < qtdAlunos; i++) {
    for (let q = 0; q < qtdQuestoes; q++) {
        if (respostasAlunos[i][q] === gabarito[q]) {
            acertosPorQuestao[q] += 1;
        }
    }
}

// Estatísticas por questão
console.log("\n=== Estatísticas por Questão ===");
for (let q = 0; q < qtdQuestoes; q++) {
    let acertos = acertosPorQuestao[q];
    let porcentagem = Math.round((acertos / qtdAlunos) * 100);
    console.log(`${q + 1}ª Questão: ${acertos}/${qtdAlunos} (${porcentagem}%)`);
}

// Estatísticas por aluno
console.log("\n=== Estatísticas por Aluno ===");
for (let i = 0; i < qtdAlunos; i++) {
    let acertosAluno = [];
    let totalAcertos = 0;

    for (let q = 0; q < qtdQuestoes; q++) {
        if (respostasAlunos[i][q] === gabarito[q]) {
            acertosAluno.push(q + 1);
            totalAcertos++;
        }
    }

    let porcentagemAluno = Math.round((totalAcertos / qtdQuestoes) * 100);
    console.log(`${nomes[i]} acertou as questões ${acertosAluno.join(', ') || 'nenhuma'} → ${totalAcertos}/${qtdQuestoes} (${porcentagemAluno}%)`);
}

term.close();
