/*
 * Create a list that holds all of your cards
 */

$(document).ready(function(){
    /*
     * Create a list that holds all of your cards
     */
    // Adding main Vars 
    const deck = document.querySelectorAll('.card');
    const matchedCards = document.getElementsByClassName('card match');
    const openCards = document.getElementsByClassName('card show open');
    const restart = document.getElementById('restart');
    const moves = document.getElementById("moves");
    const stars = document.getElementById("stars");
    const star = document.querySelector('.fa-star');
    const uls = document.getElementsByTagName('ul');
    const winClass = document.getElementById('winClass');
    let counter = 0 ;
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    $deck = $('.deck');
    $moves = $('.moves');


    cards = ['diamond','diamond','paper-plane-o','paper-plane-o','anchor','anchor','bolt','bolt','cube','cube','leaf','leaf','bicycle','bicycle','bomb','bomb'];
    
    function init () {
    shuffle(cards);
    $deck.empty();
    // A for loop creates 16  <li> tags with the class of card for every <i> tag
    // A class of fa fa- and a name of each object from the objects=[] array
    for (let i = 0; i < cards.length; i++) {
        $deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
    }
    
    for (let i=0; i<=2 ;i++){
     uls[0].children[i].firstChild.className = "fa fa-star";
    }

    clickHandler();
    
    var timer = setInterval(setTime, 1000);
    window.clearInterval(timer);
    reset();
    }


// Shuffle function from http://stackoverflow.com/a/2450976
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }

});