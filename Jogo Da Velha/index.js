let jogador = "X";
const jogo = [
  [
    { casaValor: 0, casaElemento: "" },
    { casaValor: 0, casaElemento: "" },
    { casaValor: 0, casaElemento: "" },
  ],
  [
    { casaValor: 0, casaElemento: "" },
    { casaValor: 0, casaElemento: "" },
    { casaValor: 0, casaElemento: "" },
  ],
  [
    { casaValor: 0, casaElemento: "" },
    { casaValor: 0, casaElemento: "" },
    { casaValor: 0, casaElemento: "" },
  ],
];

const mudaJogador = () => {
  if (jogador == "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
};

const limpaTudo = () => {
  jogo.forEach((linha) => {
    linha.forEach((casa) => {
      casa.casaValor = 0;
      casa.casaElemento.classList.remove("marcacao_x");
      casa.casaElemento.classList.remove("marcacao_o");
    });
  });
  jogador = "X";
};

const verificarResultado = () => {
  jogo.forEach((linha) => {
    if (
      linha[0].casaValor != 0 &&
      linha[0].casaValor == linha[1].casaValor &&
      linha[1].casaValor == linha[2].casaValor
    ) {
      alert(`${linha[0].casaValor} Ganhou!`);
      limpaTudo;
    }
  });
};

window.onload = () => {
  const casaElementos = document.querySelectorAll("#jogo > .row > .col");
  let limpar = document.querySelector("#limpar");
  limpar.addEventListener("click", limpaTudo);
  for (let i = 0; i < casaElementos.length; i++) {
    let casaElemento = casaElementos[i];
    let linha = 0;
    if (i >= 6) {
      linha = 2;
    } else if (i >= 3) {
      linha = 1;
    }
    jogo[linha][i % 3].casaElemento = casaElemento;

    casaElemento.addEventListener("mouseover", () => {
      if (!jogo[linha][i % 3].casaValor) {
        if (jogador == "X") {
          casaElemento.classList.add(`marcacao_x`);
        } else {
          casaElemento.classList.add(`marcacao_o`);
        }
      }
    });
    casaElemento.addEventListener("mouseout", () => {
      if (!jogo[linha][i % 3].casaValor) {
        casaElemento.classList.remove("marcacao_x");
        casaElemento.classList.remove("marcacao_o");
      }
    });

    casaElemento.addEventListener("click", () => {
      if (!jogo[linha][i % 3].casaValor) {
        if (jogador == "X") {
          casaElemento.classList.add(`marcacao_x`);
          jogo[linha][i % 3].casaValor = "X";
        } else {
          casaElemento.classList.add(`marcacao_o`);
          jogo[linha][i % 3].casaValor = "O";
        }
        mudaJogador();
        verificarResultado();
      }
    });
  }
};
