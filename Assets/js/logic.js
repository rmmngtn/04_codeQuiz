//Select start button and store
var startBtn = document.getElementById("start"); 
var questionsElement = document.getElementById("questions");

//call startQuiz function on button click 
startBtn.onclick = satrtQuiz; 

//function for kicking off the quiz
function startQuiz() { 
    var startScreen = document.querySelector("#start-screem"); 
    startScreen.setAttribute("class", "hide");

    //Unhide the questions
    questionsElement.removeAttribute("class")
}