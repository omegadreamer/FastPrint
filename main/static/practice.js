import { WordListRus, WordListEng } from "./WordList.js" //list of all words


// Const
const inputbox = document.getElementById("InputBox");
const restart = document.getElementById("Restart");


// Variables
let text = ""
let words_count = 25;
let Current_Lenguage = WordListEng
let startTime;

// Random words from 'WordList' function
function GetRandomWords() {
  inputbox.value = ""
  text = ""
  for (let i = 0; i < words_count; i++) {
    text += Current_Lenguage[Math.floor(Math.random() * Current_Lenguage.length)] + " ";
  }
  document.getElementById('Words').innerHTML = text
};GetRandomWords()


// Active words amount
document.getElementById("WordsCount").addEventListener("click", function someFunction(event) {
  if (words_count != event.target.innerHTML){
    words_count = event.target.innerHTML
    GetRandomWords()
  }
})


// Restart button
restart.addEventListener('click', GetRandomWords)


// Typing process
document.getElementById("InputBox").addEventListener('input', function(event) {
  let input_half = String(inputbox.value)
  let words = "";

  if(text.slice(0, text.length-1) == inputbox.value){
    GetRandomWords()
  }
  else if(text.slice(0, input_half.length) == inputbox.value){
    words = String('<Correct>' + text.slice(0, input_half.length) + '</Correct>' + text.slice(input_half.length, text.length))
    document.getElementById("Words").innerHTML = words;
  }
  else{
    let wrong_half = String(inputbox.value)
    for (let i = 0; inputbox.value[i] == text[i]; i++) {
      wrong_half = wrong_half.replace(inputbox.value[i], "")}
      words = String('<Correct>' + text.slice(0, input_half.length - wrong_half.length)+ '</Correct>' + '<False>' + wrong_half + '</False>' + text.slice(input_half.length - wrong_half.length, text.length))
    document.getElementById("Words").innerHTML = words;
  }
});