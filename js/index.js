const audio = new Audio('./assets/audio/audio.wav');
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
greetings[9] = 'ur v v good boye';
const images = [];
const numbers = [];
for (var i = 0; i < 10; i++) {
	images[i] = new Image();
	images[i].src = './assets/images/image' + i + '.png';
	numbers[i] = i;
}
function shuffle() {
	var i = numbers.length;
	var j = 0;
	var temp = 0;
	while (i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = numbers[i];
		numbers[i] = numbers[j];
		numbers[j] = temp;
	}
}
$(document).ready(function() {
	shuffle();
	var count = 0;
	$('.message').on('click', function() {
		$('.message').css('color', '#4cd5ab');
		setTimeout(function() {
			$('.message').css('color', '#666');
		}, 100);
		audio.currentTime = 0;
		audio.play();
		$('.media').fadeOut(500, function() {
			$('#greeting').text(greetings[numbers[count]]);
			$('#image').attr('src', images[numbers[count]].src);
			$('.media').fadeIn(500);
		});
		if (count == 9) {
			count = 0;
			shuffle();
		} else {
			count = count + 1;
		}
	});
});
