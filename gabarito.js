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
const nomAlun = await term.question("Quais os nomes dos alunos?(separados por ',') ");
const respAlun = await term.question("Quais as respostas dos alunos?(separadas por ',')");

let nomes = nomAlun.split(',');
let respostas = respAlun.split (',');
let gab = [];
let nom = [];
let resp = [];

for(let j = 0; j < nomes.length; j += 1){
    nom.push(nomes[j].trim());
}

for(let k = 0; k < nomes.length; k += 1){
    resp.push(respostas[k].trim());
}

for(let l = 0; l < nom.length; l += 1){
        if(nom[l] && resp[l]){
        let acertos = [];
        acertos.push(resp[l]);
        }
         for(let m = 0; m < gab.length; m += 1){
            if(gabarito[m] == acertos[m]){ 
                total.push(m + 1)
            }     
}
 console.log(`O aluno(a) ${nom[l]} acertou a questões ${total}`);
}
// Após o uso, feche a interface de leitura
console.log(gabarito, nom, resp);
term.close();