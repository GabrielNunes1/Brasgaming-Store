var imgHeroi = [
    "imgs/img1-lenda.jpg",
    "imgs/img2-lenda.jpg",
    "imgs/img3-lenda.jpg",
    "imgs/img4-lenda.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgHeroi").src = imgHeroi[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgHeroi.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgHeroi.length) % imgHeroi.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


