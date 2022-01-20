document.addEventListener('DOMContentLoaded', function gameSetup() {
    let cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    let icons = ['black-panther', 'captain-america', 'hulk', 'iron-man', 'spider-man', 'thor'];

    for(var card = cards.length-1; card >= 0; card--) {
        cards.splice(Math.floor(Math.random()*cards.length), 1);
        console.log(cards);
    }
    
    for(var icon = icons.length-1; icon >= 0; icon--) {
        icons.splice(Math.floor(Math.random()*icons.length), 1);
        console.log(icons);
    }

    let 
})

function gamePlay() {

}

function gameComplete() {

}

function gameReset() {

}