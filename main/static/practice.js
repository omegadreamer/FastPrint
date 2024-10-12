import { WordListRus, WordListEng } from "./WordList.js" //list of all words


// Const
const inputbox = document.getElementById("InputBox");
const restart = document.getElementById("Restart");
const lenguage = document.getElementById("Lenguage")


// Variables
let text = "";
let words_count = 25;
let current_lenguage = 1;
let startTime;
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
console.log(Object.keys(lenguages).length)

// Random words from 'WordList' function
function GetRandomWords() {
  let cur_list = lenguages[String(current_lenguage)]['list']
  inputbox.value = "";
  text = "";
  for (let i = 0; i < words_count; i++) {
    text += cur_list[Math.floor(Math.random() * cur_list.length)] + " ";
  }
  document.getElementById('Words').innerHTML = text;
};GetRandomWords();


// Active words amount
document.getElementById("WordsCount").addEventListener("click", function(event) {
  if (words_count != event.target.innerHTML){
    words_count = event.target.innerHTML;
    GetRandomWords();
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
  GetRandomWords();
});


// Restart button
restart.addEventListener('click', GetRandomWords);


// Typing process
inputbox.addEventListener('input', function(event) {
  let input_half = String(inputbox.value);
  let words = "";

  if(text.slice(0, text.length-1) == inputbox.value){
    GetRandomWords();
  }else if(text.slice(0, input_half.length) == inputbox.value){
    words = String('<Correct>' + text.slice(0, input_half.length) + '</Correct>' + text.slice(input_half.length, text.length));
    document.getElementById("Words").innerHTML = words;
  }else{
    let wrong_half = String(inputbox.value);
    for (let i = 0; inputbox.value[i] == text[i]; i++){wrong_half = wrong_half.replace(inputbox.value[i], "")};
      words = String('<Correct>' + text.slice(0, input_half.length - wrong_half.length)+ '</Correct>' + '<False>' + wrong_half + '</False>' + text.slice(input_half.length - wrong_half.length, text.length));
    document.getElementById("Words").innerHTML = words;
  };
});