
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
let userScore = parseInt.document.getElementById("user-score").innerText


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
        let finalResult = document.getElementById("final-result");
        finalResult.classList.remove("hide");
    questionArea.classList.add("hide");
    nextQuestion.classList.add("hide");
    submitButton.classList.add("hide");
    restartQuiz.classList.remove("hide");
    incorrectAnswerAlert.classList.add("hide")
    correctAnswerAlert.classList.add("hide")
    return
        //display the final score
        // hide the quiz area, show the restart button
    }
    let currentQuestion = QUESTIONS[questionIndex];
    questionInnerText.innerText = currentQuestion.question
    answerOne.innerText = currentQuestion.option1
    answerTwo.innerText = currentQuestion.option2
    answerThree.innerText = currentQuestion.option3
    answerFour.innerText = currentQuestion.option4
    toggleOptions(false);
    toggleNextButton(true);

    submitButton.classList.add("hide")
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
    submitButton.classList.remove("hide")
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
5. Restart button appears when all questions in the array have been answered.
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
        correctAnswerAlert.classList.remove("hide")
        incrementScore()
    }  else {
        incorrectAnswerAlert.classList.remove("hide")
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
    userScore = `${userScore}`;
}

/**
1. Restart button appears when all questions in the array have been answered.
2. When clicked, the function resets the user score and question index
3. Displays question area again and hides the other elements,

**/
function onRestartQuiz() {
    location.reload();
    return false;  
}

/**
1. 
2. Load next set of question and answer from question Index
3. When quiz has run through all questions, next button is hidden
**/
function onUserClickNextButton() {
    questionIndex++;
    displayQuestion();
    correctAnswerAlert.classList.add("hide")
    incorrectAnswerAlert.classList.add("hide")
}

window.addEventListener('DOMContentLoaded', initializeQuiz);