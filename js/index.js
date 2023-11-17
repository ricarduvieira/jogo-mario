const pipe = document.querySelector(".pipe");
const pipe2 = document.querySelector(".pipe2");
const pipe3 = document.querySelector(".pipe3");
const clouds = document.querySelector(".clouds");
const startButton = document.querySelector(".start-container");

function hoverOn() {
    const pipePosition = pipe.offsetLeft;
    const pipe2Position = pipe2.offsetLeft;
    const pipe3Position = pipe3.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    pipe2.style.animation = 'none';
    pipe2.style.left = `${pipe2Position}px`;
    pipe3.style.animation = 'none';
    pipe3.style.left = `${pipe3Position}px`;
    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;
}
function hoverOut() {
    pipe.style.animation = 'pipeAnimation 3s infinite linear -1s';
    pipe.style.left = 'auto';
    pipe2.style.animation = 'pipeAnimation 3s infinite linear -3s';
    pipe2.style.left = 'auto';
    pipe3.style.animation = 'pipeAnimation 3s infinite linear -5s';
    pipe3.style.left = 'auto';
    clouds.style.animation = 'cloudsAnimation 6s infinite linear';
    clouds.style.left = 'auto';
}

startButton.addEventListener("mouseover", hoverOn);
startButton.addEventListener("mouseout", hoverOut);