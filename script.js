var functionRepeater;

function updateTimes() {
    var currentTime, targetTime, difference;
    currentTime = new Date();
    targetTime = new Date("Jan 1 2021 00:00:00");
    difference = targetTime - currentTime;

    if (difference < 0) {
        document.getElementById("statetext").innerHTML = "Yes!"
        document.getElementById("countdown").remove()
    } else {
        var seconds = Math.round(difference / 1000)
        var minutes = Math.floor(seconds / (60));
        var hours = Math.floor(seconds / (3600));
        var days = seconds / (24 * 3600);
        var months = days / 30.4;
        var years = days / 365;

        document.getElementById("secondstext").innerHTML = seconds + " seconds";
        document.getElementById("minutestext").innerHTML = minutes + " minutes";
        document.getElementById("hourstext").innerHTML = hours + " hours";
        document.getElementById("daystext").innerHTML = days.toFixed(1) + " days";
        document.getElementById("monthstext").innerHTML = months.toFixed(1) + " months";
        document.getElementById("yearstext").innerHTML = years.toFixed(2) + " years";
    }

    functionRepeater = setTimeout(updateTimes, 100);
}

updateTimes();