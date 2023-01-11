/* Imports */
/* Get DOM Elements */
const shell1Section = document.getElementById('shell1-section');
const shell2Section = document.getElementById('shell2-section');
const shell3Section = document.getElementById('shell3-section');

const shell1Button = document.getElementById('shell1-button');
const shell2Button = document.getElementById('shell2-button');
const shell3Button = document.getElementById('shell3-button');

const correctGuessesEl = document.getElementById('correct-guesses');
const incorrectGuessesEl = document.getElementById('incorrect-guesses');
const totalGuessesEl = document.getElementById('total-guesses');

/* State */
let wins = 0;
let losses = 0;
let total = 0;

/* Events */
shell1Button.addEventListener('click', () => {
    const correctPlace = getRandomHidingSpot();
    handleGuess('shell1', correctPlace);
});

shell2Button.addEventListener('click', () => {
    const correctPlace = getRandomHidingSpot();
    handleGuess('shell2', correctPlace);
});

shell3Button.addEventListener('click', () => {
    const correctPlace = getRandomHidingSpot();
    handleGuess('shell3', correctPlace);
});

/* Display Functions */

function getRandomHidingSpot() {
    const hidingPlaces = ['shell1', 'shell2', 'shell3'];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    const correctPlace = hidingPlaces[index];

    return correctPlace;
}
function handleGuess(userGuess, correctPlace) {
    resetStyles();

    if (correctPlace === userGuess) {
        wins++;
    } else {
        losses++;
    }

    total++;

    correctGuessesEl.textContent = wins;
    incorrectGuessesEl.textContent = losses;
    totalGuessesEl.textContent = total;

    const correctSection = document.getElementById(`${correctPlace}-section`);

    correctSection.classList.add('pearl');
}

function resetStyles() {
    shell1Section.classList.remove('pearl');
    shell2Section.classList.remove('pearl');
    shell3Section.classList.remove('pearl');
}

// (don't forget to call any display functions you want to run on page load!)
