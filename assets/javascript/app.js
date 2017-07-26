$ (document).ready( function(){
	var questions = ["Question1", "Question2", "Question3", "Question4", "Question5"];
	var rightAnswers = ["rightAnswer1", "rightAnswer2", "rightAnswer3", "rightAnswer4", "rightAnswer5"];
	var wrongAnswers = ["wrongAnswer1a", "wrongAnswer1b", "wrongAnswer1c", "wrongAnswer2a", "wrongAnswer2b", "wrongAnswer2c", "wrongAnswer3a", "wrongAnswer3b", "wrongAnswer3c", "wrongAnswer4a", "wrongAnswer4b", "wrongAnswer4c", "wrongAnswer5a", "wrongAnswer5b", "wrongAnswer5c"];
	var choicesMemory = [];
	var timeCounter = 30;
	var intervalId;
	var questionNumber = 0;
	var numberRight = 0;
	var numberWrong = 0;
	var position = [1, 2, 3, 4];
	var positionTracker = [];
	
//	$("#restart").on("click", stop);

	$('#options input').on('change', function() {
   var choice = $('input[name=radioName]:checked','#options').val();
	choicesMemory.push(choice);
	$(this).checked = false;  
	if (choice === answerPosition){
		numberRight++
	}
	else {
		numberWrong++
	}
	next();
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
	function next() {
		clearInterval(intervalId);
		timeCounter = 30;
		$("#timer").html(timeCounter);
		questionNumber++
		placer();
		run();
	}

	function placer() {
		for (i=0; i<(position.length-1); i++) {
		do {
			var randomPosition = Math.floor(Math.random() * position.length);
		   }
		while (isPositionAssigned(){
		       	$("#choice"+ i).html(wrongAnswers[(questionNumber/.5)+questionNumber]);
			positionTracker.push(randomPosition);
	
	function isPositionAssigned () {
		for (var i = 0; i < positionTracker.length; i++) {
			if (questionTracker(i) === randomPosition) {
				return true;
			}
		}
		return false;
	}
		
		       
		
// 		var fakeAnswerPosition = Math.floor(Math.random() * 4) + 1;
// 		var wrongOnePosition = (((fakeAnswerPosition+1) % fakeAnswerPosition)+1);
// 		var wrongTwoPosition = (((fakeAnswerPosition+2) % fakeAnswerPosition)+1);
// 		var wrongThreePosition = (((fakeAnswerPosition+3) % fakeAnswerPosition)+1);
// 		answerPosition = 10-(wrongOnePosition+wrongTwoPosition+wrongThreePosition)
// 		console.log(fakeAnswerPosition);
// 		console.log(wrongOnePosition);
// 		console.log(wrongTwoPosition);
// 		console.log(wrongThreePosition);
// 		console.log(answerPosition);
		
// 		$("#questionBox").html(questions[questionNumber]);
// 		$("#choice"+ answerPosition).html(rightAnswers[questionNumber]);
// 		$("#choice"+ wrongOnePosition).html(wrongAnswers[(questionNumber/.5)+questionNumber]);
// 		$("#choice"+ wrongTwoPosition).html(wrongAnswers[(questionNumber/.5)+(questionNumber+1)]);
// 		$("#choice"+ wrongThreePosition).html(wrongAnswers[(questionNumber/.5)+(questionNumber+2)]);
// 	}
	console.log(numberRight);
	placer();
	run();
});
