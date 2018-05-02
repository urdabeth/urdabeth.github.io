$(document).ready(function() {
    var ctx =  $('#canvas')[0].getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.style = 'vertical-align: bottom;';
    var count = 0;
    var audio = new Audio('audio.wav');
    var img = new Image();
    img.src = 'image.png';
    img.onload = function() {
        $('#canvas').on('click', function(e) {
            var x = Math.round(e.offsetX - (img.width / 2));
            var y = Math.round(e.offsetY - (img.height / 2));
            ctx.drawImage(img, x, y);
            audio.currentTime = 0;
            audio.play();
            count = count + 1;
            $('#count').html(count);
            if (count >= 50) {
                $('#center').addClass('happiest-birthday');
                $('#center').html('happiest birthday, beth!');
            } else if (count >= 40) {
                $('#center').addClass('happier-birthday');
                $('#center').html('happier birthday, beth!');
            } else if (count >= 23) {
                $('#center').addClass('happy-birthday');
                $('#center').html('happy birthday, beth!');
            }
        });
    };
});