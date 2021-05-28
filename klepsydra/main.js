counterSeconds = 0;

runCount = 0;


audioStart = new Audio('button-3.mp3');
audioEnd = new Audio('clong-1.mp3');

startCounter = () => {
    
    runCount++;
    
    counterSeconds = getInitialTime();
    
    audioEnd.pause();
    audioEnd.currentTime = 0;
    audioStart.play();

    updateCounterText(runCount);
}

getInitialTime = () => {
    
    var counterFromQueryString = getParameterByName('czas');
    
    if(counterFromQueryString != null){
        return parseInt(counterFromQueryString);    
    }
    
    return 64;
}

setCounterText = x => {
    var counterTextDiv = document.getElementById("licznik");

    counterTextDiv.innerHTML = x;
}

updateCounterText = (runNumber) => {

    if(runNumber != runCount){
        return;
    }
    
    setCounterText(counterSeconds);

    counterSeconds = counterSeconds - 1;

    if (counterSeconds >= 0) {
        setTimeout(() => updateCounterText(runNumber), 1000);
    } else {
        audioEnd.play();
    }
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

counterSeconds = getInitialTime();
setCounterText(counterSeconds);