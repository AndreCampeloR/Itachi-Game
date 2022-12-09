const gameover = document.querySelector('.game-board-gameover');
const startgame = document.querySelector('.game-board-startgame');
const itachi = document.querySelector('.game-board-itachi');                      //elementos 
const parede = document.querySelector('.game-board-parede');
const nuvens = document.querySelector('.game-board-nuvens');
const olhos = document.querySelector('.game-board-olhos');
const maiorPontuacao = document.querySelector('.record-timer')



let timer = 0;
let display = document.querySelector('.pontuacao-timer'); // selecionando o timer
let id = null;
let pontuacao



startgame.addEventListener('click', function iniciar() {
    startgame.style.display = 'none';
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
        
            setInterval(() => {
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
                
                
                pontuacao = timer 
                localStorage.setItem('record', pontuacao);
                
                clearInterval(id);
                olhos.style.display = 'block' ;
                setTimeout(function(){
                    gameover.style.display = 'block'}, 2000)
                } 
            }, 10);
            
            gameover.addEventListener('click', function(){
                
                iniciar()
        })
        }  )
        
        const pulo = ()=>{
            itachi.classList.add('pulo');
            setTimeout(() => {
            itachi.classList.remove('pulo');
        }, 500);
    };
    let record = localStorage.getItem('record');
    
    document.addEventListener('keydown', pulo);
    document.addEventListener('click', pulo);          //Funcionalidade do game


        // parede.style.animation = 'block';
        
        // itachi.style.animation = 'block';
        
        // nuvens.style.animation = 'block';
        
        // itachi.src = './img/itachi_running.gif';
        
        // clearInterval(loop);
        
        
        // console.log(7)
        // maiorPontuacao.textContent = record
    
    
    
    
    
    