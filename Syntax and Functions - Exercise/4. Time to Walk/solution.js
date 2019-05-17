function solve(numberOfStepsFromUniToHome, footprintLengthInMeters, speedInKmPerHour) {
    let distance = numberOfStepsFromUniToHome * footprintLengthInMeters;

    let speedForMeterInSeconds = speedInKmPerHour * 1000 / 3600;

    let timeInSeconds = Math.round(distance / speedForMeterInSeconds);
    timeInSeconds += Math.floor(distance / 500) * 60;

    let seconds = timeInSeconds % 60;
    let minutes = (timeInSeconds - seconds) / 60;
    let hours = Math.floor(minutes / 3600);

    formatTheOutput(hours, minutes, seconds);

    function formatTheOutput(hours, minutes, seconds) {
        hours < 10 ? hours = "0" + hours : hours;
        minutes < 10 ? minutes = "0" + minutes : minutes;
        seconds < 10 ? seconds = "0" + seconds : seconds;

        console.log(`${hours}:${minutes}:${seconds}`);
    }
}

solve(2564, 0.70, 5.5);