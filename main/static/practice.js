import { WordList } from "./WordList.js" //list of all words

// Const
const inputbox = document.getElementById("InputBox");
const restart = document.getElementById("Restart");

// Variables
let text = ""
let words_count = 25;
let startTime;

// Random words from 'WordList'
function GetRandomWords() {
  inputbox.value = ""
  text = ""
  for (let i = 0; i < words_count; i++) {
    text += WordList[Math.floor(Math.random() * WordList.length)] + " ";
  }
  document.getElementById('Words').innerHTML = text
};GetRandomWords()

// Restart button
restart.addEventListener('click', GetRandomWords)

// Typing process
document.getElementById("InputBox").addEventListener('input', function(event) {
  let input_half = String(inputbox.value)
  let words = "";

  if(text.slice(0, input_half.length) == inputbox.value){
    words = String('<Correct>' + text.slice(0, input_half.length) + '</Correct>' + text.slice(input_half.length, text.length))}

  else{
    let wrong_half = String(inputbox.value)
    for (let i = 0; inputbox.value[i] == text[i]; i++){
      wrong_half = wrong_half.replace(inputbox.value[i], "")
    }
    words = String('<Correct>' + text.slice(0, input_half.length - wrong_half.length)+ '</Correct>' + '<False>' + wrong_half + '</False>' + text.slice(input_half.length - wrong_half.length, text.length))
  }

  document.getElementById("Words").innerHTML = words;
});