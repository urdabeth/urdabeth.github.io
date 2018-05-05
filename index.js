const audio = new Audio('audio.wav');	
const images = new Array();
images[0] = new Image();
images[0].src = 'image1.png';
images[1] = new Image();
images[1].src = 'image2.png';
images[2] = new Image();
images[2].src = 'image3.png';
	
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
				$('#instruction').html('<a href=".">Click here to reset</a>');
				$('#message').html('Happiest birthday, beth!');
				$('#message').attr('class', 'happiest-birthday');
			} else if (count > 12) {
				$('#message').html('Happier birthday, beth!');
				$('#message').attr('class', 'happier-birthday');
			} else {
				$('#message').html('Happy birthday, beth!');
				$('#message').attr('class', 'happy-birthday');
			}
			
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

