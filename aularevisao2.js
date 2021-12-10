//////////////////Revisão

///////////////////////   1

function soma(valor1 = 1, valor2 = 2) {
    return valor1 + valor2;
}

//const total = soma(5);
//console.log(total);

//////////////////////// 2
// + concatenação
// == | === igualdade
/* ! negação */
// && operador lógica e (and)

// 3

let filmes = [
    50,
    35,
    25,
    10,
    60
];

filmes.sort();
//console.log(filmes);

filmes.sort(function(a, b) {
    return b - a;
});

//console.log(filmes);

// 4

for (let i = 10; i > 1; i -= 2) {
    //console.log(i);
}

// 5

const fs = require('fs');

fs.writeFileSync('./arquivo.txt', 'Aula14\n');

const arquivo = fs.readFileSync('./arquivo.txt', 'utf-8');
console.log(arquivo);

fs.appendFileSync('./arquivo.txt', '23/11');

// 7 CLOSURES
// função dentro de função
// função de pai para filho

//filmes.sort().reverse(); // função aninhada
//console.log(filmes);

filmes = [
    'Matrix 4',
    'Venon',
    'O Conde de Monte Cristo',
    'Titanic',
    'Star Wars',
    'John Wick',
    'O Tigre e o Dragão',
    'Alerta Vermelho',
    'Esquadrão 6',
    'G.I. Joe'
];

const filmesMaiusculo = filmes.map(function(item) {
    return item.toUpperCase();
});

// console.log(filmesMaiusculo);

let valor = 11;

if (valor == 10) {
    console.log('O valor é igual a 10');
}

console.log('Abaixo da condição');

// ////////////////////////////////////////////outra aula
///////////////////////////// Objeto
let objeto = {
    nome: 'Rodrigo',
    profissao: 'Analista de sistema',
    exibirNome: function() {
        return `${this.nome} ${this.sobrenome}`;
    },
    sobrenome: 'Sarri',
}

console.log(objeto.exibirNome());

/////////////////////////////////// JSON
{
  "nome": "Rodrigo",
  "Sobrenome": "Sarri"
  "profissao": 'Analista de sistema',
}

//////////////////////////////////// Classe
class Aluno {
    constructor(nome, sobrenome, idade, profissao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibirNome() {
        return this.nome;
    }
    exportarObjeto() {
        return {
            nome: this.nome,
            sobrenome: this.sobrenome,
            idade: this.idade,
            profissao: this.profissao
        }
    }
}

const aluno1 = new Aluno('Rodrigo', 'Sarri', 37, 'Analista de sistema');
const aluno2 = new Aluno('Ana', 'Barbosa', 20, 'Programadora');

console.log(aluno1.exportarObjeto());
console.log(aluno2.exportarObjeto());

//let todosAlunos = [];
//todosAlunos.push(aluno1, aluno2);

//console.log(todosAlunos);

///////////////////////////////////////////////////// ATIVIDADE 2

let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];


///////////////////////////////////////////////// Atividade 1
function converterMaiusculas(lista) {

    lista.forEach(function(item) {
        console.log(item.toUpperCase());
    });

}

// converterMaiusculas(filmes);

////////////////////////////////////////// Atividade 2 e 3

function passagemDeElemento(lista1, lista2) {

    lista2.forEach(function(item) {
        if (item !== 'Fortnite') {
            lista1.push(item.toUpperCase());
        }
    });

    console.log(lista1);

}

let filmesAnimacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

//passagemDeElemento(filmes, filmesAnimacao);

/////////////////////////////////////////////////////////////////// Atividade 4

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]; 
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia, europa) {
    let indice = 0;
    let total  = asia.length || europa.length;

    for (indice; indice < total; indice++) {
        if (asia[indice] === europa[indice]) {
            console.log(`As notas de asia e europa no índice ${indice} são iguais`);
        } else {
            console.log(`As notas de asia e europa no índice ${indice} são diferentes`);
        }
    }
}

// compararClassificacoes(asiaScores, euroScores);

const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(pontuacao) {
    let total = 0;

    pontuacao.forEach(function(item) {
        total+= item;
    });

    return total/pontuacao.length;
}

// console.log(`A média do Joel é ${pontuacaoMedia(participanteA)}`);
// console.log(`A média do Valdir é ${pontuacaoMedia(participanteB)}`);
// console.log(`A média do Marina é ${pontuacaoMedia(participanteC)}`);

// Atividade 3 - Solução A
function pontuacaoMaior(pontuacao) {
    return Math.max.apply(Math, pontuacao);
}

// console.log(pontuacaoMaior(participanteA));

// Atividade 3 - Solução B
function pontuacaoMaiorB(pontuacao) {
    let maior = 0;

    pontuacao.forEach(function(item) {
        if (item > maior) {
            maior = item;
        }
    }); 
    
    return maior;
}

// console.log(`A maior nota do Joel dentre as cinco é ${pontuacaoMaiorB(participanteA)}`);
// console.log(`A maior nota do Valdir dentre as cinco é ${pontuacaoMaiorB(participanteB)}`);
// console.log(`A maior nota do Marina dentre as cinco é ${pontuacaoMaiorB(participanteC)}`);

function campeoes(...participantes) {
    let maiorMedia = 0;
    let maiorNota = 0;
    let participanteMedia;
    let participanteMaiorNota;

    participantes.forEach(function(participante, indice) {

        const mediaParticipante = pontuacaoMedia(participante);

        if (mediaParticipante > maiorMedia) {
            maiorMedia = mediaParticipante;
            participanteMedia = indice;
        }

        const maiorNotaParticipante = pontuacaoMaiorB(participante);

        if (maiorNotaParticipante > maiorNota) {
            maiorNota = maiorNotaParticipante;
            participanteMaiorNota = indice;
        }
    });

    console.log(`O participante (indice: ${participanteMedia}) teve a maior média que foi: ${maiorMedia}`);
    console.log(`O participante (indice: ${participanteMaiorNota}) teve a maior nota que foi ${maiorNota}`);    

}

