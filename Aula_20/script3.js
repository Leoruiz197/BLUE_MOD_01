var prompt = require('prompt-sync')();

let rodadas = 0;
let qtdJogadores = 0;
const jogadores = [];
let replay = true;

//FUNÇÃO PARA RETARDAR A CPU
function sleep(segundos = 1) {
    segundos = segundos * 1000;
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > segundos) {
            break;
        }
    }
}

// FUNÇÃO PARA RANDOMIZAR
function random() {
    let max = Math.floor(6);
    const min = Math.ceil(1);
    let random = Math.random() * (max - min + 1) + min;
    random = parseInt(random);
    return random;
}

// FUNÇÃO PARA CRIAR JOGADORES
function criarJogadores(qtd) {
    for (let i = 0; i < qtd; i++) {
        let nome = prompt(`Qual o nome do ${i + 1}º jogador: `);
        let dado = 0;
        let gain = 0;

        let jogador = {
            nome: nome,
            dado: dado,
            gain: gain,
        };
        jogadores.push(jogador);
    }
    return jogadores;
}

// FUNÇÃO PARA SABER O VENCEDOR
function gainJogador() {
    let maior = 0;
    for (const j of jogadores) {
        if (j.dado > maior) {
            maior = j.dado;
        }
    }

    for (const j of jogadores) {
        if (j.dado == maior) {
            j.gain++;
            break;
        }
    }
    jogadores.sort(function (a, b) {
        if (a.dado > b.dado) return -1;
        if (a.dado < b.dado) return 1;
        return 0;
    });
}

//ESCORPO DO GAME
while (replay) {
    console.log('---------------------------------------------');
    qtdJogadores = +prompt('Quantos jogadores irão jogar: ');
    rodadas = +prompt('Quantos rodadas vocês querem jogar: ');
    criarJogadores(qtdJogadores);

    //LAÇO PARA SABER QUEM GANHOU AS RODADAS
    do {
        console.log('---------------------------------------------');
        for (const j of jogadores) {
            j.dado = random();
        }
        gainJogador();
        for (const j of jogadores) {
            sleep(1);
            console.log(`${j.nome} tirou ${j.dado} no dado`);
        }
        console.log();
        sleep(2);
        console.log(
            `O ganhador da rodada foi ${jogadores[0].nome} com ${jogadores[0].dado}`,
        );
        rodadas--;
    } while (rodadas > 0);

    //ORDENAR O VENCEDOR
    jogadores.sort(function (a, b) {
        if (a.gain > b.gain) return -1;
        if (a.gain < b.gain) return 1;
        return 0;
    });
    console.log('---------------------------------------------');
    sleep(3);
    for (const j of jogadores) {
        console.log(`${j.nome} ${j.gain}`);
    }
    console.log(`O vencedor foi ${jogadores[0].nome} com ${jogadores[0].gain}`);

    //FINAL DO GAME
    console.log('\nDeseja jogar novamente?');
    console.log('"s" para SIM e "n" para NÃO');
    const resp = prompt().toUpperCase().trim();
    if (resp == 'N') {
        replay = false;
    }
    console.clear();
}