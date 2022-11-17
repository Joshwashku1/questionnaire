// Query selectors
var startQuiz = document.querySelector(".start-quiz-btn");
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".questions");
var optionList = document.querySelector(".q-options");
var qContainer = document.querySelector(".q-container");
var isCorrect = document.querySelector(".right-wrong");
var oContainer = document.querySelector(".o-container");
var main = document.querySelector(".main");
var highScore = document.querySelector(".highscore");


var timerCount = 75;
// check to see what question to render
var questionCount = 0;
// check on the status of the option click
var optionClick = false;
console.log('This option click is ' + optionClick);
let submitBtn;
var clickBtn = document.querySelector(".submit-btn");
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
    answer: 'a conditional statement',
    getAnswer : function(){
        return this.answer;
    },
    getQuestion : function(){
        return this.question;
    }
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
    answer: 'the count variable',
    getAnswer : function(){
        return this.answer;
    },
    getQuestion : function(){
        return this.question;
    }
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
    oContainer.style.display = "none";
    highScore.style.display = "none";
    timerElement.innerHTML = timerCount;
}

// Start quiz function: when this function is called upon it will start the quiz

function sartQuiz() {
    
    optionClick = true;
    startQuiz.style.display = "none";
    
    timerCountdown();
    renderStart();

}

// add event listener to call the function when click
startQuiz.addEventListener("click", sartQuiz);

// add a function to start a timer
function timerCountdown(){

    
    startTimer = setInterval(function(){

        timerCount--;
        timerElement.innerHTML = timerCount;
        if(timerCount > 0 && questionCount <= questionArray.length - 1 ){
            
        }else if(timerCount === 0 || timerCount < 0 || questionCount >= questionArray.length - 1){
            isCorrect.style.display = 'none';
            renderF();
            clearInterval(startTimer);
            timerElement.innerHTML = 0;
        
        }

    }, 1000);
     
}
console.log('question array # is: ' + questionArray.length);
// add a function to render the questions
function renderStart(){

    oContainer.style.display = "block";
    var optionArray = getOptions(questionArray);
    
    
    for(i=0;i<questionArray.length;i++){
        if(i == questionCount){
            var question = questionArray[i].getQuestion();
            questionElement.innerHTML = question
            console.log("this should be a question: " + questionElement);
            var items = optionArray[i].length
            console.log('length of items is ' + items);
            for(j=0;j<items;j++){
                var optionItem = document.createElement('button');
                optionItem.setAttribute('class','option-btn');
                optionItem.innerHTML = optionArray[i][j];
                console.log(optionArray[i][j]);
                optionList.appendChild(optionItem);
            }
            qContainer.appendChild(questionElement);
        }
        
    }

    
    
}
// Render submit form
function renderF(){
   let ibox = document.querySelector('#initials');
   ibox.setAttribute('placeholder','Thank you');
   
   highScore.appendChild(ibox);

   submitBtn = document.createElement('button');
   submitBtn.setAttribute('class','submit-btn');
   submitBtn.innerHTML = "Submit";
   highScore.appendChild(submitBtn);

   main.appendChild(highScore);

   let scoreCard = document.querySelector('#score-num');
   scoreCard.textContent = 'Your score is: ' + timerCount;
   highScore.style.display = "block";
}

// function storeLocalRender(){

// }

// clickBtn.addEventListener('click',storeLocalRender);

// function handling if click on Option button the answer is true
function clickOpt(event){
    
    let targetOption = event.target;
    var correctStatus = document.createElement('p');
    // check to see if the click event is true or false
    if(isAnswer(targetOption,getAnswers(questionArray))){
        optionClick = true;
        correctStatus.textContent = 'You selected the correct Answer!';
        questionCount++;
        clear();
        if(questionCount <= questionArray.length - 1){
        renderNext();
        }
    } else {
        // reset click to false for next question
        optionClick = false;
        correctStatus.textContent = 'You selected the wrong Answer!';
        questionCount++;
        timerCount = timerCount - 5;
        clear();
        if(questionCount <= questionArray.length - 1){
            renderNext();
        }
    }
    isCorrect.appendChild(correctStatus);  
    console.log('This option click is ' + optionClick);
}

// render the next question
function clear(){
    questionElement.textContent = '';
    // removes all our option buttons
    while(optionList.firstChild){
        optionList.removeChild(optionList.firstChild);
    }
    isCorrect.innerHTML = '';

}

// function renderNext
function renderNext(){
    var optionArray = getOptions(questionArray);
    
    // This traverses through the question object
    for(i=0;i<questionArray.length;i++){
        if(i === questionCount){
            var question = questionArray[i].getQuestion();
            questionElement.innerHTML = question
            console.log("this should be a question: " + questionElement);
            var items = optionArray[i].length
            console.log('length of items is ' + items);
            // This grabs the nested answer objects in each of the question objects
            // Creates the answers into buttons
            for(j=0;j<items;j++){
                var optionItem = document.createElement('button');
                optionItem.setAttribute('class','option-btn');
                optionItem.innerHTML = optionArray[i][j];
                console.log(optionArray[i][j]);
                optionList.appendChild(optionItem);
            }
            qContainer.appendChild(questionElement);
        }
        
    }
}
console.log('This is a time count: ' + questionCount);
// checks to see if the answer clicked is true by checking if the event clicked has an innerhtml equivalent
// passes in an event, and an array object
function isAnswer(e,Array){
    var eventObj = e;
    if(Array.includes(eventObj.innerHTML)){
       return optionClick = true;
    }

}

// add an event listener to the option buttons
oContainer.addEventListener('click', clickOpt);


init();
