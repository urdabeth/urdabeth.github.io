const audio = new Audio('./assets/audio/audio.wav');	
const images = new Array();
images[0] = './assets/images/image0.png';
images[1] = './assets/images/1.png';
images[2] = './assets/images/2.png';
images[3] = './assets/images/3.png';
images[4] = './assets/images/4.png';
images[5] = './assets/images/5.png';
images[6] = './assets/images/6.png';
images[7] = './assets/images/7.png';
images[8] = './assets/images/8.png';
images[9] = './assets/images/9.png';
const greetings = new Array();
greetings[0] = 'happy bark day';
greetings[1] = 'i wuff you';
greetings[2] = 'stay pawesome';
greetings[3] = 'ur pugtastic';
greetings[4] = 'wow';
greetings[5] = 'such bday';
greetings[6] = 'very celebrate';
greetings[7] = 'so cake';
greetings[8] = 'much age';
greetings[9] = 'ur a v v good one';
$(document).ready(function() {
	var index = 0;
	var interval;
	interval = setInterval(function() {
		changeImages();
	}, 1000);
	$('.center').on('click', function() {
		audio.currentTime = 0;
		audio.play();		
		clearInterval(interval);
		$('#greeting').text(greetings[index]);
		$('.bubble').slideDown(500, function() {
			setTimeout(function() {
				$('.bubble').slideUp(500);				
				interval = setInterval(function() {
					changeImages();
				}, 1000);
			}, 1000)
		});
	});

	function changeImages() {
		$('#image').attr('src', images[index]);	
		index = (index == 9) ? 0 : (index + 1);
	}
});

