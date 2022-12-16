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