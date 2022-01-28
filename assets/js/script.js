addEventListener('DOMContentLoaded', gameSetup);

let icons = ['black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'];

function gameSetup() {

    icons = icons.sort(() => Math.random() - 0.5);

    for (let i = 0; i <= 11; i++) {

        document.getElementById(document.getElementsByClassName('cards')[i].id).style.backgroundImage = 'url(' + '../assets/images/' + icons[i] + ')';
        document.getElementById(document.getElementsByClassName('cards')[i].id).setAttribute('name', icons[i]);
        document.getElementsByClassName('cards')[i].style.visibility = 'hidden';
    };
}

let clickedCard1 = '';
let clickedCard2 = '';
let clickedCard1Id = '';
let clickedCard2Id = '';

function gamePlay(event) {

    let id = this.id;
    id = id.split('Container')[0];

    document.getElementById(id).style.visibility = 'visible';

    if (clickedCard1 == '') {

        clickedCard1 = document.getElementById(id).getAttribute('name');

    } else {

        clickedCard2 = document.getElementById(id).getAttribute('name');

    };

    if (clickedCard1Id == '') {

        clickedCard1Id = id;

    } else {

        clickedCard2Id = id;

    };

    if (clickedCard2 != '') {

        setTimeout(function () {

            if (clickedCard1 != clickedCard2) {

                document.getElementById(clickedCard1Id).style.visibility = 'hidden';
                document.getElementById(clickedCard2Id).style.visibility = 'hidden';

                clickedCard1 = '';
                clickedCard2 = '';
                clickedCard1Id = '';
                clickedCard2Id = '';

            } else {

                clickedCard1 = '';
                clickedCard2 = '';
                clickedCard1Id = '';
                clickedCard2Id = '';

            };

        }, 1000);


    };

    console.log('clickedCard1 = ', clickedCard1);
    console.log('clickedCard2 = ', clickedCard2);

    console.log('clickedCard1Id = ', clickedCard1Id);
    console.log('clickedCard2Id = ', clickedCard2Id);
}

// Event listeners for each card div to run gamePlay
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