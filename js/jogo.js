const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pipe2 = document.querySelector(".pipe2");
const pipe3 = document.querySelector(".pipe3");
const overDiv = document.querySelector(".game-status");
var counterVal = 0;
var body = document.querySelector(".tela-body");

function jump() {
    mario.classList.add("jump")

    setTimeout(() => {
        mario.classList.remove("jump")
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const pipe2Position = pipe2.offsetLeft;
    const pipe3Position = pipe3.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (document.body.offsetWidth >= 760) {
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80 || pipe2Position <= 100 && pipe2Position > 0 && marioPosition < 80 || pipe3Position <= 100 && pipe3Position > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            pipe2.style.animation = 'none';
            pipe2.style.left = `${pipe2Position}px`;
            pipe3.style.animation = 'none';
            pipe3.style.left = `${pipe3Position}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'imagens/game-over.png';
            mario.style.width = '65px';
            mario.style.marginLeft = '35px';

            clearInterval(loop)

            gameOver();
        } else if (pipePosition <= 40 && pipePosition >= 37 && marioPosition == 140 && marioPosition <= 150 || pipe2Position <= 40 && pipe2Position >= 37 && marioPosition == 140 && marioPosition <= 150 || pipe3Position <= 40 && pipe3Position >= 37 && marioPosition == 140 && marioPosition <= 150) {
            updateDisplay(++counterVal);
        }
    } else if (document.body.offsetWidth >= 420) {
        if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 50 || pipe2Position <= 85 && pipe2Position > 0 && marioPosition < 50 || pipe3Position <= 85 && pipe3Position > 0 && marioPosition < 50) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            pipe2.style.animation = 'none';
            pipe2.style.left = `${pipe2Position}px`;
            pipe3.style.animation = 'none';
            pipe3.style.left = `${pipe3Position}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'imagens/game-over.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '35px';

            clearInterval(loop)

            gameOver();
        } else if (pipePosition <= 40 && pipePosition >= 37 && marioPosition == 140 && marioPosition <= 150 || pipe2Position <= 40 && pipe2Position >= 37 && marioPosition == 140 && marioPosition <= 150 || pipe3Position <= 40 && pipe3Position >= 37 && marioPosition == 140 && marioPosition <= 150) {
            updateDisplay(++counterVal);
        }
    } else {
        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 50 || pipe2Position <= 80 && pipe2Position > 0 && marioPosition < 50  || pipe3Position <= 80 && pipe3Position > 0 && marioPosition < 50) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            pipe2.style.animation = 'none';
            pipe2.style.left = `${pipe2Position}px`;
            pipe3.style.animation = 'none';
            pipe3.style.left = `${pipe3Position}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = 'imagens/game-over.png';
            mario.style.width = '50px';
            mario.style.marginLeft = '35px';

            clearInterval(loop)

            gameOver();
        } else if (pipePosition <= 40 && pipePosition >= 37 && marioPosition == 140 && marioPosition <= 150 || pipe2Position <= 40 && pipe2Position >= 37 && marioPosition == 140 && marioPosition <= 150 || pipe3Position <= 40 && pipe3Position >= 37 && marioPosition == 140 && marioPosition <= 150) {
            updateDisplay(++counterVal);
        }
    }

}, 10);

function gameOver() {
    overDiv.innerHTML += `<img src="imagens/over.png" alt="imagem game over" class="game-over">
    <button class="buttonStart" onclick="start()">
        <img src="imagens/start.png" alt="imagem começar jogo" width="150px" class="start">
    </button>`;
}
function start() {
    location.reload();
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

body.addEventListener('touchstart', jump);

document.addEventListener('keydown', function (event) {
    if (event.key === " ") {
        jump();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        start();
    }
});

const inst = document.querySelector(".instrucoes");

let i = 0
function handleInstrucao() {

    if (window.innerWidth < 990 && i < 1) {
        inst.innerHTML += "<p><b>Usando Mobile?</b> Toque a tela para pular e pressione <i>Start</i> para reiniciar o jogo.</p>";

        i += 1;
    }
}

window.addEventListener("resize", handleInstrucao);

window.addEventListener("pageshow", handleInstrucao);