campeoes(participanteA, participanteB, participanteC);

///////////////////////////// ATIVIDADE numero CELULAR pega uma parte do numero

let celular = '(99) 9.9999-8888';

let pessoas = [
    {
        nome: 'Julia',
        celular: `(**) *.****-${'(99) 9.9999-8888'.substr(-4)}`
    },
    {
        nome: 'Marcos',
        celular: `(**) *.****-${'(99) 9.9999-7777'.substr(-4)}`,
    }
];

//console.log(pessoas);

let nota = 6.9;

if (nota >= 7) {
    console.log('Aprovado');
} else if(nota >= 6) {
    console.log('Recuperação');
} else if (nota > 2 && nota < 6) {
    console.log('Recuração com ressalva');
} else {
    console.log('Reprovado');
}

//////////////////////////////////////////////////////////forEach
let lista = [10, 20, 30];

lista.forEach(function(itemLista) {
    console.log(itemLista);
});


///////////////////////////////////////// while
let indice = 0;

while(indice < 5) {
    console.log(indice);

    indice++;
}

//////////////////////////////////////// do while
let indice = 0;

do {
    console.log(indice);
    indice++;
} while(indice < 5);

///////////////////////////////////////////// FUNÇAO TABUADA
function tabuada(lista) {
    for(let item = 0; item < lista.length; item++) {

        for (let indice = 1; indice <= 10; indice++) {
            console.log(`${lista[item]} x ${indice} = ${lista[item]*indice}`);
        }

        console.log('---------------');

    }
}

tabuada([9, 7, 6, 5, 6, 7]);


function tabuada(lista) {
    console.log(`Itens na lista ${lista}`);
        

    for(let item = 0; item < lista.length; item++) {

        console.log(`Item exibido atualmente: ${lista[item]}`);

    }
}

tabuada([9, 7, 6, 5, 6, 7]);

// função inverter soma matriz

let numbers = [22, 33, 54, 66, 72];

// console.log(numbers[numbers.length]); A resposta da atividade 1 é undefined

let grupoDeAmigos = [
    ["Harry", "Ron", "Hermione"], 
    ["Spiderman", "Hulk", "Ironman"], 
    ["Penélope Glamour", "Pierre Nodoyuna","Patán"] 
];

// console.log(grupoDeAmigos[1][0]); A resposta da atividade 2 é Spiderman

let str = "una string qualquer";

grupoDeAmigos = [ 
    [45, 89, 0], 
    ["Digital", "House", true], 
    ["string", "123","false", 54, true, str]
];

//console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) // A resposta da atividade 3 é una string qualquer

let matriz = [10, 20, 30];
function imprimirInverso(matriz, totalItens) {

    if (totalItens > 0) {
        console.log(matriz[totalItens - 1]);

        matriz.pop();

        imprimirInverso(matriz, matriz.length);
    }

}

// imprimirInverso(matriz, matriz.length);

function inverter(matriz) {
    let novaMatriz = [];

    novaMatriz[0] = matriz[2];
    novaMatriz[1] = matriz[1];
    novaMatriz[2] = matriz[0];

    console.log(novaMatriz);
}

//inverter(matriz);

function somarArray(matriz) {
    console.log(matriz[0] + matriz[1] + matriz[2]);
}

//somarArray([1,2,3]);

// ARRAY

let teste = [
    [
        [10, 50],
    ],
    [
        [20, 100]
    ]
];

////////////////////////////////////////////////////////////////////////////////////////

console.table(teste);

et matriz1 = Array();
let matriz2 = [];

console.log(matriz1);
console.log(matriz2);

let matriz = ['Javascript', 'Banco de dados', 'Java', 'PHP'];

console.log(matriz);
matriz.push('nodeJS', 'postgreSQL', 'go');
console.log(matriz);
matriz.pop();

console.log(matriz);

matriz.unshift('nodeJs');
console.log(matriz);

matriz.shift();
console.log(matriz);

console.log(matriz);
console.log(`Posição 0: ${matriz[0]}`);
console.log(`Posição 1: ${matriz[1]}`);
console.log(`Posição 2: ${matriz[2]}`);
console.log(`Posição 3: ${matriz[3]}`);

matriz.splice(1, 1, 'nodeJS', 'outra coisa', 'mais coisa');
console.log(matriz);
console.log(`Posição 1: ${matriz[1]}`);

console.log('\n----------------------\n');

console.log(matriz.length);

console.log(`Todos os itens do minha matriz:  ${matriz}`);
console.log(`Primeiro item da minha matriz: ${matriz[0]}`);

console.log(`Posição 0: ${matriz[0]}`);
console.log(`Posição 1: ${matriz[1]}`);
console.log(`Posição 2: ${matriz[2]}`);
console.log(`Posição 3: ${matriz[3]}`);
console.log(`Posição 4: ${matriz[4]}`);
console.log(`Posição 5: ${matriz[5]}`);

console.log(`Último item da minha matriz: ${matriz[matriz.length - 1]}`);

let matriz2 = [];
console.log(matriz2.length);

if (matriz2.length > 0) {
    console.log('Tem ao menos um item');
} else {
    console.log('Não tem itens');
}

//////////////////////////////////////////////////////////////////////////////////////
