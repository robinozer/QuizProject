// Create array of quiz questions and answer options

let QUESTIONS = [{
    question: "What country has the highest life expectancy?",
    option1: "Spain",
    option2: "Norway",
    option3: "Japan",
    option4: "Hong Kong",
    correctAnswer: "Hong Kong",
    correctOption: 4
},

{
    question: "What year was the United Nations established?",
    option1: "1920",
    option2: "1930",
    option3: "1945",
    option4: "1955",
    correctAnswer: "1945",
    correctOption: 3
},

{
    question: "In what country would you find Mount Kilimanjaro?",
    option1: "Tanzania",
    option2: "Ghana",
    option3: "Wakanda",
    option4: "South Africa",
    correctAnswer: "Tanzania",
    correctOption: 1
},

{
    question: "What is the largest Spanish-speaking city in the world?",
    option1: "Barcelona, Spain",
    option2: "Mexico City, Mexico",
    option3: "Havana, Cuba",
    option4: "Santo Domingo, Dominican Republic",
    correctAnswer: "Mexico City, Mexico",
    correctOption: 2
},

{
    question: "Who famously crossed the Alps with elephants on the way to war with the Romans?",
    option1: "Caesar",
    option2: "Hannibal",
    option3: "Cicero",
    option4: "Spartacus",
    correctAnswer: "Hannibal",
    correctOption: 2
},

{
    question: "In which country is the Armenian sacred mountain, mount Ararat, located?",
    option1: "Armenia",
    option2: "Iran",
    option3: "Georgia",
    option4: "Turkey",
    correctAnswer: "Turkey",
    correctOption: 4
},

{
    question: "Which Sultan of the Ottoman Empire conquered Constantinople?",
    option1: "Sultan Murad IV",
    option2: "Suleiman the Magnificent",
    option3: "Sultan Mehmed II",
    option4: "Beyazit II",
    correctAnswer: "Sultan Mehmed II",
    correctOption: 3
},
]

// create variables retrieving the DOM elements 

let startQuiz = document.getElementById("start");
let submitButton = document.getElementById("submit");
let nextQuestion = document.getElementById("next");
let restartQuiz = document.getElementById("restart");

let scoreArea = document.getElementById("score-area");
let maxScore = document.getElementById("max-score");

let questionArea = document.getElementById("question-area");
let questionInnerText = document.getElementById("question");
let answers = document.getElementsByClassName("answers");
for (let i = 0; i < answers.length; i++)

var answerOne = document.getElementById("option1");
var answerTwo = document.getElementById("option2");
var answerThree = document.getElementById("option3");
var answerFour = document.getElementById("option4");

let resultAnswer = document.getElementById("result-answer");
let correctAnswerAlert = document.getElementById("correct");
let incorrectAnswerAlert = document.getElementById("incorrect");

let score = 0;
let questionIndex = 0;
let currentQuestion = 0;
let userAnswer = null;

let correctAnswer;
let userScore = document.getElementById("user-score").innerText


/**
 When content is loaded, connected to DOMContentLoaded
 event listeners for buttons
 */
function initializeQuiz() {
    startQuiz.addEventListener("click", onStartQuiz);
    restartQuiz.addEventListener("click", onRestartQuiz);
    submitButton.addEventListener("click", onUserSubmit);
    nextQuestion.addEventListener("click", onUserClickNextButton);
    Array.from(answers).forEach(function(element) {
    element.addEventListener("click", onUserSelection);
    });

}
/**  
 1. Hide nav buttons when quiz starts and show question area
 2. Fetch current question from questions index array
 3. Set the question span text to question key
 4. Fetch answer options and set each */
function onStartQuiz(event) {
    startQuiz.classList.add("hide");
    questionArea.classList.remove("hide");
    nextQuestion.classList.add("hide");
    submitButton.classList.remove("hide");
    scoreArea.classList.remove("hide");
    displayQuestion();
}

function displayQuestion() {
    clearSelectionOfOptions();
    if (questionIndex == QUESTIONS.length) {
        //display the final score
        // hide the quiz area
    }
    let currentQuestion = QUESTIONS[questionIndex];
    questionInnerText.innerText = currentQuestion.question
    answerOne.innerText = currentQuestion.option1
    answerTwo.innerText = currentQuestion.option2
    answerThree.innerText = currentQuestion.option3
    answerFour.innerText = currentQuestion.option4
    toggleOptions(false);
    toggleNextButton(true);
}

function toggleNextButton(hide) {
    if (hide) {
        nextQuestion.classList.add("hide");
    } else {
        nextQuestion.classList.remove("hide");
    }
}

function toggleOptions(disableOptions) {
    answerOne.disabled = disableOptions;
    answerTwo.disabled = disableOptions;
    answerThree.disabled = disableOptions;
    answerFour.disabled = disableOptions;
    submitButton.disabled = disableOptions;
}

/**
1. When user clicks an answer option, 
    the clicked option stays red until changed or submitted
2. user´s answer stored in variable userAnswer
**/
function onUserSelection(event) {
    userAnswer = event.target.innerText
    clearSelectionOfOptions();
    event.target.classList.add("user-selection");
}

function clearSelectionOfOptions() {
    Array.from(answers).forEach(function(element) {
    element.classList.remove("user-selection");
    element.classList.remove("correct-option");
    });
}

/**
1. Compare the value of the submitted answer to correctAnswer
2. If answer is correct, alert user and increment userScore with 1
3. If else, alert user
4. Next button shows up when user clicks Submit button
**/
function onUserSubmit(event){
    toggleOptions(true);
    toggleNextButton(false);

    let currentQuestion = QUESTIONS[questionIndex];
    displayCorrectOption(currentQuestion)
    console.log(userAnswer); 
    console.log(correctAnswer);

    if (userAnswer == correctAnswer) {
        console.log("correct answer")
        incrementScore()
    }
}

function displayCorrectOption(currentQuestion) {
    let correctOption = currentQuestion.correctOption
    if (correctOption == 4) {
        answerFour.classList.add("correct-option");
    } else if (correctOption == 3) {
        answerThree.classList.add("correct-option");
    } else if (correctOption == 2) {
        answerTwo.classList.add("correct-option");
    } else if (correctOption == 1) {
        answerOne.classList.add("correct-option");
    }

    correctAnswer = currentQuestion.correctAnswer;
}

function incrementScore() {
    console.log(userScore);
    userScore++;
    userScore.innerText = ;
}

/**
1. Restart button appears when all questions in the array have been answered.
2. When clicked, the function resets the user score and question index
3. Displays question area again and hides the other elements,

**/
function onRestartQuiz() {
    startQuiz.classList.add("hide");
    restartQuiz.classList.remove("hide");
    questionArea.classList.remove("hide");
    nextQuestion.classList.remove("hide");
}

/**
1. 
2. Load next set of question and answer from question Index
3. When quiz has run through all questions, next button is hidden
**/
function onUserClickNextButton() {
    questionIndex++;
    displayQuestion();


}

window.addEventListener('DOMContentLoaded', initializeQuiz);