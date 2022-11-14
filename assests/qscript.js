// Query selectors
var startQuiz = document.querySelector(".start-quiz");
var timerElement = document.querySelector(".timer-count");

var timerCount;

// Start quiz function: when this function is called upon it will start the quiz

function sartQ() {
    timerCount = 75;
    timer();

}

// add event listener to call the function when click
startQuiz.addEventListener("click", sartQ);

// add a function to start a timer
function timer(){

    
    start = setInterval(function(){
        timerCount--;
        timerElement.innerHTML = timerCount;
        if(timerCount === 0){
            clearInterval(start);
            
        }

    }, 1000);
     
}