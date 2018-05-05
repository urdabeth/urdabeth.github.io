const audio = new Audio('audio.wav');	
const images = new Array();
images[0] = new Image();
images[0].src = 'image1.png';
images[1] = new Image();
images[1].src = 'image2.png';
images[2] = new Image();
images[2].src = 'image3.png';
const greetings = new Array();
greetings[0] = 'Happy Birthday, Beth!';
greetings[1] = 'Happier Birthday, Beth!';
greetings[2] = 'Happiest Birthday, Beth!';
	
$(document).ready(function() {
	var count = 0;
	
	var ctx =  $('#canvas')[0].getContext('2d');
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.canvas.style = 'vertical-align: bottom;';
	
	$('#canvas').on('click', function(e) {
		if (count < 23) {
			count = count + 1;
			$('#count').text(count);		
			
			if (count > 22) {
				$('#instruction').html('<a href=".">Click here to reset.</a>');
				$('#message').html(greetings[2]);
				$('#message').attr('class', 'happiest-birthday');
			} else if (count > 12) {
				$('#message').html(greetings[1]);
				$('#message').attr('class', 'happier-birthday');
			} else {
				$('#message').html(greetings[0]);
				$('#message').attr('class', 'happy-birthday');
			}
			
			// TODO: ADD RANDOM GREETINGS
			//$('#message').html(greetings[Math.floor(Math.random() * greetings.length)]);
			
			audio.currentTime = 0;
			audio.play();
			
			var image = images[Math.floor(Math.random() * images.length)];
			var x = Math.round(e.offsetX - (image.width / 2));
			var y = Math.round(e.offsetY - (image.height / 2));
			ctx.drawImage(image, x, y);
		}
	});
});

