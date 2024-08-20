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

// Placeholder functions and variables
let counter; // Will be defined by the timer functions
let timeText = document.querySelector(".timer .time-left"); // Adjust this selector based on your actual HTML
let widthValue = 0; // Initialize as per your logic

// on Click function to go from Info Section => Quiz Section
startBtn.onclick = () => { 
    infoSection.classList.remove("activeInfo");
    quizSection.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

const restart_Btn = resultSection.querySelector(".restart-btn");

// on Click function to restart the quiz
restart_Btn.onclick = () => {
    window.location.reload();
}

const next_btn = document.querySelector("footer .next-btn");
const question_count = document.querySelector("footer .total-questions");

next_btn.onclick = () => {
    if (questionCount < totalQuestions.textContent - 1) {
        questionCount++;
        questionNumber++;
        showQuestions(questionCount);
        queCounter(questionNumber);
        clearInterval(counter);
        startTimer(timeValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        showResult();
    }
}

function showQuestions(index){
    const question_txt=document.querySelector(".question-txt")

    let quesiton_tag = '<span>'+questions[index].numb+". "+questions[index].questions + '</span>';
    let option_tag = '<div class = "option"></span>' + questions[index].options[0]+'</span><div>' 
    + '<div class = "option"></span>' + questions[index].options[1]+'</span><div>'
    + '<div class = "option"></span>' + questions[index].options[2]+'</span><div>' 
    + '<div class = "option"></span>' + questions[index].options[3]+'</span><div>';
    question_txt.innerHTML = quesiton_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for (i=o; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

}
