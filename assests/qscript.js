// Query selectors
var startQuiz = document.querySelector(".start-quiz-btn");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".questions");
var optionList = document.querySelector(".q-options");
var qContainer = document.querySelector("q-container");


var timerCount = 75;
// var qNum = questionArray.length;
// qContainer.setAttribute("style", "display: block; border: dashed;");

var questionArray = [
    {
    question: "What is an if statement?",
    options: [
        'a loop',
        'a return',
        'a conditional statement',
        'a string',
    ],
    answer: 'a conditional statement'
    }, 
    {
    question: "The usual purpose of statement 1, in a for loop, is to initialize ____. "+ 
                "[for(statement 1 ; statement2 ; statement 3 )]",
    options:[
        'the count variable',
        'the length variable',
        'the object variable',
        'the mt. dew variable'
    ],
    answer: 'the count variable'
    },
];

// grab the options
function getOptions(obj){
    var optionArray = [];
    var optionArrayValues = [];
    // convert option object to an array
    for(i in obj){
        optionArray.push(obj[i].options);
        console.log(obj[i].options)
    }
    console.log(optionArray);
    // push values of option object
    for(i=0; i<optionArray.length;i++){
        console.log(Object.values(optionArray[i]));
        optionArrayValues.push(Object.values(optionArray[i]));
    }
    return optionArrayValues;
}

console.log(getOptions(questionArray));

// function to check if the click is the answer
function isAnswer(obj){

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

    optionList.style.display = "block";
    
    var optionArray = getOptions(questionArray);

    // for loop to render options
    for(i=0;i<1;i++){
        questionElement.textContent = questionArray[i].question;
        var items = optionArray[i].length;
        console.log(items);
        console.log(optionArray)
        for(j=0;j<items;j++){
            var optionItem = document.createElement('button');

            optionItem.innerHTML = optionArray[0][j];
            console.log(optionArray[0][j]);
            optionList.appendChild(optionItem);
        }
    }

    

    
}



// add an event listener to the option buttons
optionList.addEventListener('click', function(event){

    var target = event.target;
    //if clicked value is true = next question no time taken off
    if(target){
    var yes = document.createElement('p')
    alert(yes.textContent = 'yes');
    }

    //if clicked value is false = next question time taken off
});


init();