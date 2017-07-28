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
		}
		else {
			numberWrong++
			$(this).prop('checked', false);
    			console.log("wrong:"+numberWrong);
    			next();
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
			$("#messageBox").html("Time Up!");
		}
	}
	
	function next() {
		clearInterval(intervalId);
		timeCounter = 30;
		$("#timer").html(timeCounter);
		questionNumber++
		run();
    		console.log(questionNumber);
	}
  // function randomizer() {
  //     var randomPosition = Math.floor(Math.random() * position.length);
  //     isPositionAssigned(randomPosition);
  // }
  	function placer () {
		for (i=0; i < position.length; i++) {
        		var randomPosition = Math.floor(Math.random() * position.length);
        		console.log("randomPosition:"+randomPosition);
        		responsePlaced.push(randomPosition);
			if (responsePlaced[i] === randomPosition) {
          			$("#choice"+ randomPosition).html(Answers[(questionNumber*4)+i]);
			}
		}
  	}
  	console.log("ResponsePlaced:"+responsePlaced);
	// function placer() {
	// 	for (i=0; i < position.length; i++) {
	// 		do {
	// 			var randomPosition = Math.floor(Math.random() * position.length);
	// 	  }
	// 		while (isPositionAssigned());
	// 	 		$("#choice"+ randomPosition).html(Answers[(questionNumber*4)+i]);
	// 			questionPlaced.push(randomPosition); 
	// }
	// 	function isPositionAssigned () {
	// 		for (var i = 0; i < questionPlaced.length; i++) {
	// 			if (questionPlaced[i] === randomPosition) {
	// 				return true;
	// 			}
	// 		}
	// 		return false;
	// 	}
	// }
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
  	placer();
	run();
});
