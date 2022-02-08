/*jshint esversion: 6 */

addEventListener('DOMContentLoaded', gameSetup());

function gameSetup(event) {
    /* Hide game-area and game-complete screens */
    document.getElementById('game-area').style.visibility = 'hidden';
    document.getElementById('game-complete').style.visibility = 'hidden';

    /* Create an array of Avenger Icon images */
    let icons = [
        'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png',
        'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png',
        'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'
    ];

    /* Randomise order of icons array */
    icons = icons.sort(() => Math.random() - 0.5);

    /* Create container divs to be shown as white circles for the user to click */
    for (let i = 0; i <= 11; i++) {
        let newContainerDiv = document.createElement('div');
        newContainerDiv.id = `card${i}Container`;
        newContainerDiv.className = 'card-container';
        document.getElementById('game-area').appendChild(newContainerDiv);

        /* Create hidden divs with a random Avenger icon set as the background image to appear when clicked */
        let newDiv = document.createElement('div');
        newDiv.id = `card${i}`;
        newDiv.className = 'cards';
        document.getElementById(newContainerDiv.id).appendChild(newDiv);
        document.getElementById(document.getElementsByClassName('cards')[i].id).style.backgroundImage = `url(assets/images/${icons[i]})`;
        document.getElementById(newDiv.id).setAttribute('name', icons[i]);
        document.getElementsByClassName('cards')[i].style.visibility = 'hidden';
    }
}

let nickname = '';

function gameReady() {
    /* Check the user has entered a nickname */
    nickname = document.getElementById('nickname');
    if (nickname.value == "") {
        /* Display message asking user to enter nuckname */
        document.getElementById('welcome-instructions').innerHTML = "Please enter a nickname";
    } else {
        /* Hide welcome screen and unhide game-area */
        document.getElementById('welcome').style.visibility = 'hidden';
        document.getElementById('game-area').style.visibility = 'visible';
    }
}

function playAgain(event) {
    /* Reset variables so the game can be played again */
    attempts = 0;
    matchedPairs = 0;

    /* Create an array of Avenger Icon images */
    let icons = [
        'black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png',
        'spider-man.png', 'thor.png', 'black-panther.png', 'captain-america.png',
        'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png'
    ];

    /* Hide game-complete screen */
    document.getElementById('game-complete').style.visibility = 'hidden';

    /* Randomise order of icons array */
    icons = icons.sort(() => Math.random() - 0.5);

    /* Allocated random Avenger icons as the background image to appear when clicked */
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
    // Get card div id from clicked container id
    let id = this.id;
    id = id.split('Container')[0];
    attempts++;

    // Assign clickedCard1 & clickedCard2 icon name and ID to check for a match. Make clicked icons visible.
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
            if (clickedCard2 != '') {
                setTimeout(function () {
                    if (clickedCard1 != clickedCard2) {
                        document.getElementById(clickedCard1Id).style.visibility = 'hidden';
                        document.getElementById(clickedCard2Id).style.visibility = 'hidden';
                        // Reset variables for next attempt.
                        clickedCard1 = '';
                        clickedCard2 = '';
                        clickedCard1Id = '';
                        clickedCard2Id = '';

                    } else {
                        matchedPairs++;
                        // Reset variables for next attempt.
                        clickedCard1 = '';
                        clickedCard2 = '';
                        clickedCard1Id = '';
                        clickedCard2Id = '';

                        // Show game complete screen
                        if (matchedPairs == 6) {
                            document.getElementById('game-complete').style.visibility = 'visible';
                            document.getElementById('attempts').innerText = attempts;
                            document.getElementById('user-nickname').innerText = nickname.value;
                        }
                    }
                }, 500);
            }
        }
    }
}

// Add event listeners
for (let c = 0; c <= 11; c++) {
    document.getElementsByClassName('card-container')[c].addEventListener('click', gamePlay);
}

document.getElementById('play').addEventListener('click', gameReady);
document.getElementById('play-again').addEventListener('click', playAgain);