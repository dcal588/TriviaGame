$ (document).ready( function(){
	var questions = ["Question1", "Question2", "Question3", "Question4", "Question5"];
	var rightAnswers = ["rightAnswer1", "rightAnswer2", "rightAnswer3", "rightAnswer4", "rightAnswer5"];
	var wrongAnswers = ["wrongAnswer1a", "wrongAnswer1b", "wrongAnswer1c", "wrongAnswer2a", "wrongAnswer2b", "wrongAnswer2c", "wrongAnswer3a", "wrongAnswer3b", "wrongAnswer3c", "wrongAnswer4a", "wrongAnswer4b", "wrongAnswer4c", "wrongAnswer5a", "wrongAnswer5b", "wrongAnswer5c" ];
	var choicesMemory = [];
	var timeCounter = 30;
	var intervalId;
	var questionNumber = 0;
	var numberRight = 0;
	var numberWrong = 0;
	
//	$("#restart").on("click", stop);

	$('#options input').on('change', function() {
   var choice = $('input[name=radioName]:checked','#options').val();
	choicesMemory.push(choice);
	restart();
	});

	function run() {
		intervalId = setInterval(countDown, 1000);
	}

	function countDown() {
		timeCounter--
		$("#timer").html(timeCounter);
		if(timeCounter === 0) {
			stop();
			$("#messageBox").html("Time Up!");
		}
	}
	function restart() {
		clearInterval(intervalId);
		timeCounter = 30;
		$("#timer").html(timeCounter);
		placer();
		run();
	}
	function placer() {
		$("questionBox").html("questions[questionNumber]");
		console.log(questionNumber);
	}
	placer();
	run();
});
