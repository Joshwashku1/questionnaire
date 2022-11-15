// Query selectors
var startQuiz = document.querySelector(".start-quiz-btn");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".questions");
var optionList = document.querySelector(".q-options");

var timerCount = 75;

var questionArray = ["What is an if statement?", "The usual purpose of statement 1, in a for loop, is to initialize ____. "+ 
"[for(statement 1 ; statement2 ; statement 3 )]"];

var optionAnswers = {
}

// initializes the page
function init(){
    optionList.style.display = "none";
    timerElement.innerHTML = timerCount;
}

// Start quiz function: when this function is called upon it will start the quiz

function sartQ() {
    

    startQuiz.style.display = "none";
    
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

// add a function to render the questions
function renderQ(){
    // var btn = document.createElement("button");
    // btn.textContent = "HI";
    // questionElement.appendChild(btn);
    optionList.style.display = "block";
    questionElement.textContent = questionArray[1];

    // for loop to render options
    for(i=0;i<4;i++){
        optionItem = document.createElement('button');

        optionItem.innerHTML = "click me";

        optionList.appendChild(optionItem);
    }
}


init();