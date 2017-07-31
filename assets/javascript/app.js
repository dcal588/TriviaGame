$ (document).ready( function(){	
	var questions = ["Question1", "Question2", "Question3", "Question4", "Question5"];
	var Answers = ["wrongAnswer1a", "wrongAnswer1b", "wrongAnswer1c", "rightAnswer1", "wrongAnswer2a", "wrongAnswer2b", "wrongAnswer2c", "rightAnswer2", "wrongAnswer3a", "wrongAnswer3b", "wrongAnswer3c", "rightAnswer3", "wrongAnswer4a", "wrongAnswer4b", "wrongAnswer4c", "rightAnswer4", "wrongAnswer5a", "wrongAnswer5b", "wrongAnswer5c", "rightAnswer5",];
	//var choicesMemory = [];
	var timeCounter = 30;
	var intervalId;
	var questionNumber = 0;
	var numberRight = 0;
	var numberWrong = 0;
	var position = [1, 2, 3, 4];
	var responsePlaced = [];
	
//	$("#restart").on("click", stop);

	$('#options input').on('change', function(i) {
   		var choice = i.currentTarget.nextSibling.innerHTML;
	  	//choicesMemory.push(choice);
		if (choice === Answers[3] || choice === Answers[7] || choice === Answers[11] ||choice === Answers[15]){
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
				questionNumber++
    	}
		}
	});

	function run() {
		intervalId = setInterval(countDown, 1000);
	}

	function countDown() {
		timeCounter--
		$("#timer").html(timeCounter);
		if(timeCounter === 0) {
			next();
			placer();
			if ($('#messageBox').css('display')==="block") {
				$("#messageBox").css("display", "none");
    	}
    	else {
    		$("#messageBox").css("display", "block");
				$("#message").text("Time Up!");
				questionNumber++
    	}
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
		 		$("#choice"+ randomPosition).html(Answers[(questionNumber*4)+i]);
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
