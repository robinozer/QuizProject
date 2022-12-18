// create variables retrieving the DOM elements 
let startQuiz = document.getElementById("start");
let submitButton = document.getElementById("submit");
let nextQuestion = document.getElementById("next");
let restartQuiz = document.getElementById("restart");

let scoreArea = document.getElementById("score-area");

let questionArea = document.getElementById("question-area");
let questionInnerText = document.getElementById("question");
let answers = document.getElementsByClassName("answers");

var answerOne = document.getElementById("option1");
var answerTwo = document.getElementById("option2");
var answerThree = document.getElementById("option3");
var answerFour = document.getElementById("option4");

let correctAnswerAlert = document.getElementById("correct");
let incorrectAnswerAlert = document.getElementById("incorrect");

let questionIndex = 0;
let currentQuestion = 0;
let userAnswer = null;

let correctAnswer;

let startInstruction = document.getElementById("start-instruction");
let quizInstruction = document.getElementById("quiz-instruction");

/*
 * Add event listeners for main buttons
 * Show instructions to start quiz
 * (See DOMContentLoaded at end of file)
 */
function initializeQuiz() {
    startQuiz.addEventListener("click", onStartQuiz);
    restartQuiz.addEventListener("click", onRestartQuiz);
    submitButton.addEventListener("click", onUserSubmit);
    nextQuestion.addEventListener("click", onUserClickNextButton);
    Array.from(answers).forEach(function(element) {
        element.addEventListener("click", onUserSelection);
    });

    startInstruction.classList.remove("hide");
}

/*
 * Show main quiz area with questions and score grid
 * Hide nav buttons (submit and next button),
 * Hide start instructions and show quiz instructions
 */
function onStartQuiz(event) {
    startQuiz.classList.add("hide");
    questionArea.classList.remove("hide");
    nextQuestion.classList.add("hide");
    scoreArea.classList.remove("hide");
    startInstruction.classList.add("hide");
    displayQuestion();
    quizInstruction.classList.remove("hide");
}


/*
 * When all questions have been answered
 * Display final score and result message,
 * Hide the quiz area and show the restart button
 */

function displayQuestion() {
    clearSelectionOfOptions();
    if (questionIndex == QUESTIONS.length) {
        let finalResult = document.getElementById("final-result");
        finalResult.classList.remove("hide");
        questionArea.classList.add("hide");
        nextQuestion.classList.add("hide");
        submitButton.classList.add("hide");
        restartQuiz.classList.remove("hide");
        incorrectAnswerAlert.classList.add("hide");
        correctAnswerAlert.classList.add("hide");

        return;
    }

/* 
 * Fetch current question from questions index array,
 * Set the question span text to question key,
 * Fetch answer options and set each
 * Hide submit button
 */
    let currentQuestion = QUESTIONS[questionIndex];
    questionInnerText.innerText = currentQuestion.question;
    answerOne.innerText = currentQuestion.option1;
    answerTwo.innerText = currentQuestion.option2;
    answerThree.innerText = currentQuestion.option3;
    answerFour.innerText = currentQuestion.option4;
    toggleOptions(false);
    toggleNextButton(true);

    submitButton.classList.add("hide");
}
//Hide Next button until answer is submitted.
function toggleNextButton(hide) {
    if (hide) {
        nextQuestion.classList.add("hide");
    } else {
        nextQuestion.classList.remove("hide");
    }
}

/* 
 * Disables answer options and submit button,
 * once answer is submitted.
 */
function toggleOptions(disableOptions) {
    answerOne.disabled = disableOptions;
    answerTwo.disabled = disableOptions;
    answerThree.disabled = disableOptions;
    answerFour.disabled = disableOptions;
    submitButton.disabled = disableOptions;
}

/*
 * User's answer stored in variable userAnswer.
 * Once user clicks an answer option, 
 * the option stays light green until changed or submitted.
 */
function onUserSelection(event) {
    userAnswer = event.target.innerText;
    clearSelectionOfOptions();
    event.target.classList.add("user-selection");
    submitButton.classList.remove("hide");
}

//Clear color marking the chosen answer, correct and incorrect
function clearSelectionOfOptions() {
    Array.from(answers).forEach(function(element) {
    element.classList.remove("user-selection");
    element.classList.remove("correct-option");
    });
    clearIncorrectOption();
}

/*
 * Compare the value of the submitted answer to correctAnswer
 * If answer is correct, user score is incremented
 * and user is alerted with message.
 * If answer is incorrect, user is alerted with message,
 * and function for incorrect message called, see below.
 * Next button shows up when user clicks Submit button
*/
function onUserSubmit(event){
    toggleOptions(true);
    toggleNextButton(false);

    let currentQuestion = QUESTIONS[questionIndex];
    displayCorrectOption(currentQuestion);

    if (userAnswer == correctAnswer) {
        correctAnswerAlert.classList.remove("hide");
        incrementScore();
    }  else {
        incorrectAnswerAlert.classList.remove("hide");
        displaySelectionAsIncorrect();
    }
}

/* 
 * Fetch correct option from array
 * Set each correct option to corresponding variable
 * Add css color to the respective correct answer
 */
function displayCorrectOption(currentQuestion) {
    let correctOption = currentQuestion.correctOption;
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

/* 
 * Fetch user´s selected answer
 * Remove css green color, used for correct answer,
 * Add css red color used for incorrect option.
*/
function displaySelectionAsIncorrect() {
    let userSelection = document.getElementsByClassName("user-selection")[0];
    userSelection.classList.remove("user-selection");
    userSelection.classList.add("incorrect-option");
}

// Clear red color showing incorrect answer
function clearIncorrectOption() {
let userSelection = document.getElementsByClassName("incorrect-option");
if (userSelection.length > 0) {
    userSelection[0].classList.remove("incorrect-option");
}
}

/* Fetch inner text of user score
 * Increment user score by 1
 * Set inner text of the element to the incremented score
 */ 
function incrementScore() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    userScore = userScore + 1;
    document.getElementById("user-score").innerText = userScore;
}

// Reloads the page for the user to start quiz again
function onRestartQuiz() {
    location.reload();
    return false;  
}

/* 
 * Load next set of question and answer from question index
 * Hide quiz instructions after first question
 */
function onUserClickNextButton() {
    questionIndex++;
    displayQuestion();
    quizInstruction.classList.add("hide");
    correctAnswerAlert.classList.add("hide");
    incorrectAnswerAlert.classList.add("hide");
    return;
}

window.addEventListener("DOMContentLoaded", initializeQuiz);