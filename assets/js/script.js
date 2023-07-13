const maintext = document.querySelector(".heading");
const option1 = document.querySelector("#choice1");
const option2 = document.querySelector("#choice2");
const option3 = document.querySelector("#choice3");
const option4 = document.querySelector("#choice4");
const picked = document.querySelectorAll(".pick");
const timeEl = document.querySelector(".score");
const startQuiz = document.querySelector(".start");
let quizOn = 0;
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function question1() {
  maintext.textContent =
    "In Generation 1, Aerodactyl's moveset contains no moves of which of the following types:";
  option1.textContent = "Fire";
  option2.textContent = "Rock";
  option3.textContent = "Psychic";
  option4.textContent = "Poison";
}

function question2() {
  maintext.textContent =
    "In Generation 1, Twineedle would be 'not very effective' against which of the following:";
  option1.textContent = "Venomoth";
  option2.textContent = "Gengar";
  option3.textContent = "Butterfree";
  option4.textContent = "Golbat";
}

function checkAnswer(event) {
  event.preventDefault();
}

function quizStart(event) {
  event.preventDefault();
  if (QuizOn === 0) {
    setTime();
  } else {
    return;
  }
}

startQuiz.addEventListener("click", quizStart);

picked.addEventListener("click", checkAnswer);
