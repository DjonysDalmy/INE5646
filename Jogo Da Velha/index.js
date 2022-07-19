function clearAll(){
    let casasClear = document.getElementsByClassName('casa');
    let url = './imgs/branco.jpg';
    for(let i = 0; i < casas.length; i++){
        casasClear[i].style.backgroundImage = `url(${url})`;
    }
}  
let casas = document.getElementsByClassName('casa');
for(let i = 0; i < casas.length; i++){
    casas[i].addEventListener("mouseover", () => {casas[i].style.backgroundImage = `url(${'./imgs/x_JogodaVelha01.jpg'})`})
    casas[i].addEventListener("mouseout", () => {casas[i].style.backgroundImage = `url(${'./imgs/branco.jpg'})`})
}

// document.getElementById("casa1").addEventListener("mouseover", () => {document.getElementById("casa1").style.backgroundImage = `url(${'./imgs/x_JogodaVelha01.jpg'})`});
// document.getElementById("casa1").addEventListener("mouseout", () => {document.getElementById("casa1").style.backgroundImage = `url(${'./imgs/branco.jpg'})`});
