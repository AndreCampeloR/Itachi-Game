const itachi = document.querySelector('.game-board-itachi');
const parede = document.querySelector('.game-board-parede');
const nuvens = document.querySelector('.game-board-nuvens');

const pulo = ()=>{
    itachi.classList.add('pulo');
    setTimeout(() => {
        itachi.classList.remove('pulo');
    }, 500);
};

const loop = setInterval(() => {
    const paredePosition = parede.offsetLeft;
    const nuvensPosition = nuvens.offsetLeft;
    const itachiPosition = +window.getComputedStyle(itachi).bottom.replace('px', '');


    if (paredePosition <= 80 && paredePosition > 0 && itachiPosition < 100) {
        parede.style.animation = 'none';
        parede.style.left = `${paredePosition}px`;

        itachi.style.animation = 'none';
        itachi.style.bottom = `${itachiPosition}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px`;

        itachi.src = './img/itachi.gif';
        itachi.style.width = '90px';
        itachi.style.left = '15px'; 

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo);