var imgUnsighted = [
    "imgs/img1-unsighted.jpg",
    "imgs/img2-unsighted.jpg",
    "imgs/img3-unsighted.jpg",
    "imgs/img4-unsighted.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("imgUnsighted").src = imgUnsighted[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % imgUnsighted.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imgUnsighted.length) % imgUnsighted.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


