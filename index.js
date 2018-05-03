$(document).ready(function() {
	var ctx =  $('#canvas')[0].getContext('2d');
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	ctx.canvas.style = 'vertical-align: bottom;';    
	var count = 0;
	var audio = new Audio('audio.wav');
	var images = new Array();
	images[0] = new Image();
	images[0].src = 'image1.png';
	images[1] = new Image();
	images[1].src = 'image2.png';
	images[2] = new Image();
	images[2].src = 'image3.png';
	var centerClass = '';
	var centerText = '';
	var subcenterClass = 'hidden';
	$('#canvas').on('click', function(e) {
		var image = new Image();
		var random = Math.floor(Math.random() * 3);
		image = images[random];
		count = count + 1;
		if (count > 22) {
			centerClass = 'happiest-birthday';
			centerText = 'happiest birthday, beth!';
			subcenterClass = 'shown';
		} else if (count > 12) {
			centerClass = 'happier-birthday';
			centerText = 'happier birthday, beth!';
		} else {
			centerClass = 'happy-birthday';
			centerText = 'happy birthday, beth!';
		} 
		if (count < 24) {
			$('#count').text(count);
			audio.currentTime = 0;
			audio.play();
			var x = Math.round(e.offsetX - (image.width / 2));
			var y = Math.round(e.offsetY - (image.height / 2));
			ctx.drawImage(image, x, y);
			$('#centerText').attr('class', centerClass);
			$('#centerText').text(centerText);
			$('#subcenter').attr('class', subcenterClass);
		}
	});
});
