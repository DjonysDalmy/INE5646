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
  let coluna = []
  let i = 0
  while(i < 3){
    let j = 0
    let col1 = []
    while (j < 3){
      col1.push(jogo[j][i])
      j++
    }
    coluna.push(col1)
    i++
  }
  coluna.forEach((coluna) => {
    if (
      coluna[0].casaValor != 0 &&
      coluna[0].casaValor == coluna[1].casaValor &&
      coluna[1].casaValor == coluna[2].casaValor
    ) {
      alert(`${coluna[0].casaValor} Ganhou!`);
      if(coluna[0].casaValor === 'X'){
        let value = parseInt(document.getElementById('ponto_x').innerHTML)
        value ++
        document.getElementById('ponto_x').innerHTML = value
      }else{
        let value = parseInt(document.getElementById('ponto_o').innerHTML)
        value ++
        document.getElementById('ponto_o').innerHTML = value
      }
      limpaTudo();
    }
  });
  jogo.forEach((linha) => {
    if (
      linha[0].casaValor != 0 &&
      linha[0].casaValor == linha[1].casaValor &&
      linha[1].casaValor == linha[2].casaValor
    ) {
      alert(`${linha[0].casaValor} Ganhou!`);
      if(linha[0].casaValor === 'X'){
        let value = parseInt(document.getElementById('ponto_x').innerHTML)
        value ++
        document.getElementById('ponto_x').innerHTML = value
      }else{
        let value = parseInt(document.getElementById('ponto_o').innerHTML)
        value ++
        document.getElementById('ponto_o').innerHTML = value
      }
      limpaTudo();
    }
  });
  if(jogo[0][0].casaValor != 0 && 
    jogo[0][0].casaValor == jogo[1][1].casaValor &&
    jogo[1][1].casaValor == jogo[2][2].casaValor){
      alert(`${jogo[0][0].casaValor} Ganhou!`);
      if(jogo[0][0].casaValor === 'X'){
        let value = parseInt(document.getElementById('ponto_x').innerHTML)
        value ++
        document.getElementById('ponto_x').innerHTML = value
      }else{
        let value = parseInt(document.getElementById('ponto_o').innerHTML)
        value ++
        document.getElementById('ponto_o').innerHTML = value
      }
      limpaTudo();
    }
  if(jogo[2][0].casaValor != 0 && 
    jogo[2][0].casaValor == jogo[1][1].casaValor &&
    jogo[1][1].casaValor == jogo[0][2].casaValor){
      alert(`${jogo[2][0].casaValor} Ganhou!`);
      if(jogo[2][0].casaValor === 'X'){
        let value = parseInt(document.getElementById('ponto_x').innerHTML)
        value ++
        document.getElementById('ponto_x').innerHTML = value
      }else{
        let value = parseInt(document.getElementById('ponto_o').innerHTML)
        value ++
        document.getElementById('ponto_o').innerHTML = value
      }
      limpaTudo();
    }
  let jogoFinal = []
  jogo.forEach((linha) =>
    linha.forEach((elemento) => (
      jogoFinal.push(elemento.casaValor)
    ))
  )
  if(jogoFinal.indexOf(0) == -1){
    alert(`Deu empate!`);
    limpaTudo();
  }
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
