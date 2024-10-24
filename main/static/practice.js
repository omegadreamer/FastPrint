import { WordListRus, WordListEng } from "./WordList.js"; //list of all words


// Const
const inputbox = document.getElementById("InputBox");
const restart = document.getElementById("Restart");
const lenguage = document.getElementById("Lenguage");
const Words = document.getElementById("Words");
const Mistakes = document.getElementById("Mistakes");
const CPM = document.getElementById("CPM");
const WPM = document.getElementById("WPM");



// Main variables
let text = "";
let words_count = 25;
let current_lenguage = 1;
let test_status = false;

// Stats
let mistakes = [0,0];
let timer = 0;

// Lenguages from WordList.js
let lenguages = {
  0:{
    list: WordListRus,
    name: 'Rus'
  },
  1:{
    list: WordListEng,
    name: 'Eng'
  }
};


// Timer
setInterval(function() {
  if(test_status){
    setTimeout(timer += 1)
  }
}, 1000);


// Random words from 'WordList' function
function GetRandomWords() {
  let cur_list = lenguages[String(current_lenguage)]['list']
  inputbox.value = "";
  text = "";
  for (let i = 0; i < words_count; i++) {
    text += cur_list[Math.floor(Math.random() * cur_list.length)] + " ";
  }
  return text;
};


// Active words amount
document.getElementById("WordsCount").addEventListener("click", function(event) {
  if (words_count != event.target.innerHTML){
    words_count = event.target.innerHTML;
    Restart();
  };
});


// Lenguage Switch
lenguage.addEventListener('click', function(event) {
  if (current_lenguage != Object.keys(lenguages).length -1){
    current_lenguage += 1;
  }else{
    current_lenguage = 0;
  };
  lenguage.textContent = String(lenguages[String(current_lenguage)]['name'])
  Restart();
});


// Restart
function Restart() {
  test_status = false;
  timer = 0;
  Words.innerHTML = GetRandomWords();
  mistakes = [0,0]
}Restart();

// Restart button
restart.addEventListener('click', Restart);


// Typing process
inputbox.addEventListener('input', function(event) {
  test_status = true;
  let input_half = String(inputbox.value);
  let words = "";
  if(text.length-1 == inputbox.value.length & !(Words.innerHTML.includes('<false>'))){
    FinishTyping();
  }else if(text.slice(0, input_half.length) == inputbox.value){
    words = String('<Correct>' + text.slice(0, input_half.length) + '</Correct>' + text.slice(input_half.length, text.length));
    Words.innerHTML = words;
  }else{
    let wrong_half = String(inputbox.value);
    for (let i = 0; inputbox.value[i] == text[i]; i++){wrong_half = wrong_half.replace(inputbox.value[i], "")};
      words = String('<Correct>' + text.slice(0, input_half.length - wrong_half.length)+ '</Correct>' + '<False>' + wrong_half + '</False>' + text.slice(input_half.length - wrong_half.length, text.length));
      Words.innerHTML = words;
  }
});


// Finish of typing
function FinishTyping() {
  let correct_words = text.length - mistakes[1];

  //CPM & WPM
  CPM.innerHTML = 'CPM ' + correct_words / (timer/60);
  WPM.innerHTML = 'WPM ' + (correct_words / (timer/60)) / 5;
  Mistakes.innerHTML = "MST " + '<span>' + mistakes[1] + '</span>';

  Restart()
}


// Mistake counter
inputbox.addEventListener('input', function(event) {
  if(Words.innerHTML.includes('<false>') & mistakes[0] == 0){
    // mistakes [0,1]
    mistakes[0] = 1;
    mistakes[1] += 1;
  }else if(!(Words.innerHTML.includes('<false>'))){
    mistakes[0] = 0;
  }
});