function trocarAba(event, id) {

    // Remove active de todas as abas
    document.querySelectorAll(".content")
        .forEach(c => c.classList.remove("active"));

    document.querySelectorAll(".tab-btn")
        .forEach(b => b.classList.remove("active"));

    // Ativa aba clicada
    document.getElementById(id)
        .classList.add("active");

    event.target.classList.add("active");
}

function mostrarLucky() {

    const elixir =
        document.getElementById("elixir").value;

    const drop =
        parseFloat(document.getElementById("dropInput").value);

    // Validação
    if (isNaN(drop) || drop <= 0) {
        alert("Digite uma porcentagem válida.");
        return;
    }

    const luckys =
        [0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1.0, 1.5];

    let resultado = "";

    for (let i = 0; i < luckys.length; i++) {

        let lucky = i + 1;

        // Lucky 8 vira 9
        if (lucky === 8) {
            lucky = 9;
        }

        const valor =
            (drop * (1 + luckys[i])).toFixed(2);

        resultado += `
        <div>
            <strong>Lucky ${lucky}</strong>
            → ${valor}%
        </div>
        `;

        // Com elixir
        if (elixir === "1") {

            const plus20 =
                (drop * (1 + luckys[i] + 0.2))
                .toFixed(2);

            const plus80 =
                (drop * (1 + luckys[i] + 0.8))
                .toFixed(2);

            resultado += `
            <div>+20%: ${plus20}%</div>
            <div>+80%: ${plus80}%</div>
            <hr>
            `;
        }
    }

    document.getElementById("resultadoDrop")
        .innerHTML = resultado;
}

function mediaBalls() {

    const elemental = 250;
    const ub = 130;

    const precoPoke =
        parseInt(document.getElementById("precoPoke").value);

    const precoBall =
        parseInt(document.getElementById("precoBall").value);

    // Validação
    if (isNaN(precoPoke) || precoPoke <= 0) {
        alert("Digite um preço válido do Pokémon.");
        return;
    }

    if (isNaN(precoBall) || precoBall <= 0) {
        alert("Digite um preço válido da Ball.");
        return;
    }

    const mediaElemental =
        2 * (precoPoke / elemental);

    const mediaUB =
        2 * (precoPoke / ub);

    const custoUB =
        Math.ceil((mediaUB * ub) / 1000);

    const custoElemental =
        Math.ceil(
            (mediaElemental * precoBall) / 1000
        );

    document.getElementById("resultadoBalls")
        .innerHTML = `
        <strong>Resultado:</strong><br><br>

        Você precisará de aproximadamente:<br><br>

        <strong>${Math.ceil(mediaUB)}</strong> UB/PB
        (${custoUB}k)<br><br>

        ou

        <br><br>

        <strong>${Math.ceil(mediaElemental)}</strong>
        Balls Elementais

        (${custoElemental}k)
    `;
}
