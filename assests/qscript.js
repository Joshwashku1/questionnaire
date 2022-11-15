// Query selectors
var startQuiz = document.querySelector(".start-quiz-btn");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".questions");
var optionList = document.querySelector(".q-options");

var timerCount = 75;

// initializes the page
function init(){
    optionList.style.display = "none";
    timerElement.innerHTML = timerCount;
}

// Start quiz function: when this function is called upon it will start the quiz

function sartQ() {
    

    startQuiz.style.display = "none";
    optionList.style.display = "block";
    timerCountdown();
    renderQ();

}

// add event listener to call the function when click
startQuiz.addEventListener("click", sartQ);

// add a function to start a timer
function timerCountdown(){

    
    startTimer = setInterval(function(){

        timerCount--;
        timerElement.innerHTML = timerCount;
        if(timerCount > 0){

        }else if(timerCount === 0){
            clearInterval(startTimer);
        
        }

    }, 1000);
     
}

// add a function to change through questions
function renderQ(){
    // var btn = document.createElement("button");
    // btn.textContent = "HI";
    // questionElement.appendChild(btn);
}

init();