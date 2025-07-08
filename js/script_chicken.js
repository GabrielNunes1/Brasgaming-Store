var imgChicken = [
    "imgs/img1-chicken.jpg",
    "imgs/img2-chicken.jpg",
    "imgs/img3-chicken.jpg",
    "imgs/img4-chicken.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgChicken").src = imgChicken[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgChicken.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgChicken.length) % imgChicken.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


