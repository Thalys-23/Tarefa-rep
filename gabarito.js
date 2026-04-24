/* Agora o professor gostaria de ter algumas estatísticas das respostas, para isso calcule quantos 
% de acerto cada questão teve, assim será possível saber quais questões eram mais difíceis e 
quais eram mais fáceis. 
Seu programa deve escrever uma questão por linha e exibir o total de acertos vs participantes 
e a porcentagem associada. Exemplo: 
1º Questão: 7/11 (64%) 
(O programa deve funcionar para qualquer lista que for provida, não necessariamente a exibida 
acima) */

import { createInterface } from 'node:readline/promises';

// Cria uma interface de leitura para o terminal
const term = createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});

// Exemplo de uso
const gabarito = await term.question("Qual o gabarito da prova? ");
const nomalun = await term.question("Quais os nomes dos alunos?(separados por ',') ");
const respalun = await term.question("Quais as respostas dos alunos?(separadas por ',')");

let nomes = nomalun.split(',');
let respostas = respalun.split (',');
let gab = [];
let nom = [];
let resp = [];

for(let i = 0; i < gabarito.length; i += 1){
    gab.push(gabarito[i]);
}

for(let j = 0; j < nomes.length; j += 1){
    nom.push(nomes[j].trim());
}

for(let k = 0; k < nomes.length; k += 1){
    resp.push(respostas[k].trim());
}
console.log(gab, nom, resp);

// Após o uso, feche a interface de leitura
term.close();

console.log(nomes);