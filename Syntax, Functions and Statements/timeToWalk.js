function timeToWalk(arg1, arg2, arg3) {
    let numSteps = Number(arg1);
    let lenFootprint = Number(arg2);
    let speed = Number(arg3) * 1000 / 3600;

    let distance = numSteps * lenFootprint;
    let extraTime = Math.floor(distance / 500) * 60;

    let totalTime = distance / speed + extraTime;

    let hour = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let min = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let sec = (totalTime % 60).toFixed(0).padStart(2, 0);

    return `${hour}:${min}:${sec}`
}

console.log(timeToWalk(2564, 0.70, 5.5))