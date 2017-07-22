<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Crystal Collector</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

	<div class="header">
		<h1>Crystal Collector!</h1>
	</div>
	<div class="instructions">
		<h2>Here is how the game is played</h2>
		</br></div>
	<div class="paragrafos">
		<p>You will be given a ramdom number at the start of the game.<span>"Number to Get"</span></p>

		<p>There are four crystals below. By clicking on a crystal you will<br /> add a specific amount of points to your score.</p>

		<p> You win the game by matching your total score to random number, you lose<br />the game if your total score goes above the random number.</p>

		<p> The value of each crystal is hidden from you until you click on it.</p>

		<p> Each time when the game starts, the game will change the value of each crystal</p>
	</div>
		<div class="lista">
		<ol>
			<li id="yellow">Yellow</li>
			<li id="green">Green</li>
			<li id="Red">Red</li>
			<li id="Blue">Blue</li>
		</ol>
		</div>
	</div>
	<div class="numberToMatch">
		<h2>Number To Get:
	<span id= "randomNumber"></span>
		</h2>
	</div>
	<div class="winsAndLosses">
		<h2>Wins:
			<span id= "numberWins"></span>
			</br>
			Losses: 
			<span id= "numberLosses"></span>
		</h2>
	</div>
	<div class="cores">
		<img src="file:///C:/Users/Caio%20Maciel/Desktop/gamejquqery1/assets/blue.jpg" class=gemImage id="one" alt="Blue Gem">
		<img src="file:///C:/Users/Caio%20Maciel/Desktop/gamejquqery1/assets/green.jpg" class=gemImage id="two" alt="Green Gem">
		<img src="file:///C:/Users/Caio%20Maciel/Desktop/gamejquqery1/assets/red.jpg" class=gemImage id= "three" alt="Red Gem">
		<img src="file:///C:/Users/Caio%20Maciel/Desktop/gamejquqery1/assets/yellow.jpg" class=gemImage id= "four" alt="Yellow Gem">
	</div>
	<div class="userTotal">
		<h2>Your total score is:
			<span id="finalTotal"></span>
		</h2>
	</div>
	
	<script type="text/javascript" src="js/jquery.js"></script>
</body>
</html>