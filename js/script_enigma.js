var imgEnigma = [
    "imgs/img1-enigma.jpg",
    "imgs/img2-enigma.jpg",
    "imgs/img3-enigma.jpg",
    "imgs/img4-enigma.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgEnigma").src = imgEnigma[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgEnigma.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgEnigma.length) % imgEnigma.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


