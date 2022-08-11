function countdown() {

    let countdown = new Date("December 20, 2029 10:00:00").getTime()
    let currentTime = new Date().getTime();
    let gap = countdown - currentTime

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let months = days * 30;

    let showSeconds = Math.floor(gap % minutes / seconds)
    let showMinutes = Math.floor(gap % hours / minutes)
    let showHours = Math.floor(gap % days / hours)
    let showsDays = Math.floor(gap % months / days)
    let showMonths = Math.floor(gap / months)

    document.getElementById("months").innerText = formatTime(showMonths);
    document.getElementById("days").innerText = formatTime(showsDays);
    document.getElementById("hours").innerText = formatTime(showHours);
    document.getElementById("minutes").innerText = formatTime(showMinutes);
    document.getElementById("seconds").innerText = formatTime(showSeconds);
}

function formatTime(time) {
    return time < 10? `0${time}`: time;
}
setInterval(countdown, 1000)


















































