const gameover = document.querySelector('.game-board-gameover');
const itachi = document.querySelector('.game-board-itachi');
const parede = document.querySelector('.game-board-parede');
const nuvens = document.querySelector('.game-board-nuvens');
const olhos = document.querySelector('.game-board-olhos');
const maiorPontuacao = document.querySelector('.record-timer')
  
  
  
    
    let timer = 0;
    let display = document.querySelector('.pontuacao-timer'); // selecionando o timer
    let id = null;
    window.onload = function() {
        if(!id) {
            id = setInterval(function () {
                display.textContent = timer++;
                if(timer >= 80 && timer <90){
                    olhos.style.display = 'block'
                }
                if (timer >= 91 && timer <391) {
                    parede.style.animation = 'parede-animation 1.5s infinite linear';
                    olhos.style.display = 'none' ;
                }  
                if(timer >= 380 && timer <= 390){
                    olhos.style.display = 'block'
                }
                
                if(timer >= 391){
                    parede.style.animation = 'parede-animation 1.0s infinite linear';
                    olhos.style.display = 'none' ;
                }
                if(timer >= 480 && timer <= 490){
                    olhos.style.display = 'block'
                }
                
                if(timer >= 491){
                    parede.style.animation = 'parede-animation 0.8s infinite linear';
                    olhos.style.display = 'none' ;
                }
            }, 
            100);    
        } 
    }  
    
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

        function Maiorpontuacao(){
            let pontuacao = timer
            maiorPontuacao.textContent = pontuacao
            localStorage.setItem('record', pontuacao);
            let record = localStorage.getItem('record');
            maiorPontuacao.textContent = record -1
            console.log(record)
            if(pontuacao > record){
            }
            
        }
        
        

        
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

 
            clearInterval(id);
            clearInterval(loop);
            olhos.style.display = 'block' ;
            setTimeout(function(){
            gameover.style.display = 'block'}, 2000)
        } 
    }, 10);
    
    
    document.addEventListener('keydown', pulo);
    document.addEventListener('click', pulo);
    gameover.addEventListener('click', function(){
                window.location.reload(true)
            })
            
            
    
            