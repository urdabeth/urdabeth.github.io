const audio = new Audio('audio.wav');	
const images = new Array();
images[0] = new Image();
images[0].src = 'image1.png';
images[1] = new Image();
images[1].src = 'image2.png';
images[2] = new Image();
images[2].src = 'image3.png';
// TODO: ADD RANDOM GREETINGS
const greetings = new Array();
greetings[0] = 'Happy Birthday!';
greetings[1] = 'Happy Birthday!';
greetings[2] = 'Happy Birthday!';
	
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
			
			audio.currentTime = 0;
			audio.play();
			
			var image = images[Math.floor(Math.random() * images.length)];
			var x = Math.round(e.offsetX - (image.width / 2));
			var y = Math.round(e.offsetY - (image.height / 2));
			ctx.drawImage(image, x, y);
			
			if (count > 22) {
				$('#instruction').html('<a href=".">Click here to reset.</a>');
				$('#message').html('INSERT ULTIMATE GREETING HERE');
			} else {
				$('#message').html(greetings[Math.floor(Math.random() * greetings.length)]);
			}
			
			$('#message').animate({fontSize:'1.6em'}, 50);
			$('#message').animate({fontSize:'1.4em'}, 50);
		}
	});
});

