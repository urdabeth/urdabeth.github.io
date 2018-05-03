$(document).ready(function() {
    var ctx =  $('#canvas')[0].getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.style = 'vertical-align: bottom;';    
    var count = 0;
    var audio1 = new Audio('audio1.wav');
    var audio2 = new Audio('audio2.wav');
    var audio3 = new Audio('audio3.wav');
    var image1 = new Image();
    image1.src = 'image1.png';
    var image2 = new Image();
    image2.src = 'image2.png';
    var image3 = new Image();
    image3.src = 'image3.png';
    $('#canvas').on('click', function(e) {
        count = count + 1;
        $('#count').html(count);
        var audio = new Audio();
        var image = new Image();
        var centerClass = '';
        var centerHtml = '';
	if (count > 23) {
	    // TODO: SHOW FINAL MESSAGE THEN RELOAD OR STOP CANVAS ON CLICK AND DISPLAY RELOAD MESSAGE THEN RELOAD
	    location.reload();
	} else if (count > 22) {
            audio = audio3;
            image = image3;
            centerClass = 'happiest-birthday';
            centerHtml = 'happiest birthday, beth!';
        } else if (count > 12) {
            audio = audio2;
            image = image2;
            centerClass = 'happier-birthday';
            centerHtml = 'happier birthday, beth!';
        } else {
            audio = audio1;
            image = image1;
            centerClass = 'happy-birthday';
            centerHtml = 'happy birthday, beth!';
        }
        audio.currentTime = 0;
        audio.play();
        var x = Math.round(e.offsetX - (image.width / 2));
        var y = Math.round(e.offsetY - (image.height / 2));
        ctx.drawImage(image, x, y);
        $('#center').addClass(centerClass);
        $('#center').html(centerHtml);
    });
});