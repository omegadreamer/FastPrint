const Text = 'с другой стороны постоянный количественный рост и сфера нашей активности';
const Words = Text.replace(/\S+/g, "<span>$&</span>")
;

// Variables
let startTime;
let inputbox = document.getElementById("InputBox");

document.getElementById("Words").innerHTML = Words
console.log(document.getElementById("Words").innerHTML);

document.getElementById("InputBox").addEventListener('input', function(event) {
  if(Text.slice(0, String(inputbox.value).length) == inputbox.value){
    console.log("Праильна");
  }

  else{
    console.log("Непраильна");
  }
  console.log("текст - " + Text.slice(0, String(inputbox.value).length))
  console.log("ввод - " + inputbox.value)
});