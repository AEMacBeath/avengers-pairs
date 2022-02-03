/*jshint esversion: 6 */

addEventListener('DOMContentLoaded', gameSetup());

function gameSetup(event) {
    document.getElementById('game-area').style.visibility = 'hidden';
    let icons = [
        'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png',
        'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png',
        'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'
    ];

    document.getElementById('game-complete').style.visibility = 'hidden';
    icons = icons.sort(() => Math.random() - 0.5);

    for (let i = 0; i <= 11; i++) {
        let newContainerDiv = document.createElement('div');
        newContainerDiv.id = `card${i}Container`;
        newContainerDiv.className = 'card-container';
        document.getElementById('game-area').appendChild(newContainerDiv);

        let newDiv = document.createElement('div');
        newDiv.id = `card${i}`;
        newDiv.className = 'cards';
        document.getElementById(newContainerDiv.id).appendChild(newDiv);
        document.getElementById(document.getElementsByClassName('cards')[i].id).style.backgroundImage = `url(assets/images/${icons[i]})`;
        document.getElementById(newDiv.id).setAttribute('name', icons[i]);
        document.getElementsByClassName('cards')[i].style.visibility = 'hidden';
    }
}

function gameReady() {
    let nickname = document.getElementById('nickname')
    if (nickname.value == "") {
        alert('Please enter nickname');
    } else {
        document.getElementById('welcome').style.visibility = 'hidden';
        document.getElementById('game-area').style.visibility = 'visible';
    }
}

function playAgain() {

    attempts = 0;
    matchedPairs = 0;

    let icons = [
        'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png',
        'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png',
        'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'
    ];

    document.getElementById('game-complete').style.visibility = 'hidden';
    icons = icons.sort(() => Math.random() - 0.5);

    for (let i = 0; i <= 11; i++) {
        document.getElementById(document.getElementsByClassName('cards')[i].id).style.backgroundImage = `url(assets/images/${icons[i]})`;
        document.getElementById(`card${i}`).setAttribute('name', icons[i]);
        document.getElementsByClassName('cards')[i].style.visibility = 'hidden';
    }
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
    attempts++;

    // Assign clickedCard1 & clickedCard2 icon name and ID to check for a match
    if (clickedCard1 == '') {
        document.getElementById(id).style.visibility = 'visible';
        clickedCard1 = document.getElementById(id).getAttribute('name');
        clickedCard1Id = id;
    } else {
        if (clickedCard2 == '' && id !== clickedCard1Id) {
            document.getElementById(id).style.visibility = 'visible';
            clickedCard2 = document.getElementById(id).getAttribute('name');
            clickedCard2Id = id;

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
                            document.getElementById('game-complete').style.visibility = 'visible';
                            let attemptSpan = document.getElementById('attempts');
                            attemptSpan.innerText = attempts;

                            console.log('gameComplete');
                            console.log(attempts);
                        }
                    }
                }, 500);
            }
        } else {}
    }
}

// Add event listener
for (let c = 0; c <= 11; c++) {
    let click = document.getElementsByClassName('card-container')[c].addEventListener('click', gamePlay);
}

document.getElementById('play').addEventListener('click', gameReady);
document.getElementById('play-again').addEventListener('click', playAgain);