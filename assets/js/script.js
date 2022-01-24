document.addEventListener('DOMContentLoaded', function gameSetup() {
    let icons = ['black-panther.png', 'captain-america.png', 'hulk.png', 'iron-man.png', 'spider-man.png', 'thor.png', 'black-widow.png', 'loki.png'];
    let cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    // 1st card allocation
    let card0Location0 = cards[Math.floor(Math.random() * cards.length)];
    let card0Icon = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('card' + card0Location0).style.backgroundImage = 'url(' + '../assets/images/' + card0Icon + ')';

    for(var i = 0; i < icons.length; i++) {
        if(icons[i] === card0Icon) {
            icons.splice(i, 1);
        }
    };

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card0Location0) {
            cards.splice(i, 1);
        }
    };

    let card0Location1 = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card' + card0Location1).style.backgroundImage = 'url(' + '../assets/images/' + card0Icon + ')';

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card0Location1) {
            cards.splice(i, 1);
        }
    };

    console.log(icons);
    console.log(cards);

    // 2nd card allocation
    let card1Location0 = cards[Math.floor(Math.random() * cards.length)];
    let card1Icon = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('card' + card1Location0).style.backgroundImage = 'url(' + '../assets/images/' + card1Icon + ')';

    for(var i = 0; i < icons.length; i++) {
        if(icons[i] === card1Icon) {
            icons.splice(i, 1);
        }
    };

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card1Location0) {
            cards.splice(i, 1);
        }
    };

    let card1Location1 = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card' + card1Location1).style.backgroundImage = 'url(' + '../assets/images/' + card1Icon + ')';

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card1Location1) {
            cards.splice(i, 1);
        }
    };

    console.log(icons);
    console.log(cards);

    // 3rd card allocation
    let card2Location0 = cards[Math.floor(Math.random() * cards.length)];
    let card2Icon = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('card' + card2Location0).style.backgroundImage = 'url(' + '../assets/images/' + card2Icon + ')';

    for(var i = 0; i < icons.length; i++) {
        if(icons[i] === card2Icon) {
            icons.splice(i, 1);
        }
    };

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card2Location0) {
            cards.splice(i, 1);
        }
    };

    let card2Location1 = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card' + card2Location1).style.backgroundImage = 'url(' + '../assets/images/' + card2Icon + ')';

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card2Location1) {
            cards.splice(i, 1);
        }
    };

    console.log(icons);
    console.log(cards);
    
    // 4th card allocation
    let card4Location0 = cards[Math.floor(Math.random() * cards.length)];
    let card4Icon = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('card' + card4Location0).style.backgroundImage = 'url(' + '../assets/images/' + card4Icon + ')';

    for(var i = 0; i < icons.length; i++) {
        if(icons[i] === card4Icon) {
            icons.splice(i, 1);
        }
    };

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card4Location0) {
            cards.splice(i, 1);
        }
    };

    let card4Location1 = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card' + card4Location1).style.backgroundImage = 'url(' + '../assets/images/' + card4Icon + ')';

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card4Location1) {
            cards.splice(i, 1);
        }
    };

    console.log(icons);
    console.log(cards);

    // 5th card allocation
    let card5Location0 = cards[Math.floor(Math.random() * cards.length)];
    let card5Icon = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('card' + card5Location0).style.backgroundImage = 'url(' + '../assets/images/' + card5Icon + ')';

    for(var i = 0; i < icons.length; i++) {
        if(icons[i] === card5Icon) {
            icons.splice(i, 1);
        }
    };

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card5Location0) {
            cards.splice(i, 1);
        }
    };

    let card5Location1 = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card' + card5Location1).style.backgroundImage = 'url(' + '../assets/images/' + card5Icon + ')';

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card5Location1) {
            cards.splice(i, 1);
        }
    };

    console.log(icons);
    console.log(cards);

    // 6th card allocation
    let card6Location0 = cards[Math.floor(Math.random() * cards.length)];
    let card6Icon = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById('card' + card6Location0).style.backgroundImage = 'url(' + '../assets/images/' + card6Icon + ')';

    for(var i = 0; i < icons.length; i++) {
        if(icons[i] === card6Icon) {
            icons.splice(i, 1);
        }
    };

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card6Location0) {
            cards.splice(i, 1);
        }
    };

    let card6Location1 = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('card' + card6Location1).style.backgroundImage = 'url(' + '../assets/images/' + card6Icon + ')';

    for(var i = 0; i < cards.length; i++) {
        if(cards[i] === card6Location1) {
            cards.splice(i, 1);
        }
    };

    console.log(icons);
    console.log(cards);
    
})

function gamePlay() {
    
}

function gameComplete() {

}

function gameReset() {

}