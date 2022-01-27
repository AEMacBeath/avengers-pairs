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

function gamePlay() {
    
}