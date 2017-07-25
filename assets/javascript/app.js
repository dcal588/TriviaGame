$ (document).ready( function(){
	var choicesMemory = [];
	var timeCounter = 30;
	var intervalId;
	$("#restart").on("click", stop);

	function run() {
		intervalId - setInterval(countDown, 1000);
	}

	function countDown() {
		timeCounter--
		$("#timer").html(timeCounter);
		if(timeCounter === 0) {
			stop();
			$("#messageBox").html("Time Up!");
		}
	}
	function stop() {
		clearInterval(intervalId);
	}
	$('#options input').on('change', function() {
   var choice = $('input[name=radioName]:checked','#options').val();
	choicesMemory.push(choice);
	console.log(choicesMemory);
});
	run();
});