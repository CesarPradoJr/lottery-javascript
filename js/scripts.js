function sortearJogo(){

    document.getElementById("resultados").innerHTML = '';

    const tipoJogo = document.getElementById("tipoJogo").value;

    const quantidadeJogos = parseInt(document.getElementById("quantidadeJogos").value, 10);

    if(isNaN(quantidadeJogos) || quantidadeJogos <1) {
        alert("Por favor, insira uma quantidade válida de jogos.")
        return;
    }

    let quantidadeNumeros;
    if (tipoJogo === "mega") {
        quantidadeNumeros = 6;
    } else if (tipoJogo === "quina") {
        quantidadeNumeros = 5;
    } else {
        console.error("Tipo de jogo não reconhecido");
        return;
    }

    for (let i = 0; i < quantidadeJogos; i++){
    const numerosSorteados = new Set();
    while (numerosSorteados.size < quantidadeNumeros) {
        const numero = Math.floor(Math.random() * 60) + 1;
        numerosSorteados.add(numero);
    }
    const numeroArray = Array.from(numerosSorteados);
    document.getElementById("resultados").innerHTML += `Jogo ${i + 1} (${tipoJogo}): ${numeroArray.join(", ")}<br>`;
}
}