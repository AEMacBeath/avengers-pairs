addEventListener('DOMContentLoaded', gameSetup); 

let icons = ['black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'];

function gameSetup() {

    icons = icons.sort(() => Math.random() - 0.5)
    console.log(icons);

    for (let i = 0; i <= 11; i++) {

        document.getElementById(document.getElementsByClassName('cards')[i].id).style.backgroundImage = 'url(' + '../assets/images/' + icons[i] + ')';
        document.getElementsByClassName('cards')[i].style.visibility='hidden';

    }
}

function gamePlay(event) {

    let id = this.id;
    id = id.split('Container')[0];

    document.getElementById(id).style.visibility='visible';
    console.log('Clicked');

}

// Event listeners for each button to run gamePlay
document.getElementById('card0Container').addEventListener('click', gamePlay);
document.getElementById('card1Container').addEventListener('click', gamePlay);
document.getElementById('card2Container').addEventListener('click', gamePlay);
document.getElementById('card3Container').addEventListener('click', gamePlay);
document.getElementById('card4Container').addEventListener('click', gamePlay);
document.getElementById('card5Container').addEventListener('click', gamePlay);
document.getElementById('card6Container').addEventListener('click', gamePlay);
document.getElementById('card7Container').addEventListener('click', gamePlay);
document.getElementById('card8Container').addEventListener('click', gamePlay);
document.getElementById('card9Container').addEventListener('click', gamePlay);
document.getElementById('card10Container').addEventListener('click', gamePlay);
document.getElementById('card11Container').addEventListener('click', gamePlay);