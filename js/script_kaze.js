var imgKaze = [
    "imgs/img1-kaze.jpg",
    "imgs/img2-kaze.jpg",
    "imgs/img3-kaze.jpg",
    "imgs/img4-kaze.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgKaze").src = imgKaze[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgKaze.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgKaze.length) % imgKaze.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


