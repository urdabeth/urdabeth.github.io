var interval = null;
var set = true;
var count = 0;

function setImages() {
    set = false;

    interval = setInterval(function() {
        count++;

        if (count > 50) {
            clearInterval(interval);
        } else {
            let top = (Math.floor(Math.random() * window.innerHeight) - 50) + "px";
            let left = (Math.floor(Math.random() * window.innerWidth) - 50) + "px";
            let rotate = "rotate(" + (Math.floor(Math.random() * 360)) + "deg)";

            let img = document.createElement("img");
            img.src = "assets/images/icon.png";
            img.id = "image" + count;
            img.style.top = top;
            img.style.left = left;
            img.style.transform = rotate;

            document.body.appendChild(img);
        }
    }, 100);
}

function removeImages() {
    set = true;
    count = 0;
    clearInterval(interval);

    let images = document.getElementsByTagName("img");
    while (images.length > 0) {
        let id = images[images.length - 1].id;
        let image =  document.getElementById(id);
        image.parentNode.removeChild(image);
    }
}

window.onload = function() {
    document.body.addEventListener("click", function() {
        if (set) {
            setImages();
        } else {
            removeImages();
        }
    });
}