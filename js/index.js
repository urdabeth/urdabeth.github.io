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
for (var i = 0; i < 10; i++) {
	images[i] = new Image();
	images[i].src = './assets/images/image' + i + '.png';
}
$(document).ready(function() {
	var index = 0;
	var message = $('.message');
	var media = $('.media');
	var greeting = $('#greeting');
	var image = $('#image');
	message.on('click', function() {
		message.css('color', '#4cd5ab');
		setTimeout(function() {
			message.css('color', '#666');
		}, 100);
		audio.currentTime = 0;
		audio.play();
		media.fadeOut(500, function() {
			greeting.text(greetings[index]);
			image.attr('src', images[index].src);
			media.fadeIn(500);
			index = (index == 9) ? 0 : (index + 1);
		});
	});
});
