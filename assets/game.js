//global variables
var ComGuess = "";
var wins = 0;
var losses = 0;
var crystalGuess = [];
var total = 0;

//variables that links js to the html docs
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var comGuess = document.getElementById("score");
var total = document.getElementById("finalScoreBoard");
// var firstImgText = document.getElementById("finalScoreBoard");
// var secImgText = document.getElementById("finalScoreBoard");
// var thirdImgText = document.getElementById("finalScoreBoard");
// var forthImgText = document.getElementById("finalScoreBoard");


var firstClick = false;
var secClick = false;
var thirdClick =false;
var forthClick = false;
//function for compGuess
function randomNumGen(){
    var comGuess = Math.floor((Math.random() * 100) + 1);
}

//function for computer random letter generator by crystals
//for first crystal 
$("#firstImg").click(function(){
    firstClick = true;
    //var CrystalOneGen = Math.floor((Math.random() * 100) + 1);
  });

//for second crystal
$("#secImg").click(function(){
    secClick = true;
    //var CrystalTwoGen = Math.floor((Math.random() * 100) + 1);
  });

//for third crystal
$("#thirdImg").click(function(){
    thirdClick = true;
    //var CrystalThreeGen = Math.floor((Math.random() * 100) + 1);
  });

//for forth crystal
$("#forthImg").click(function(){
    forthClick = true;
    //var CrystalFourGen = Math.floor((Math.random() * 100) + 1);
  });

  //calling functions
  randomNumGen();

  if(firstClick || secClick || thirdClick || forthClick) {
    var crystalNumGen = Math.floor((Math.random() * 100) + 1);
    crystalGuess.push(crystalNumGen);
    console.log(crystalNumGen);
  };

  for (var i = 0; crystalGuess.length-1; i++){
    total += crystalGuess[i] << 0;

    if(comGuess===total){
        wins++;
        winsText.textContent = wins;
    }
    else{
        losses++;
        lossesText.textContent = losses;
    }
  }
