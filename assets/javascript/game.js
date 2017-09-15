//creates variable for the game
var crystalOne = Math.ceil(Math.random() * 12);
var crystalTwo = Math.ceil(Math.random() * 12);
var crystalThree = Math.ceil(Math.random() * 12);
var crystalFour = Math.ceil(Math.random() * 12);
var currentScore = 0;
var wins = 0;
var losses = 0;
var randomNumber = (Math.ceil(Math.random() * 60))+40;



//fills in randonNumber array from 19 to 120
/*for (var i = 19; i <= 120; i++){
    randomNumberOptions.push(i);
  }

//select a number from randomNumberOptions array and insert to getThisNumber variable
var getThisNumber = randomNumberOptions[Math.floor(Math.random() * randomNumberOptions.length)];
console.log(getThisNumber);
*/
//function is run whenever user clicks on any crystal picture 

    //sets a random value to crystal one image
  
 function calculate(){
      if (currentScore == randomNumber){
          document.write("you win");
      }else if (currentScore > randomNumber){
              document.write("you lose");
        }
         
      };


$(document).ready(function(){
      
            
          $("#crystalone").on('click', 'img', function(){
            console.log("click");            
            currentScore = currentScore + crystalOne;
                         $("#currenttotal").html(currentScore);
            console.log(currentScore);
              calculate();
                        })
  
      $("#crystaltwo").on('click', 'img', function(){
            console.log("click");            
            currentScore = currentScore + crystalTwo;
                         $("#currenttotal").html(currentScore);
            console.log(currentScore);
           calculate();
                        })
      
      $("#crystalthree").on('click', 'img', function(){
            console.log("click");            
            currentScore = currentScore + crystalThree;
                         $("#currenttotal").html(currentScore);
            console.log(currentScore);
          calculate();
                        })
      
      $("#crystalfour").on('click', 'img', function(){
            console.log("click");            
            currentScore = currentScore + crystalFour;
                         $("#currenttotal").html(currentScore);
            console.log(currentScore);
          calculate();
                        })
      $("#randomnumber").html(randomNumber);
      
     
  
  
  
  
  
  });
    
    
   
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
//$("#random-number").html(getThisNumber);
    
    
    
    
    
    
    
    
    
    
    
//}):