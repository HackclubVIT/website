const countDownDate = new Date("Feb 21, 2022 12:00:00").getTime();

const setImmediatelyCalledInterval = (cb, interval) => {
    cb();
    return setInterval(cb, interval);
}

var x = setImmediatelyCalledInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if ([days, hours, minutes, seconds].some((val) => val < 0)) {
        [days, hours, minutes, seconds] = [0, 0, 0, 0];
        document.querySelector('#countdown-over-text').style.display = 'block';
        window.clearInterval(x);
    }

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);