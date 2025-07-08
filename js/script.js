var img1 = [
    "imgs/paws-destaque.png",
    "imgs/lenda-vertical.png",
    "imgs/9-kings-vertical.jpg"
];

var img2 = [
    "imgs/fobia-vertical.jpg",
    "imgs/chroma-squad-vertical.jpg",
    "imgs/enigma-vertical.jpg"
];

var img3 = [
    "imgs/no-bugs-allowed.jpg",
    "imgs/chicken-vertical.jpg",
    "imgs/unsighted-vertical.jpg"
];

var precos1 = [
    { desconto: "-33%", antigo: "R$ 14,99", atual: "R$ 4,99" },
    { desconto: "-50%", antigo: "R$ 29,99", atual: "R$ 14,99" },
    { desconto: "-35%", antigo: "R$ 39,99", atual: "R$ 25,99" }
];

var precos2 = [
    { desconto: "-80%", antigo: "R$ 57,99", atual: "R$ 11,59" },
    { desconto: "-50%", antigo: "R$ 46,99", atual: "R$ 23,49" },
    { desconto: "-15%", antigo: "R$ 65,00", atual: "R$ 55,25" }
];

var precos3 = [
    { desconto: "-50%", antigo: "R$ 29,99", atual: "R$ 14,99" },
    { desconto: "-75%", antigo: "R$ 10,89", atual: "R$ 2,72" },
    { desconto: "-60%", antigo: "R$ 49,99", atual: "R$ 19,99" }
];

var indiceAtual = 0;

function atualizarDestaques() {
    document.getElementById("img1").src = img1[indiceAtual];
    document.getElementById("img2").src = img2[indiceAtual];
    document.getElementById("img3").src = img3[indiceAtual];

    document.querySelectorAll(".jogo-destaque")[0].querySelector(".desconto-destaque").innerText = precos1[indiceAtual].desconto;
    document.querySelectorAll(".jogo-destaque")[0].querySelector(".preco-antigo").innerText = precos1[indiceAtual].antigo;
    document.querySelectorAll(".jogo-destaque")[0].querySelector(".preco-atual").innerText = precos1[indiceAtual].atual;

    document.querySelectorAll(".jogo-destaque")[1].querySelector(".desconto-destaque").innerText = precos2[indiceAtual].desconto;
    document.querySelectorAll(".jogo-destaque")[1].querySelector(".preco-antigo").innerText = precos2[indiceAtual].antigo;
    document.querySelectorAll(".jogo-destaque")[1].querySelector(".preco-atual").innerText = precos2[indiceAtual].atual;

    document.querySelectorAll(".jogo-destaque")[2].querySelector(".desconto-destaque").innerText = precos3[indiceAtual].desconto;
    document.querySelectorAll(".jogo-destaque")[2].querySelector(".preco-antigo").innerText = precos3[indiceAtual].antigo;
    document.querySelectorAll(".jogo-destaque")[2].querySelector(".preco-atual").innerText = precos3[indiceAtual].atual;
}

function avancar() {
    indiceAtual = (indiceAtual + 1) % img1.length;
    atualizarDestaques();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + img1.length) % img1.length;
    atualizarDestaques();
}

document.addEventListener("DOMContentLoaded", atualizarDestaques);


