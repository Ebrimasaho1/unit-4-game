//global variables
var comGuess = "";
var wins = 0;
var losses = 0;
var crystalGuess = [];
var userScore = 0;

console.log("loaded")
//variables that links js to the html docs
var comGuess;
var crystalOne = Math.floor((Math.random() * 12) + 1);
var crystalTwo = Math.floor((Math.random() * 12) + 1);
var crystalThree = Math.floor((Math.random() * 12) + 1);
var crystalFour = Math.floor((Math.random() * 12) + 1);


//function for compGuess
function randomNumGen(){
    console.log("insid randomNum")
    comGuess = Math.floor((Math.random() * 120) + 19);
    
    $("#score").text(comGuess);
    //console.log(comGuess);
}

//function for computer random letter generator by crystals
//for first crystal 
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
    }
    if (userScore > comGuess) {
        losses++;
        $("#losses").text(losses);
    }   
   
});

$("#finalScoreBoard").text(userScore);

$("#score").text(comGuess);
  
  


  console.log("end of code")

