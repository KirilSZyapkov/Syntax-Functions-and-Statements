function roadRadar(arg1, arg2) {
    let speed = Number(arg1);
    let area = arg2;
    let speedLimit = 0;
    let speeding = 0;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            speeding = Math.abs(speedLimit - speed);
            break;
        case 'interstate':
            speedLimit = 90;
            speeding = Math.abs(speedLimit - speed);
            break;
        case 'city':
            speedLimit = 50;
            speeding = Math.abs(speedLimit - speed);
            break;
        case 'residential':
            speedLimit = 20;
            speeding = Math.abs(speedLimit - speed);
            break;
        default:
            break;
    }

    if(speed <= speedLimit){
        return `Driving ${speed} km/h in a ${speedLimit} zone`
    }
    if(speeding<=20){
        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - speeding`
    } else if (speeding>20 && speeding<=40){
        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
    } else if(speeding>40){
        return `The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
    }
}

console.log(roadRadar(200, 'motorway'))