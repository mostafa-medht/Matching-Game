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