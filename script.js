var timer = document.getElementById('timer');
var day = 1000*60*60*24;
var hour = 1000*60*60;
var minute = 1000*60;
var second = 1000;
var diffTime = new Date(2017, 5, 26, 11).getTime() - new Date().getTime();

function getWithZero(number) {
    return number > 9 ? number : `0${number}`;
};

setInterval(() => {
    var days = Math.floor(diffTime/day),
    timeLeft = diffTime - days*day,
    hours = Math.floor(timeLeft/hour),
    timeLeft = timeLeft - hours*hour,    
    minutes = Math.floor(timeLeft/minute),
    timeLeft = timeLeft - minutes*minute,    
    seconds = Math.floor(timeLeft/second),
    time = [days, getWithZero(hours), getWithZero(minutes), getWithZero(seconds)];

    timer.innerText = time.join('  :  ');;
    diffTime -= second;
}, second);

