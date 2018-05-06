const audio = new Audio('audio.wav');	
const images = new Array();
images[0] = 'image1.png';
images[1] = 'image2.png';
images[2] = 'image3.png';
const greetings = new Array();
greetings[0] = 'happy bark day!';
greetings[1] = 'i wuff you!';
greetings[2] = 'stay pawesome!';
greetings[3] = 'wow!';
greetings[4] = 'such bday!';
greetings[5] = 'very celebrate!';
greetings[6] = 'so cake!';
greetings[7] = 'much age!';
$(document).ready(function() {
	$('.center').on('click', function() {				
		audio.currentTime = 0;
		audio.play();
		$('#image').attr('src', images[Math.floor((Math.random() * 1000) % (images.length))]);
		// TODO: ADD IMAGE TRANSITION
		$('#greeting').fadeOut(50, function() {
			$('#greeting').text(greetings[Math.floor((Math.random() * 1000) % (greetings.length))]);
			$('#greeting').slideDown(300);
		});
	});
});

