counterSeconds = 0;

startCounter = () => {

    counterSeconds = 5;

    updateCounterText();
}

updateCounterText = () => {

    var counterTextDiv = document.getElementById("counterText");

    counterTextDiv.innerHTML = counterSeconds;

    counterSeconds = counterSeconds - 1;

    if (counterSeconds >= 0) {
        setTimeout(updateCounterText, 1000);
    } else {
        var audio = new Audio('clong-1.mp3');
        audio.play();
    }
}