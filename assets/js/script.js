// create variables matching the order of the HTML doc

let startQuiz = document.getElementById("start");
let submitButton = document.getElementById("submit");
let nextQuestion = document.getElementById("next");
let restartQuiz = document.getElementById("restart");

let scoreArea = document.getElementById("score-area");
let userScore = document.getElementById("user-score");
let maxScore = document.getElementById("max-score");

let questionArea = document.getElementById("question-area");
let questionInnerText = document.getElementById("question");
let answers = document.getElementsByClassName("answers")

let answerOne = document.getElementById("option1");
let answerTwo = document.getElementById("option2");
let answerThree = document.getElementById("option3");
let answerFour = document.getElementById("option4");

let resultAnswer = document.getElementById("result-answer");
let correctAnswerAlert = document.getElementById("correct");
let incorrectAnswerAlert = document.getElementById("incorrect");

let score = 0;
let questionIndex = 0;
let currentQuestion = 0;
let userAnswer = null;

// Create array of quiz questions and answer options

let QUESTIONS = [{
        question: "What country has the highest life expectancy?",
        option1: "Spain",
        option2: "Norway",
        option3: "Japan",
        option4: "Hong Kong",
        correctAnswer: "Hong Kong",
    },

    {
        question: "What year was the United Nations established?",
        option1: "1920",
        option2: "1930",
        option3: "1945",
        option4: "1955",
        correctAnswer: "1945"
    },

    {
        question: "In what country would you find Mount Kilimanjaro?",
        option1: "Tanzania",
        option2: "Ghana",
        option3: "Wakanda",
        option4: "South Africa",
        correctAnswer: "Tanzania"
    },

    {
        question: "What is the largest Spanish-speaking city in the world?",
        option1: "Barcelona, Spain",
        option2: "Mexico City, Mexico",
        option3: "Havana, Cuba",
        option4: "Santo Domingo, Dominican Republic",
        correctAnswer: "Mexico City, Mexico"
    },

    {
        question: "Who famously crossed the Alps with elephants on the way to war with the Romans?",
        option1: "Caesar",
        option2: "Hannibal",
        option3: "Cicero",
        option4: "Spartacus",
        correctAnswer: "Hannibal"
    },

    {
        question: "In which country is the Armenian sacred mountain, mount Ararat, located?",
        option1: "Armenia",
        option2: "Iran",
        option3: "Georgia",
        option4: "Turkey",
        correctAnswer: "Turkey"
    },

    {
        question: "Which Sultan of the Ottoman Empire conquered Constantinople?",
        option1: "Sultan Murad IV",
        option2: "Suleiman the Magnificent",
        option3: "Sultan Mehmed II",
        option4: "Beyazit II",
        correctAnswer: "Sultan Mehmed II"
    },
]

// create event listeners for buttons

startQuiz.addEventListener("click", onStartQuiz);
restartQuiz.addEventListener("click", onRestartQuiz);
submitButton.addEventListener("click", onUserSubmit);
nextQuestion.addEventListener("click", onUserClickNextButton);
answers.addEventListener("click", onUserSelection);

// write functions for each

function onStartQuiz(event) {
    startQuiz.classList.add("hide");
    questionArea.classList.remove("hide");
    nextQuestion.classList.add("hide");
    submitButton.classList.remove("hide");
    scoreArea.classList.remove("hide");

    let currentQuestion = QUESTIONS[questionIndex];
    questionInnerText.innerText = currentQuestion.question
    answerOne.innerText = currentQuestion.option1
    answerTwo.innerText = currentQuestion.option2
    answerThree.innerText = currentQuestion.option3
    answerFour.innerText = currentQuestion.option4

/**
1. When user clicks an answer option, the option stays green, 
2. user´s answer in variable userAnswer
**/
function onUserSelection(event) {
    userAnswer = event.target.innerText
}

function onUserSubmit()

function onRestartQuiz()

function onUserClickNextButton()
