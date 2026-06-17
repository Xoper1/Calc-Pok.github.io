function trocarAba(id){

    document.querySelectorAll(".content")
    .forEach(c => c.classList.remove("active"));

    document.querySelectorAll(".tab-btn")
    .forEach(b => b.classList.remove("active"));

    document.getElementById(id)
    .classList.add("active");

    event.target.classList.add("active");
}

function mostrarLucky(){

    const elixir =
    document.getElementById("elixir").value;

    const drop =
    parseFloat(document.getElementById("dropInput").value);

    const luckys =
    [0.1,0.2,0.35,0.5,0.65,0.8,1.0,1.5];

    let resultado = "";

    for(let i=0; i<luckys.length; i++){

        const lucky = i + 1;
        const valor =
        (drop * (1 + luckys[i])).toFixed(2);

        resultado += `
        <div>
            <strong>Lucky ${lucky}</strong>
            → ${valor}%
        </div>`;

        if(elixir === "1"){

            resultado += `
            <div>+20%:
            ${(drop * (1 + luckys[i] + 0.2)).toFixed(2)}%</div>

            <div>+80%:
            ${(drop * (1 + luckys[i] + 0.8)).toFixed(2)}%</div>
            <hr>
            `;
        }
    }

    document.getElementById("resultadoDrop")
    .innerHTML = resultado;
}

function mediaBalls(){

    const elemental = 250;
    const ub = 130;

    const precoPoke =
    parseInt(document.getElementById("precoPoke").value);

    const precoBall =
    parseInt(document.getElementById("precoBall").value);

    const mediaElemental =
    2 * (precoPoke / elemental);

    const mediaUB =
    2 * (precoPoke / ub);

    document.getElementById("resultadoBalls")
    .innerHTML = `
        <strong>Resultado:</strong><br><br>

        ${Math.ceil(mediaUB)} UB/PB
        (${Math.ceil((mediaUB * ub)/1000)}k)<br><br>

        ${Math.ceil(mediaElemental)}
        Balls Elementais

        (${Math.ceil((mediaElemental * precoBall)/1000)}k)
    `;
}
