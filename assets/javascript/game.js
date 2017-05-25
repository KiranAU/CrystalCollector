$( document ).ready(function(){
 
// function to generate randomNumbers within a specific range

function generateRandNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// random number between 19-120 to match
var numberToMatch = generateRandNum(19,120);
//random number display on screen
$("#numberToMatch").text(numberToMatch);

// random number between 1-12 for the jewels

var num1 = generateRandNum(1,12);
var num2 = generateRandNum(1,12);
var num3 = generateRandNum(1,12);
var num4 = generateRandNum(1,12);

// wins and losses tracking
var total = 0;
var wins = 0;
var losses = 0;
// wins and losses display on screen
$("#counterWins").text(wins);
$("#counterLosses").text(losses);

//resets the game
function reset(){
	  numberToMatch = generateRandNum(19,120);
      $("#numberToMatch").text(numberToMatch);
      console.log(numberToMatch);
      num1 = generateRandNum(1,12);
      num2 = generateRandNum(1,12);
      num3 = generateRandNum(1,12);
      num4 = generateRandNum(1,12);
      total= 0;
      $("#total").text(total);
      }

//add wins to total
function winDeclare(){
alert("You won!");
  wins++; 
  $('#counterWins').text(wins);
  reset();
}

//addes the losses to the total
function loserDeclare(){
alert ("You lose!");
  losses++;
  $('#counterLosses').text(losses);
  reset()
}

//sets up click for jewels
  $('#one').on("click", function(){
    total = total + num1;
    console.log("New total= " + total);
    $('#total').text(total); 
          //sets win/lose conditions
        if (total === numberToMatch){
          winDeclare();
        }
        else if ( total > numberToMatch){
          loserDeclare();
        }  
  })

$('#two').on("click", function(){
    total = total + num2;
    console.log("New total= " + total);
    $('#total').text(total); 
          //sets win/lose conditions
        if (total === numberToMatch){
          winDeclare();
        }
        else if ( total > numberToMatch){
          loserDeclare();
        }  
  })


$('#three').on("click", function(){
    total = total + num3;
    console.log("New total= " + total);
    $('#total').text(total); 
          //sets win/lose conditions
        if (total === numberToMatch){
          winDeclare();
        }
        else if ( total > numberToMatch){
          loserDeclare();
        }  
  })


$('#four').on("click", function(){
    total = total + num4;
    console.log("New total= " + total);
    $('#total').text(total); 
          //sets win/lose conditions
        if (total === numberToMatch){
          winDeclare();
        }
        else if ( total > numberToMatch){
          loserDeclare();
        }  
  });



});
