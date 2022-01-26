addEventListener('DOMContentLoaded', gameSetup); 

let icons = ['black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'];
let cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
let cardOne = '';
let cardTwo = '';
let icon = '';
let i = 0;

function gameSetup(event) {

    while (i <= icons.length) {

        icon = icons[Math.floor(Math.random() * icons.length)];
        icons.splice(icon, 1);
        console.log(icon);
        console.log(icons);

        cardOne = cards[Math.floor(Math.random() * cards.length)];
        cards.splice(cardOne, 1);
        console.log(cardOne);
        console.log(cards);

        cardTwo = cards[Math.floor(Math.random() * cards.length)];
        cards.splice(cardTwo, 1);
        console.log(cardTwo);
        console.log(cards);

        document.getElementById(document.getElementsByClassName('cards')[cardOne].id).style.backgroundImage = 'url(' + '../assets/images/' + icon + ')';

        document.getElementById(document.getElementsByClassName('cards')[cardTwo].id).style.backgroundImage = 'url(' + '../assets/images/' + icon + ')';

        i++
    }
}
