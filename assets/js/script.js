const infoSection = document.querySelector('.info-section');
const quizSection = document.querySelector('.quiz-section');
const resultSection = document.querySelector('.result-section');
const startBtn = document.querySelector('.start-btn button');
const nextBtn = document.querySelector('.next-btn');
const restartBtn = document.querySelector('.restart-btn');
const questionTxt = document.querySelector('.question-txt');
const optionList = document.querySelector('.option-list');
const timerSec = document.querySelector('.time-sec');
const totalQuestions = document.querySelector('.total-questions');
const totalTxt = document.querySelector('.total-txt');

let timeValue = 15;
let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let counter;

const questions = [
    {
        numb: 1,
        question:"What is a group of crows called ?",
        answer:"A Murder",
        options:[
         "A Pack",
         "A Murder",
         "A Parade",
         "A Litter"
        ]
     },
     {
         numb: 2,
         question:"Compared to their body weight, what animal is the strongest ?",
         answer:"Dung Beetle",
         options:[
          "Dung Beetle",
          "Elephant",
          "Ant",
          "Cow"
         ]
      },
      {
         numb: 3,
         question:"How many dots appear on a pair of dice ?",
         answer:"42",
         options:[
          "36",
          "32",
          "46",
          "42"
         ]
      },
      {
         numb: 4,
         question:"Which is the only body part that is fully grown from birth ?",
         answer:"Eyes",
         options:[
          "Barin",
          "Lungs",
          "Eyes",
          "Stomach"
         ]
      },
      {
         numb: 5,
         question:"What is acrophobia a fear of ?",
         answer:"Heights",
         options:[
          "Heights",
          "Spiders",
          "Holes",
          "Water"
         ]
      },
];

// Start the quiz and show the first question
startBtn.onclick = () => { 
    infoSection.classList.remove("activeInfo");
    quizSection.classList.add("activeQuiz");
    showQuestions(0); 
    queCounter(1);
    startTimer(timeValue);
}

// Move to the next question or show results if it was the last question
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        questionNumber++;
        showQuestions(questionCount);
        queCounter(questionNumber);
        clearInterval(counter);
        startTimer(timeValue);
        timeText.textContent = "Time Left";
        nextBtn.classList.remove('show');
    } else {
        clearInterval(counter);
        showResult();
    }
}

// Restart the quiz by reloading the page
restartBtn.onclick = () => {
    window.location.reload(); // Reload the page to start over
}

// Function to display the current question and options
function showQuestions(index) {
    const questionTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    let optionTag = '';

    questions[index].options.forEach(option => {
        optionTag += `<div class="option">${option}</div>`;
    });

    questionTxt.innerHTML = questionTag;
    optionList.innerHTML = optionTag;

    const options = optionList.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = () => optionSelected(option, questions[index].answer);
    });
}

// Function to handle the selection of an option
function optionSelected(option, correctAnswer) {
    console.log("testing");
    
    clearInterval(counter); // Stop the timer when an option is selected

    if (option.textContent === correctAnswer) {
        option.classList.add('correct');
        userScore++;
    } else {
        option.classList.add('incorrect');
    }

    revealCorrectAnswers(correctAnswer);
    console.log("correct answer")
    nextBtn.classList.add('show');
}

// Function to disable all options and reveal the correct answer
function revealCorrectAnswers(correctAnswer) {
    console.log("hello tesitng")
    const options = optionList.querySelectorAll('.option');
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        // option.classList.add('disabled');
    });
}



// Function to show the result at the end of the quiz
function showResult() {
    quizSection.classList.remove('activeQuiz');
    resultSection.classList.add('activeResult');
    totalTxt.innerHTML = `<p>You got ${userScore} out of ${questions.length} correct!</p>`;
}

// Function to display the current question number and total questions
function queCounter(index) {
    totalQuestions.innerHTML = `<span>Question ${index} of ${questions.length}</span>`;
}


function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timerSec.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            revealCorrectAnswers(questions[questionCount].answer); 
            disableOptions(); 
            nextBtn.classList.add('show'); 
        }
    }
}

// disabling options 
function disableOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none'; 
    });
}

