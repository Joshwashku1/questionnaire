// Query selectors
var startQuiz = document.querySelector(".start-quiz-btn");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".questions");
var optionList = document.querySelector(".q-options");
var qContainer = document.querySelector(".q-container");
var isCorrect = document.querySelector(".right-wrong");
var oContainer = document.querySelector(".o-container");


var timerCount = 75;
// check on the status of the option click
var optionClick = false;
console.log('This option click is ' + optionClick);
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

function getAnswers(obj){
    var answerArray = [];
    for(i in obj){
        answerArray.push(obj[i].answer);
    }
    return answerArray;
}

console.log(getOptions(questionArray));


// initializes the page
function init(){
    optionList.style.display = "none";
    timerElement.innerHTML = timerCount;
}

// Start quiz function: when this function is called upon it will start the quiz

function sartQ() {
    
    optionClick = true;
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
    
    
    for(let i in questionArray){
        if(optionClick){
            var question = questionArray[i].question
            questionElement.innerHTML = question
            console.log("this should be a question: " + questionElement);
            var items = optionArray[i].length
            console.log('length of items is ' + items);
            for(j=0;j<items;j++){
                var optionItem = document.createElement('button');

                optionItem.innerHTML = optionArray[i][j];
                console.log(optionArray[i][j]);
                oContainer.appendChild(optionItem);
            }
            qContainer.appendChild(questionElement);

        }
        optionClick = false;
    }
    
}


// function handling if click on Option button the answer is true
function clickOpt(event){
    let targetOption = event.target;
    var correctStatus = document.createElement('p');
    // check to see if the click event is true or false
    if(isAnswer(targetOption,getAnswers(questionArray))){
        optionClick = true;
        correctStatus.textContent = 'You selected the correct Answer!';
        nextQ();
    } else {
        // reset click to false for next question
        optionClick = false;
        correctStatus.textContent = 'You selected the wrong Answer!';
        timerCount = timerCount - 5;
        nextQ();
    }
    isCorrect.appendChild(correctStatus);
    console.log('This option click is ' + optionClick);
}

// render the next question
function nextQ(){
    optionList.style.display = 'none';
}

// checks to see if the answer clicked is true
function isAnswer(objE,objA){
    var eventObj = objE;
    if(objA.includes(eventObj.innerHTML)){
       return optionClick = true;
    }

}

// add an event listener to the option buttons
oContainer.addEventListener('click', clickOpt);


init();