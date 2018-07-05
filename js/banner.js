window.onload = function() {
    var body = document.getElementById("body");
    for (let i = 0; i < 100; i++) {
        let top = (Math.floor(Math.random() * window.innerHeight) - 50) + "px";
        let left = (Math.floor(Math.random() * window.innerWidth) - 50) + "px";
        let img = document.createElement("img");
        img.src = "assets/images/icon.png";
        img.style.top = top;
        img.style.left = left;
        body.appendChild(img);
    }
}