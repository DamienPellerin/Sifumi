
let temps = 100

let timerElement = document.querySelector('.timer')
function diminuerTemps() {
    timerElement.innerText = temps;
    temps = temps <= -1 ? -1 : temps - 1;
        if(temps === -1){
            document.querySelector('.timeOut').classList.add('inTimeOut');
            document.querySelector('.timeOut').classList.remove('out');
                setTimeout(() => {
                    document.querySelector('.timeOut').classList.remove('inTimeOut');
                    document.querySelector('.timeOut').classList.add('out');
                }, '5000')
    }
  }
  setInterval(diminuerTemps, 1000)


let buttons = document.querySelectorAll('.btn');

        for (let i = 0; i <buttons.length; i++){
                buttons[i].addEventListener('click', ()=> { 
            let player = buttons[i].innerHTML;
            let IA = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
            let result='';

                if (player===IA) {
                    result = 'Egalité';
}
                        else if 
                            ((player === 'Pierre' && IA === 'Ciseaux') || 
                            (player === 'Ciseaux' && IA === 'Feuille') ||
                            (player === 'Feuille' && IA === 'Pierre')) { 
                            result = 'Gagné';
}
                        else {
                            result = 'Perdu';
}

document.getElementById('resultat').innerHTML=  ` ${player}</br>IAa choisi : ${IA}</br>${result}`;

if(result=='Perdu'){
    if(document.querySelector('.pv3').classList.contains('loose')){
        if(document.querySelector('.pv2').classList.contains('loose')){
            document.querySelector('.pv1').style.backgroundColor='red';
            document.querySelector('.pv1').classList.add('loose');
            document.querySelector('.gameOver').classList.add('inGameOver');
                document.querySelector('.gameOver').classList.remove('out');
                setTimeout(() => {
                    document.querySelector('.gameOver').classList.remove('inGameOver');
                    document.querySelector('.gameOver').classList.add('out');
                }, '5000')
        } else { 
            document.querySelector('.pv2').style.backgroundColor='red';
            document.querySelector('.pv2').classList.add('loose');
            document.querySelector('.overlayLoose').classList.add('in');
            document.querySelector('.overlayLoose').classList.remove('out');
            setTimeout(() => {
                document.querySelector('.overlayLoose').classList.remove('in');
                document.querySelector('.overlayLoose').classList.add('out');
            }, '2000')

        }
             } else { 
                document.querySelector('.pv3').style.backgroundColor='red';
                document.querySelector('.pv3').classList.add('loose');
                document.querySelector('.overlayLoose').classList.add('in');
                document.querySelector('.overlayLoose').classList.remove('out');
                setTimeout(() => {
                    document.querySelector('.overlayLoose').classList.remove('in');
                    document.querySelector('.overlayLoose').classList.add('out');
                }, '2000')
} }

if(result=='Gagné'){
    if(document.querySelector('.pv1bot').classList.contains('loose')){
        if(document.querySelector('.pv2bot').classList.contains('loose')){
            document.querySelector('.pv3bot').style.backgroundColor='red';
            document.querySelector('.pv3bot').classList.add('loose');
            document.querySelector('.winner').classList.add('inWinner');
                document.querySelector('.winner').classList.remove('out');
                setTimeout(() => {
                    document.querySelector('.winner').classList.remove('inWinner');
                    document.querySelector('.winner').classList.add('out');
                }, '5000')
            
        } else { 
            document.querySelector('.pv2bot').style.backgroundColor='red';
            document.querySelector('.pv2bot').classList.add('loose');
            document.querySelector('.overlayWin').classList.add('in');
            document.querySelector('.overlayWin').classList.remove('out');
            setTimeout(() => {
                document.querySelector('.overlayWin').classList.remove('in');
                document.querySelector('.overlayWin').classList.add('out');
            }, '2000')
        }
             } else { 
                document.querySelector('.pv1bot').style.backgroundColor='red';
                document.querySelector('.pv1bot').classList.add('loose');
                document.querySelector('.overlayWin').classList.add('in');
                document.querySelector('.overlayWin').classList.remove('out');
                setTimeout(() => {
                    document.querySelector('.overlayWin').classList.remove('in');
                    document.querySelector('.overlayWin').classList.add('out');
                }, '2000')
} }
    if(result=='Egalité'){
                document.querySelector('.overlayEgality').classList.add('in');
                document.querySelector('.overlayEgality').classList.remove('out');
                setTimeout(() => {
                    document.querySelector('.overlayEgality').classList.remove('in');
                    document.querySelector('.overlayEgality').classList.add('out');
                }, '2000')
    }
}


)}

