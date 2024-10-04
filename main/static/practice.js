// Selectors
const Words = document.getElementById("Words");

Words.textContent = "С другой стороны постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития. Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Товарищи! укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании форм развития."

// Variables
let startTime;
let words = Words.textContent;
let inputbox = document.getElementById("InputBox");

document.getElementById("InputBox").addEventListener('input', function(event) {
  console.log(words)
  if(inputbox.value != words){
    console.log(inputbox.value)
  }
});