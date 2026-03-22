const progress = document.querySelector('.progress');
const progressText = document.querySelector('.progress-text');

let value = 0;
let target = 75; 

function updateProgress() {
    if (value < target) {
        value++;
        progress.style.width = value + "%";
        progressText.textContent = value + "%";
        setTimeout(updateProgress, 20);
    }
}

updateProgress();

const btnHero = document.getElementById("btnHero");
const btnHeader = document.getElementById("btnHeader");

const destinos = document.getElementById("destinos");


function irParaDestinos() {
    destinos.scrollIntoView({
        behavior: "smooth"
    });
}


btnHero.addEventListener("click", irParaDestinos);
btnHeader.addEventListener("click", irParaDestinos);