$ (document).ready( function(){	
	var questions = ["Question1", "Question2", "Question3", "Question4", "Question5"];
	var answers = ["wrongAnswer1a", "wrongAnswer1b", "wrongAnswer1c", "rightAnswer1", "wrongAnswer2a", "wrongAnswer2b", "wrongAnswer2c", "rightAnswer2", "wrongAnswer3a", "wrongAnswer3b", "wrongAnswer3c", "rightAnswer3", "wrongAnswer4a", "wrongAnswer4b", "wrongAnswer4c", "rightAnswer4", "wrongAnswer5a", "wrongAnswer5b", "wrongAnswer5c", "rightAnswer5",];
	//var choicesMemory = [];
	var timeCounter = 30;
	var intervalId;
	var questionNumber = 0;
	var numberRight = 0;
	var numberWrong = 0;
	var position = [1, 2, 3, 4];
	var responsePlaced = [];

	function ender() {

    		$("#messageBox").css("display", "block");
				$("#message").text("Game Over!");
				$("#correctAnswer").text("");
				$("#rightAnswerCount").text(numberRight);
				$("#wrongAnswerCount").text(numberWrong);
	}
	
//	$("#restart").on("click", stop);

	$('#options input').on('change', function(i) {
			if (questionNumber<questions.length) {
   			var choice = i.currentTarget.nextSibling.innerHTML;
	  	//choicesMemory.push(choice);
				if (choice === answers[3] || choice === answers[7] || choice === answers[11] ||choice === answers[15] ||choice === answers[19]){
					numberRight++
					$(this).prop('checked', false);
    			console.log("right:" + numberRight);
    			next();
    			placer();
      		if ($('#messageBox').css('display')==="block") {
						$("#messageBox").css("display", "none");
    			}
    			else {
    				$("#messageBox").css("display", "block");
						$("#message").text("Correct!");
						$("#correctAnswer").text("");
						$("#rightAnswerCount").text(numberRight);
						$("#wrongAnswerCount").text(numberWrong);
						questionNumber++
    			}
				}
				else {
					numberWrong++
					$(this).prop('checked', false);
    			console.log("wrong:"+numberWrong);
    			next();
      		placer();
      		if ($('#messageBox').css('display')==="block") {
						$("#messageBox").css("display", "none");
    			}
    			else {
    				$("#messageBox").css("display", "block");
						$("#message").text("Wrong!");
						$("#correctAnswer").text("Correct Answer was:" + answers[(questionNumber/.25)+3]);
						$("#rightAnswerCount").text(numberRight);
						$("#wrongAnswerCount").text(numberWrong);
						questionNumber++
    			}
				}
			}
			else {
			window.setTimeout(stop,4000);
			window.setTimeout(ender,5000);
			}
	});

	function run() {
		intervalId = setInterval(countDown, 1000);
	}
  function stop() {
    clearInterval(intervalId);
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
    			$("#messageBox").css("display", "block");
					$("#message").text("Time Up!");
					$("#correctAnswer").text("Correct Answer was:" + answers[(questionNumber/.25)+3]);
					$("#rightAnswerCount").text(numberRight);
					$("#wrongAnswerCount").text(numberWrong);
					questionNumber++
    		}
			}
		}
		else {
			window.setTimeout(stop,4000);
			window.setTimeout(ender,5000);
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
