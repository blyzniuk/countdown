var timer = document.getElementById('timer'),
    title = document.getElementById('title')
    day = 1000*60*60*24,
    hour = 1000*60*60,
    minute = 1000*60,
    second = 1000,
    diffTime = new Date(2017, 5, 26, 11).getTime() - new Date().getTime();

function getWithZero(number) {
    return number > 9 ? number : '0' + number;
}

var timerId = setInterval(function() {
    var days = Math.floor(diffTime/day), timeLeft = diffTime - days*day,
    hours = Math.floor(timeLeft/hour), timeLeft = timeLeft - hours*hour,
    minutes = Math.floor(timeLeft/minute), timeLeft = timeLeft - minutes*minute,
    seconds = Math.floor(timeLeft/second),
    time = [days, getWithZero(hours), getWithZero(minutes), getWithZero(seconds)];

    timer.innerText = time.join('  :  ');
    diffTime -= second;
    if (diffTime <= 0) {
        clearInterval(timerId);
        title.innerText = 'Time has come!'
    }
}, second);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js', { scope: './' })
        .then(function(registration) {
            console.log('Service Worker Registered', registration);
        })
        .catch(function(err) {
            console.log('Service Worker Registration Failed', err);
        });
}
