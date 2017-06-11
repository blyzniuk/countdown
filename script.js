var timer = document.getElementById('timer'),
    day = 1000*60*60*24,
    hour = 1000*60*60,
    minute = 1000*60,
    second = 1000,
    diffTime = new Date(2017, 5, 26, 11).getTime() - new Date().getTime();

function getWithZero(number) {
    return number > 9 ? number : '0' + number;
}

setInterval(function() {
    var days = Math.floor(diffTime/day), timeLeft = diffTime - days*day,
    hours = Math.floor(timeLeft/hour), timeLeft = timeLeft - hours*hour,
    minutes = Math.floor(timeLeft/minute), timeLeft = timeLeft - minutes*minute,
    seconds = Math.floor(timeLeft/second),
    time = [days, getWithZero(hours), getWithZero(minutes), getWithZero(seconds)];

    timer.innerText = time.join('  :  ');
    diffTime -= second;
}, second);
