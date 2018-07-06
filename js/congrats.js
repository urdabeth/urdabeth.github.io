window.onload = function() {
    startBounce();
}

function startBounce() {
    var bounce = document.getElementById("bounce");

    const xMin = -10;
    let xMax = 0;
    let xPosition = 0;
    let xIncrease = true;

    const yMin = -10;
    let yMax = 0;
    let yPosition = 0;
    let yIncrease = true;

    let rAngle = 0;
    let rDirection = true;

    setInterval(function() {
        bounce.style.left = xPosition + "px";
        bounce.style.top = yPosition + "px";
        bounce.style.transform = "rotate(" + rAngle + "deg)";

        xMax = window.innerWidth - bounce.width - xMin;
        yMax = window.innerHeight - bounce.height - yMin;

        if (xPosition > window.innerWidth) {
            xPosition = 0;
        }

        if (yPosition > window.innerHeight) {
            yPosition = 0;
        }

        if ((xPosition == xMin) || (xPosition == xMax)) {
            xIncrease = !xIncrease;
            rDirection = !rDirection;
        }

        if ((yPosition == yMin) || (yPosition == yMax)) {
            yIncrease = !yIncrease;
            rDirection = !rDirection;
        }

        if (xIncrease) {
            xPosition++;
        } else {
            xPosition--;
        }

        if (yIncrease) {
            yPosition++;
        } else {
            yPosition--;
        }

        if (rDirection) {
            rAngle++;
        } else {
            rAngle--;
        }
    }, 10);
}