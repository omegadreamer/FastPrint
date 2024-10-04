// Selectors
const completedLeters = document.querySelector('#completedLeters')
const currentLetter = document.querySelector('#currentLetter')
const remainingLetters = document.querySelector('#remainingLetters')
const accuracyPercentage = document.querySelector('#accuracyPercentage')
const grossWPM = document.querySelector('#grossWPM')
const body = document.querySelector('body')
const inputBox = document.querySelector('.inputBox')
const tapScreen = document.querySelector('.tapScreen')

// Variables
let startTime;
let AccuracyCounterWrong = 0;
let AccurayCounterTotal = 0;
let correctLetterCounter = 0;
let currentWordLength = 1;
let currentLetterCorrect = true;

let margin = window.getComputedStyle(completedLeters)['margin-left']
margin = parseInt(margin.substring(0, margin.length - 2))
const fontWidth = window.innerWidth > 700 ? 21.6 : 11.6

const paragraph = 'Абоба интернет-мем, возникший в 2021 году после появления шуточного видео с участием вымышленного кандидата в президенты России по фамилии Абоба'
currentLetter.textContent = paragraph[0]
remainingLetters.textContent = paragraph.slice(1)

body.addEventListener('click', () => {
  inputBox.focus()
  tapScreen.style.display = 'none'
})

document.addEventListener('keypress', (event) => {
  if (AccurayCounterTotal === 0) { //start timer if it is first keypress on page refresh
    startTime = Date.now()
  }
  AccurayCounterTotal++;

  if (event.key == currentLetter.textContent) { //if key is correct, move current letter to completedLetters. Then update remainingLetters
    const letter = document.createElement('span');
    letter.textContent = currentLetter.textContent;
    completedLeters.appendChild(letter)
    currentLetter.textContent = remainingLetters.textContent[0];
    remainingLetters.textContent = remainingLetters.textContent.slice(1);

    if (currentLetterCorrect) { //if no errors on particular letter
      letter.classList.add('right');
    } else {  //if there were errors
      letter.classList.add('wrong');
    }

    if (event.key === ' ') { //update position of word once it is completed
      margin = margin - currentWordLength*fontWidth;
      completedLeters.style.marginLeft = `${margin}px`;
      currentWordLength = 0;
    }

    currentWordLength++;
    currentLetterCorrect = true;
    correctLetterCounter++;
    updateGrossWPM(correctLetterCounter, startTime);
    updateAccuracy(AccuracyCounterWrong, AccurayCounterTotal);

  } else { //if key is wrong
    currentLetterCorrect = false;
    AccuracyCounterWrong++;
    updateAccuracy(AccuracyCounterWrong, AccurayCounterTotal);
  }
})

function updateAccuracy(errors, total){
  let score = ((total - errors) / total) * 100;
  score = Math.round(score);
  accuracyPercentage.textContent = `${score}%`;
}

function updateGrossWPM(count, startTime){
  let time = Date.now() - startTime;
  time = time/60000;
  gross = ((count/5)/time);
  gross = Math.round(gross);
  grossWPM.textContent = gross;
}