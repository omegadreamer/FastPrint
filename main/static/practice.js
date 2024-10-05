let Words = document.getElementById("Words");
const Text = "С другой стороны постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.";

// Variables
let startTime;
let inputbox = document.getElementById("InputBox");

Words.textContent = Text

document.getElementById("InputBox").addEventListener('input', function(event) {
  console.log(document.getElementById("Words"))
  if(Text.slice(0, String(inputbox.value).length) == inputbox.value){
    console.log("Праильна")
    console.log("текст - " + Text.slice(0, String(inputbox.value).length))
    console.log("ввод - " + inputbox.value)
  }

  else{
    console.log("Непраильна")
    console.log("текст - " + Text.slice(0, String(inputbox.value).length))
    console.log("ввод - " + inputbox.value)
  }
  
});