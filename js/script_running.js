const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');
const video = document.getElementById('meuVideo');
const imagem = document.getElementById('imagemSubstituta');

const imagens = [
  'imgs/img1-rpg.png',
  'imgs/img2-rpg.png',
  'imgs/img3-rpg.png'
];

let indexAtual = 0;

function atualizarExibicao() {
  if (indexAtual >= 0 && indexAtual < imagens.length) {
    video.style.display = 'none';
    imagem.style.display = 'block';
    imagem.src = imagens[indexAtual];
  } else {
    imagem.style.display = 'none';
    video.style.display = 'block';
  }
}

setaDireita.addEventListener('click', () => {
  if (video.style.display !== 'none') {
    indexAtual = 0;
  } else {
    indexAtual++;
    if (indexAtual >= imagens.length) {
      indexAtual = imagens.length;
    }
  }
  atualizarExibicao();
});

setaEsquerda.addEventListener('click', () => {
  if (video.style.display !== 'none') {
    indexAtual = imagens.length - 1;
  } else {
    indexAtual--;
    if (indexAtual < 0) {
      indexAtual = -1; 
    }
  }
  atualizarExibicao();
});
