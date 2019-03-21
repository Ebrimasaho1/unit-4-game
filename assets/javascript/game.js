//global variables
var comGuess = "";
var wins = 0;
var losses = 0;
var crystalGuess = [];
var userScore = 0;

console.log("loaded")
//random number gebrator between 1-12 when crystals are clicked
var comGuess;
var crystalOne = Math.floor((Math.random() * 12) + 1);
var crystalTwo = Math.floor((Math.random() * 12) + 1);
var crystalThree = Math.floor((Math.random() * 12) + 1);
var crystalFour = Math.floor((Math.random() * 12) + 1);


//function for compGuess
//function randomNumGen(){
    console.log("insid randomNum")

    //computer random number generator
    comGuess = Math.floor((Math.random() * 120) + 19);
    
    $("#score").text(comGuess);


//function for on click event using attribute 
$(".crystalColor").click(function(){
    console.log("inside click")
    var crystalSelected= $(this).attr("data-crystal");
    console.log(crystalSelected);
    
    if (crystalSelected==="one") {
        userScore += crystalOne;
        
    }
    else if (crystalSelected==="two"){
        userScore += crystalTwo;
        
    
    }
    else if (crystalSelected==="three"){
        userScore += crystalThree;
    }
    else if (crystalSelected==="four") {
        userScore += crystalFour;
    }

    $("#finalScoreBoard").text(userScore);

    if (userScore===comGuess){
        wins++;
        $("#wins").text(wins); 
        $("#alert").text("You won!!");
    
    }
    if (userScore > comGuess) {
        losses++;
        $("#losses").text(losses);
        $("#alert").text("You lost!!");

        
    }   
   
});

$("#finalScoreBoard").text(userScore);

$("#score").text(comGuess);


//resetting game 
 $("#reset").click(function () {
    wins=0;
    losses=0;
    score=0;
    userScore=0;
    comGuess = Math.floor((Math.random() * 120) + 19);

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score").text(comGuess);
    $("#finalScoreBoard").text(userScore);
    $("#alert").text("");
    
});   
  


  console.log("end of code")

