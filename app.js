/* Imports */
/* Get DOM Elements */
const shell1Section = document.getElementById('shell1-section');
const shell2Section = document.getElementById('shell2-section');
const shell3Section = document.getElementById('shell3-section');

const shell1Button = document.getElementById('shell1-button');
const shell2Button = document.getElementById('shell2-button');
const shell3Button = document.getElementById('shell3-button');

const correctGuesses = document.getElementById('correct-guesses');
const incorrectGuesses = document.getElementById('incorrect-guesses');
const totalGuesses = document.getElementById('total-guesses');

/* State */
let wins = 0;
let losses = 0;
let total = 0;

/* Events */
shell1Button.addEventListener('click', () => {
    handleGuess('shell1');
});

shell2Button.addEventListener('click', () => {
    handleGuess('shell2');
});

shell3Button.addEventListener('click', () => {
    handleGuess('shell3');
});

function handleGuess(userGuess) {
    shell1Section.classList.remove('pearl');
    shell2Section.classList.remove('pearl');
    shell3Section.classList.remove('pearl');

    const places = ['shell1', 'shell2', 'shell3'];

    const index = Math.floor(Math.random() * places.length);

    const correctPlace = places[index];

    const correctSection = document.getElementById(`${correctPlace}-section`);

    correctSection.classList.add('pearl');

    if (correctPlace === 'shell1') {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }

    totalGuesses++;

    correctGuesses.textContent = wins;
    incorrectGuesses.textContent = losses;
    totalGuesses.textContent = total;
}
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
