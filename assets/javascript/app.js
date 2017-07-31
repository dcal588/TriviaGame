$ (document).ready( function(){	
	var questions = ["The Fantastic Four have the headquarters in what building?", "Thor has two war goats to pull his chariot. They are named:", "S.H.I.E.L.D.'s highest ranking agent is:", "Captain America was frozen in which war?", "Deadpool joined the Weapon X program because:"];
	var answers = ["Stark Tower", "Fantastic Headquarters", "Xavier Institute", "Baxter Building", "Thunder and Lightning", "Balder and Hermod", "Ask and Embla", "Toothgrinder and Toothgnasher", "Steven Rogers", "Peter Parker", "Natalia Romanova", "Nick Fury", "World War I", "Cold War", "American Civil War", "World War II", "He was forced to", "He thought it would be fun", "He wanted to fight for justice", "He had incurable cancer",];
	var timeCounter = 30;
	var intervalId;
	var questionNumber = 0;
	var numberRight = 0;
	var numberWrong = 0;
	var position = [1, 2, 3, 4];
	var responsePlaced = [];

	function ender() {
		if(timeCounter===0) {
    			$("#messageBox").css("display", "block");
			$("#message").text("Game Over!");
			$("#correctAnswer").text("");
			$("#rightAnswerCount").text("Number Right: " + numberRight);
			$("#wrongAnswerCount").text("Number Wrong: " + numberWrong);
			$("#restart").css("display", "block");
		}
	}

	function restart() {
		questionNumber=0;
		numberRight=0;
		numberWrong=0;
		next();
		placer();
		$("#messageBox").css("display", "none");
		$("#restart").css("display", "none");
    		responsePlaced = [];
	}
	
	$("#restart").on("click", restart);

	$('#options input').on('change', function(i) {
		if (questionNumber<questions.length) {
			var choice = i.currentTarget.nextSibling.innerHTML;
			if (choice === answers[3] || choice === answers[7] || choice === answers[11] ||choice === answers[15] ||choice === answers[19]){
				numberRight++
				$(this).prop('checked', false);
    				next();
    				placer();
      				if ($('#messageBox').css('display')==="block") {
					$("#messageBox").css("display", "none");
    				}
    				else {
    					$("#messageBox").css("display", "block");
					$("#message").text("Correct!");
					$("#correctAnswer").text("");
					$("#rightAnswerCount").text("Number Right: " + numberRight);
					$("#wrongAnswerCount").text("Number Wrong: " + numberWrong);
					questionNumber++
    				}
			}
			else {
				numberWrong++
				$(this).prop('checked', false);
    				next();
      				placer();
      				if ($('#messageBox').css('display')==="block") {
					$("#messageBox").css("display", "none");
    				}
    				else {
    					$("#messageBox").css("display", "block");
					$("#message").text("Wrong!");
					$("#correctAnswer").text("Correct Answer was:" + answers[(questionNumber/.25)+3]);
					$("#rightAnswerCount").text("Number Right: " + numberRight);
					$("#wrongAnswerCount").text("Number Wrong: " + numberWrong);
					questionNumber++
    				}
			}
		}
		else {
			stop();
			ender();
		}
	});

	function run() {
		intervalId = setInterval(countDown, 1000);
	}
  
	function stop() {
  		if(timeCounter===0) {
    			clearInterval(intervalId);
  		}
	}
	function countDown() {
		timeCounter--
		$("#timer").html(timeCounter);
		if (questionNumber<questions.length) {
			if(timeCounter === 0) {
				next();
				placer();
				if ($('#messageBox').css('display')==="block") {
					$("#messageBox").css("display", "none");
    				}
    				else {
					numberWrong++
    					$("#messageBox").css("display", "block");
					$("#message").text("Time Up!");
					$("#correctAnswer").text("Correct Answer was:" + answers[(questionNumber/.25)+3]);
					$("#rightAnswerCount").text("Number Right: " + numberRight);
					$("#wrongAnswerCount").text("Number Wrong: " + numberWrong);
					questionNumber++
    				}
			}
		}
		else {
			stop();
			ender();
		}
	}
	function next() {
		clearInterval(intervalId);
    		responsePlaced = [];
    		if ($('#messageBox').css('display')==="block") {
    			timeCounter = 30;
    		}
    		else {
    			timeCounter = 5;
    		}
		$("#timer").html(timeCounter);
		run();
	}
	
	function placer() {
		$("#questionBox").html(questions[questionNumber]);
		for (i=0; i < position.length; i++) {
			do {
				var randomPosition = Math.floor(Math.random() * position.length);
			}
			while (isPositionAssigned());
		 	$("#choice"+ randomPosition).html(answers[(questionNumber*4)+i]);
			responsePlaced.push(randomPosition); 
	  	}
		
		function isPositionAssigned () {
			for (i = 0; i < responsePlaced.length; i++) {
				if (randomPosition === responsePlaced[i]) {
					return true;
				}
			}
			return false;
		}
  	}
	placer();
	run();
});
