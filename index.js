let vitoria = 1
let derrota = 0
let rank 
let res = saldo(vitoria,derrota)

function saldo(vitoria,derrota){
    let saldoVitoria = vitoria - derrota
    return saldoVitoria
}

if(res <= 10){
    rank = "Ferro"
} else if(res >= 11 && res <= 20){
    rank = "Bronze"
} else if(res >= 21 && res <= 50){
    rank = "Prata"
} else if(res >= 51 && res <= 80){
    rank = "Ouro"
} else if(res >= 81 && res <= 90){
    rank = "Diamante"
} else if(res >= 91 && res <= 100){
    rank = "Lendario"
} else if(res >= 101){
    rank = "Imortal"
}

console.log("O Herói tem de saldo de " + res + " está no nível de " + rank)