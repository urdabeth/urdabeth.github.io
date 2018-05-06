const audio = new Audio('./assets/audio/audio.wav');	
const images = [];
images[0] = './assets/images/image0.png';
images[1] = './assets/images/image1.png';
images[2] = './assets/images/image2.png';
images[3] = './assets/images/image3.png';
images[4] = './assets/images/image4.png';
images[5] = './assets/images/image5.png';
images[6] = './assets/images/image6.png';
images[7] = './assets/images/image7.png';
images[8] = './assets/images/image8.png';
images[9] = './assets/images/image9.png';
const greetings = []
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
	setIntervalImages();
	$('.center').on('click', function() {
		audio.currentTime = 0;
		audio.play();		
		clearInterval(interval);
		$('#greeting').text(greetings[index - 1]);
		$('.bubble').slideDown(500, function() {
			setTimeout(function() {
				$('.bubble').slideUp(500);				
				setIntervalImages();
			}, 1000)
		});
	})
	function setIntervalImages() {
		interval = setInterval(function() {
			changeImages();
		}, 1000);
	}
	function changeImages() {
		$('#image').attr('src', images[index]);	
		index = (index == 9) ? 0 : (index + 1);
	}
});
