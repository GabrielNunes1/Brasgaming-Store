var imgMoon = [
    "imgs/img1-moon.jpg",
    "imgs/img2-moon.jpg",
    "imgs/img3-moon.jpg",
    "imgs/img4-moon.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgMoon").src = imgMoon[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgMoon.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgMoon.length) % imgMoon.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


