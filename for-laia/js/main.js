// === CONSTANTS === //
const WORDS = [
  'HI',
  'BABY',
  'I LOVE YOU',
  'TO INFINITY',
  'AND BEYOND',
  'I AM',
  'FOREVER YOURS'
];

// const WORDS = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G'
// ];

// === STATES === //
let currentIndex; // to track which is the current word
let currentSecretWord;
let guessedWord;
let currentUsedLetters;

// === ELEMENTS === //
const startingScreenUI = document.getElementById('starting-screen');
const playingScreenUI = document.getElementById('playing-screen');
const loseScreenUI = document.getElementById('lose-screen');
const winScreenUI = document.getElementById('win-screen');

const guessedWordUI = document.getElementById('js-guess');
const playerUI = document.getElementById('js-player');

// === EVENTS === //
document.getElementById('js-keyboard')
  .addEventListener('click', handleKeyboardClick);

document.getElementById('js-play')
  .addEventListener('click', newGame);
document.getElementById('js-play-again')
  .addEventListener('click', newGame);

// === FUNCTIONS === //

// *** RENDERING
function renderScreen(screen, button = guessedWordUI) {
  // button parent is the current screen
  button.parentNode.classList.toggle('js--show-screen');

  switch (screen) {
    case 'playing':
      playingScreenUI.classList.toggle('js--show-screen');
      break;
    case 'lose':
      loseScreenUI.classList.toggle('js--show-screen');
      break;
    case 'win':
      winScreenUI.classList.toggle('js--show-screen');
      break;
  }
}

function renderGuess() {
  guessedWordUI.textContent = guessedWord;
  
  playerUI.classList.add(`p--${currentIndex}`);
}

// *** FUNCTIONALITY

// *** EVENTS
function newGame(event) {
  setNewWord(-1); // reset

  renderGuess();
  renderScreen('playing', event.target);
}

function handleKeyboardClick(event) {

  // exit if span of button wasn't clicked
  if (event.target.tagName !== 'SPAN') return;

  let letter = event.target.textContent;

  // exit if the letter clicked has already been used
  if (currentUsedLetters.includes(letter)) return;

  currentUsedLetters.push(letter);

  // check if letter is part of secret word
  if (currentSecretWord.includes(letter)) {
    // correct guess
    // placeholder to use later
    let newGuessedWord = '';
    // iterate through secret word
    for (let index in currentSecretWord) {
      // when that position is equal to the letter, set to the letter
      // else we keep the value of our main guessWord (underscore or other correct letter if any)
      newGuessedWord += currentSecretWord.charAt(index) === letter ? letter : guessedWord.charAt(index);
    }
    guessedWord = newGuessedWord;
    renderGuess();

    setTimeout(() => {
      if (guessedWord === currentSecretWord) {
        // word complete
  
        // update word if its not the last one 
        if (currentIndex !== WORDS.length - 1) {
          setNewWord(currentIndex);
    
          renderGuess();
        } else {
          // game won!
          renderScreen('win');
        }
      }
    }, 1000);


    
  } else {
    // wrong guess
    renderScreen('lose');
  }
}

function setNewWord(index) {
  currentIndex = index + 1;
  currentSecretWord = WORDS[currentIndex];

  guessedWord = '';
  for (let char of currentSecretWord) {
    // if its not a space, we append underscore _
    // if its a space, we append a space
    guessedWord += char === ' ' ? ' ' : '_';
  }

  currentUsedLetters = [];
}

