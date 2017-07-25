$ (document).ready( function(){
	var choicesMemory = [];
	var timeCounter = 30;
	var intervalId;
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
		run();
	}
	run();
});