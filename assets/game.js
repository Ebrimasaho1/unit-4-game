//variables that links js to the html docs
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var comGuess = document.getElementById("score");
var firstImgText = document.getElementById("finalScoreBoard");
var secImgText = document.getElementById("finalScoreBoard");
var thirdImgText = document.getElementById("finalScoreBoard");
var forthImgText = document.getElementById("finalScoreBoard");


//global variables
var userGuess = "";
var ComGuess = "";
var wins = 0;
var losses = 0;

//function for compGuess
function randomNumGen(){
    var comGuess = Math.floor((Math.random() * 100) + 1);
}

//function for computer random letter generator by crystals
//for first crystal 
$("#firstImg").click(function(){
    var CrystalOneGen = Math.floor((Math.random() * 100) + 1);
  });

//for second crystal
$("#secImg").click(function(){
    var CrystalTwoGen = Math.floor((Math.random() * 100) + 1);
  });

//for third crystal
$("#thirdImg").click(function(){
    var CrystalThreeGen = Math.floor((Math.random() * 100) + 1);
  });

//for forth crystal
$("forth").click(function(){
    var CrystalFourGen = Math.floor((Math.random() * 100) + 1);
  });

  //calling functions
  randomNumGen();
