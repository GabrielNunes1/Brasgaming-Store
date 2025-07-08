var img9Kings = [
    "imgs/img1-9kings.jpg",
    "imgs/img2-9kings.jpg",
    "imgs/img3-9kings.jpg",
    "imgs/img4-9kings.jpg"
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("img9Kings").src = img9Kings[indiceAtual];
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % img9Kings.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + img9Kings.length) % img9Kings.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


