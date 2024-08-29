
// Variables to hold the elements from html file
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// hold the current question index and the score
let currentQuestionIndex = 0;
let score = 0;

// for starting and restarting the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    // When the quiz ends the next will display play again so when we restart we want it back to next
    nextButton.innerHTML = "التالي";
    showQuestion();
}

function showQuestion() {
    // before displaying the next question we want to reset previous question and answers
    resetState();
    // get the object from the array
    let currentQuestion = questions[currentQuestionIndex];
    // question number for display
    let questionNo = currentQuestionIndex +1;
    // update the question in the html file
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // to display the answers we create the buttons and add it to the parent div then add the event listner
    currentQuestion.answers.forEach(answer => {
        // creating the buttons
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        // to display the button inside the parent the div with id answer-buttons
        answerButtons.appendChild(button);
        if(answer.correct){// if it has some value
            // then add this value to the dataset
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display ="none";
    // to remove all the answers
    while(answerButtons.firstChild){//suppose it has child
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    // console.log(`yeah this is the element ${e.target} from the funtion selectAnswer`)
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        // the button selected is the correct answer!
        selectedBtn.classList.add("correct");
        confetti();
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // if we selected the wrong answer
    // we want to look for the correct answer and add the class correct to it
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    // to display the next button after an answer is selected wheather true or false
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `لقد حصلت على  ${score} من ${questions.length}!`
    nextButton.innerHTML = "جرب مرة أخرى";
    nextButton.style.display = "block";
}

function handleNextButton(){
    // increase the current question index on click next button 
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        // show the question with the updated current index
    }else{
        showScore();
    }
}




nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        // suppose no next question and we clicked on the button then it will restart the quiz
        startQuiz();
    }
})
startQuiz();
