var imgChroma = [
    "imgs/img1-chroma.jpg",
    "imgs/img2-chroma.jpg",
    "imgs/img3-chroma.jpg",
    "imgs/img4-chroma.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgChroma").src = imgChroma[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgChroma.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgChroma.length) % imgChroma.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


