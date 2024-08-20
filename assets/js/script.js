// Element Selection
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

let currentQuiz = 0;
let score = 0;
let timer;

startBtn.onclick = () => {
    infoSection.classList.remove('activeInfo');
    quizSection.classList.add('activeQuiz');
    loadQuiz();
}