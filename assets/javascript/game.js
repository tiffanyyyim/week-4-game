//creates variable for the game
var crystalOne = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystalTwo = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystalThree = [1,2,3,4,5,6,7,8,9,10,11,12];
var crystalFour = [1,2,3,4,5,6,7,8,9,10,11,12];
var randomNumberOptions = [];
var currentScore = "";
var wins = 0;
var losses = 0;

//$(document).ready(function(){

//fills in randonNumber array from 19 to 120
for (var i = 19; i <= 120; i++){
    randomNumberOptions.push(i);
  }

//select a number from randomNumberOptions array and insert to getThisNumber variable
var getThisNumber = randomNumberOptions[Math.floor(Math.random() * randomNumberOptions.length)];
console.log(getThisNumber);

//function is run whenever user clicks on any crystal picture 
    //sets a random value to each crystal picture 
    //determines which picture was selected
    //places that crystal's numeric value unto the current total amount line 
        //checks if the current total amount is equal to getThisNumber
            //if equal then game is over and user wins, game reests
            //else if current total is greater than getThis Number 
                //then game is over and game resets 
            //else user can continue to guess, nothing happens 
    //user continues to click another crystal 
        //that crystal's numeric value is added to the current total amount 


//prints getThisNumber onto the webpage
$("#random-number").html(getThisNumber);
    
    
    
    
    
    
    
    
    
    
    
//}):