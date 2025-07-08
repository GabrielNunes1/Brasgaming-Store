var imgFobia = [
    "imgs/img1-fobia.jpg",
    "imgs/img2-fobia.jpg",
    "imgs/img3-fobia.jpg",
    "imgs/img4-fobia.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgFobia").src = imgFobia[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgFobia.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgFobia.length) % imgFobia.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


