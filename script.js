function mostrarLucky() {
    let elixir = prompt("1 - Elixir | 2 - Sem Elixir");
    let drop = parseFloat(prompt("Digite a porcentagem de drop"));

    let luckys = [0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1.0, 1.5];

    let resultado = "";

    for (let i = 0; i < luckys.length; i++) {
        let lucky = i + 1;
        let valor = (drop * (1 + luckys[i])).toFixed(2);

        resultado += `Lucky ${lucky}: ${valor}%<br>`;

        if (elixir === "1") {
            resultado += `Lucky ${lucky} +20%:
            ${(drop * (1 + luckys[i] + 0.2)).toFixed(2)}%<br>`;

            resultado += `Lucky ${lucky} +80%:
            ${(drop * (1 + luckys[i] + 0.8)).toFixed(2)}%<br><br>`;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function mediaBalls() {
    let elemental = 250;
    let ub = 130;

    let precoPoke = parseInt(prompt("Preço NPC do Pokémon"));
    let precoElemental = parseInt(prompt("Preço Ball Elemental"));

    let mediaElemental = 2 * (precoPoke / elemental);
    let mediaUB = 2 * (precoPoke / ub);

    document.getElementById("resultado").innerHTML =
        `Você precisará de aproximadamente
        ${Math.ceil(mediaUB)} UB/PB
        (${Math.ceil((mediaUB * ub)/1000)}k)
        ou ${Math.ceil(mediaElemental)} Balls Elementais
        (${Math.ceil((mediaElemental * precoElemental)/1000)}k)`;
}
