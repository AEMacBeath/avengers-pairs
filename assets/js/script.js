addEventListener('DOMContentLoaded', gameSetup);

let icons = ['black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'];

function gameSetup() {

    document.getElementById('game-complete').style.visibility='hidden';

    icons = icons.sort(() => Math.random() - 0.5);

    for (let i = 0; i <= 11; i++) {

        document.getElementById(document.getElementsByClassName('cards')[i].id).style.backgroundImage = `url(/assets/images/${icons[i]})`;
        document.getElementById(document.getElementsByClassName('cards')[i].id).setAttribute('name', icons[i]);
        document.getElementsByClassName('cards')[i].style.visibility = 'hidden';
    };
}

// Set variables for gamePlay()
let clickedCard1 = '';
let clickedCard2 = '';
let clickedCard1Id = '';
let clickedCard2Id = '';
let matchedPairs = 0;
let attempts = 0;

// Play game
function gamePlay(event) {

    // Get card div id from container id and make clicked icon visible
    let id = this.id;
    id = id.split('Container')[0];

    document.getElementById(id).style.visibility = 'visible';

    attempts = attempts + 1;

    // Set clickedCard1 and clickedCard2 to icon name to check for a match
    if (clickedCard1 == '') {

        clickedCard1 = document.getElementById(id).getAttribute('name');

    } else {

        clickedCard2 = document.getElementById(id).getAttribute('name');

    };

    // Get Ids for clickedCard1 and clickedCard2
    if (clickedCard1Id == '') {

        clickedCard1Id = id;

    } else {

        clickedCard2Id = id;

    };

    // When 2nd card is clicked compare clickedCard1 with clickedCard2. After 0.5 seconds hide cards if they don't match.
    // Reset variables for next attempt.
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

                matchedPairs++;
                console.log('matchedPairs = ', matchedPairs);

                clickedCard1 = '';
                clickedCard2 = '';
                clickedCard1Id = '';
                clickedCard2Id = '';

                // Game Complete
                if (matchedPairs == 6) {

                    document.getElementById('game-complete').style.visibility='visible';
                    let attemptSpan = document.getElementById('attempts');
                    attemptSpan.innerText = attempts;

                    console.log('gameComplete');

                    console.log(attempts);
                };

            };

        }, 500);



    };

    // console.log('clickedCard1 = ', clickedCard1);
    // console.log('clickedCard2 = ', clickedCard2);

    // console.log('clickedCard1Id = ', clickedCard1Id);
    // console.log('clickedCard2Id = ', clickedCard2Id);

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