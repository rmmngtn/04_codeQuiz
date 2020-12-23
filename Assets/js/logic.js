//Select start button and store
var startBtn = document.getElementById("start"); 
var questionsElement = document.getElementById("questions");
var questionTitle = document.getElementById("question-title"); 
var choices = document.getElementById("choices"); 
var userSelection = []; 
var currentQues = -1;
var rightAnswer;
var secondsLeft = 100;

//call startQuiz function on button click 
startBtn.addEventListener("click", startQuiz); 
startBtn.addEventListener("click", setTime);


//function for kicking off the quiz
function startQuiz() { 

    var startScreen = document.querySelector("#start-screen"); 
    startScreen.setAttribute("class", "hide");

    //Unhide the questions
    questionsElement.removeAttribute("class");
    getQuestions();  

} 

var timeEl = document.querySelector(".timer");
// var mainEl = document.getElementById("main");

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft ; 
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}


function getQuestions() { 
     currentQues++;
     choices.innerHTML = "";
    var currentQuestion = questions[currentQues]; 
    var currentAnswer = currentQuestion.choices;
    questionTitle.textContent = currentQuestion.title; 
    rightAnswer = currentQuestion.answer;

    for (i = 0; i < currentAnswer.length ; i++){
    
        var choiceBtn = document.createElement("button"); 
        choiceBtn.setAttribute("class", "choice");   
      choiceBtn.textContent = i + 1 + ". " + currentAnswer[i];

      // display on the page
      choices.appendChild(choiceBtn);
    }
    
  }
  
choices.addEventListener("click", function(event){

    if(rightAnswer === event.target.textContent){
        correctAnswer++;
        alert("CORRECT!");
    }
    else{
        alert("WRONNNGG");
        
    }

getQuestions();


})



