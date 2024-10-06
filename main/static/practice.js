const Text = 'с другой стороны постоянный количественный рост и сфера нашей активности';

// Variables
let startTime;
let inputbox = document.getElementById("InputBox");

document.getElementById("InputBox").addEventListener('input', function(event) {
  let input_length = String(inputbox.value).length
  if(Text.slice(0, input_length) == inputbox.value){
    console.log("Праильна");
    Words = String('<Correct>' + Text.slice(0, input_length) + '</Correct>' + Text.slice(input_length, Text.length))
  }

  else{
    let wrong = String(inputbox.value)
    br = 0
    for (let i = 0; inputbox.value[i] == Text[i]; i++) {
      wrong = wrong.replace(inputbox.value[i], "")
    }
    
    console.log(wrong.length)
    console.log(input_length)
    Words = String(Text.slice(0, input_length - wrong.length) + '<False>' + wrong + '</False>' + Text.slice(input_length - wrong.length, Text.length))
    console.log("Непраильна");
  }

  document.getElementById("Words").innerHTML = Words;
  console.log(Words);
  console.log("текст - " + Text.slice(0, input_length))
  console.log("ввод - " + inputbox.value)
});