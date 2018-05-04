$(document).ready(function() {
	var ctx =  $('#canvas')[0].getContext('2d');
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.canvas.style = 'vertical-align: bottom;';
	var count = 0;
	var message = ['happy birthday, beth!', 'happier birthday, beth!','happiest birthday, beth!'];
	var messageClass = ['happy-birthday','happier-birthday', 'happiest-birthday'];
	var reset = ['', '', 'click me to reset'];
	var audio = new Audio('audio.wav');
	var images = new Array();
	images[0] = new Image();
	images[0].src = 'image1.png';
	images[1] = new Image();
	images[1].src = 'image2.png';
	images[2] = new Image();
	images[2].src = 'image3.png';
	$('#canvas').on('click', function(e) {
		if (count < 23) {
			count = count + 1;
			$('#count').text(count);
			var cat = Math.floor(count / (23 / 2));
			$('#message').text(message[cat]);
			$('#message').attr('class', messageClass[cat]);
			$('#reset').text(reset[cat]);
			audio.currentTime = 0;
			audio.play();
			var random = Math.floor(Math.random() * 3);
			var image = images[random];
			var x = Math.round(e.offsetX - (image.width / 2));
			var y = Math.round(e.offsetY - (image.height / 2));
			ctx.drawImage(image, x, y);
		}
	});
});