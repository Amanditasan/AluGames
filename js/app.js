function alterarStatus (id) {
let gameClicado = document.getElementById (`game-${id}`);
let imagem = gameClicado.querySelector('.dashboard__item__img');
let botao = gameClicado.querySelector('.dashboard__item__button');
let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


if (imagem.classList.contains('dashboard__item__img--rented')) {
    // Adiciona uma confirmação antes de devolver o jogo
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        atualizarContadorJogosAlugados(); // Atualiza o contador ao devolver
    }
} else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
    atualizarContadorJogosAlugados();
}}

function atualizarContadorJogosAlugados() {
    let jogosAlugados = 0;
    const itensDeJogo = document.querySelectorAll('.dashboard__items__item');
  
    itensDeJogo.forEach(itemDoJogo => {
      const imagemDoJogo = itemDoJogo.querySelector('.dashboard__item__img');
      if (imagemDoJogo.classList.contains('dashboard__item__img--rented')) {
        jogosAlugados++;
      }
    });
  
    const numeroJogosAlugadosElemento = document.querySelector('.page-subtitle');
    numeroJogosAlugadosElemento.textContent = `Nº de jogos alugados: ${jogosAlugados}`;
  }
  
  // Chamamos a função para que a contagem seja feita quando a página carregar
  document.addEventListener('DOMContentLoaded', atualizarContadorJogosAlugados);
  