const Text = 'liberal hit cry root default threshold legend earthwax repetition radiation qualified leash lend rib authority union blonde sister plagiarize resource collar fist arrest start miracle';

// Variables
let startTime;
let inputbox = document.getElementById("InputBox");


document.getElementById("InputBox").addEventListener('input', function(event) {
  let input_half = String(inputbox.value)

  if(Text.slice(0, input_half.length) == inputbox.value){
    console.log("Праильна");
    Words = String('<Correct>' + Text.slice(0, input_half.length) + '</Correct>' + Text.slice(input_half.length, Text.length))}

  else{
    let wrong_half = String(inputbox.value)
    for (let i = 0; inputbox.value[i] == Text[i]; i++){
      wrong_half = wrong_half.replace(inputbox.value[i], "")
    }

    console.log("Непраильна");
    Words = String('<Correct>' + Text.slice(0, input_half.length - wrong_half.length)+ '</Correct>' + '<False>' + wrong_half + '</False>' + Text.slice(input_half.length - wrong_half.length, Text.length))
  }

  document.getElementById("Words").innerHTML = Words;
});