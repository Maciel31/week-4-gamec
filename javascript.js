$( document ).ready(function(){
  var Random=Math.floor(Math.random()*120+25)
  
  $('#randomNumber').text(Random);
  
  var number1= Math.floor(Math.random()*15+1)
  var number2= Math.floor(Math.random()*15+1)
  var number3= Math.floor(Math.random()*15+1)
  var number4= Math.floor(Math.random()*15+1)
  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reseting(){
      Random=Math.floor(Math.random()*120+25);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*15+1);
      number2= Math.floor(Math.random()*15+1);
      number3= Math.floor(Math.random()*15+1);
      number4= Math.floor(Math.random()*15+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 

function YouWon(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

function YouLost(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

  $('#numberone').on ('click', function(){
    userTotal = userTotal + number1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          YouWon();
        }
        else if ( userTotal > Random){
          YouLost();
        }   
  })  
  $('#numbertwo').on ('click', function(){
    userTotal = userTotal + number2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          YouWon();
        }
        else if ( userTotal > Random){
          YouLost();
        } 
  })  
  $('#numberthree').on ('click', function(){
    userTotal = userTotal + number3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal == Random){
          YouWon();
        }
        else if ( userTotal > Random){
          YouLost();
        } 
  })  
  $('#numberfour').on ('click', function(){
    userTotal = userTotal + number4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          YouWon();
        }
        else if ( userTotal > Random){
          YouLost();
        }
  });   
}); 