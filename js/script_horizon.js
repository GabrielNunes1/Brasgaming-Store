var imgHorizon = [
    "imgs/img1-hct.jpg",
    "imgs/img2-hct.jpg",
    "imgs/img3-hct.jpg",
    "imgs/img4-hct.jpg",
];
var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgHorizon").src = imgHorizon[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgHorizon.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgHorizon.length) % imgHorizon.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


