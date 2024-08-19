// Element Selection
const infoSection = document.querySelector(".info-section");
const startBtn = document.querySelector(".info-section .start-btn button");
const quizSection = document.querySelector(".quiz-section");
const optionList = document.querySelector(".option-list");
const timeLine  = document.querySelector("header .time-line");
const timeTxt   = document.querySelector("header .time-left");
const timeNum   = document.querySelector("header .time-sec");

startBtn.onclick = ()=>{
    infoSection.classList.remove("activeInfo");
    quizSection.classList.add("activeQuiz")
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}