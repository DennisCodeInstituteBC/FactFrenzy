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
let questions = []; // Define your questions array
let counter; // Will be defined by the timer functions
let counterLine; // Will be defined by the timer functions
let timeText = document.querySelector(".timer .time-left"); // Define this based on your HTML structure
let widthValue = 0; // Initialize as per your logic