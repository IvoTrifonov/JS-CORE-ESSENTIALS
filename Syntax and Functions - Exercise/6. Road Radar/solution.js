function solve(input) {
    let speed = Number(input[0]);
    let place = input[1];
    let message = "";

    switch (place) {
        case "motorway":
        speed > 130 && speed <= 150 ? message = "speeding" :
        speed > 150 && speed <= 170 ? message = "excessive speeding" :
        speed > 170 ? message = "reckless driving" : message;
        break;

        case "interstate":
        speed > 90 && speed <= 110 ? message = "speeding" :
        speed > 110 && speed <= 130 ? message = "excessive speeding" :
        speed > 130 ? message = "reckless driving" : message;
        break;

        case "city":
        speed > 50 && speed <= 70 ? message = "speeding" :
        speed > 70 && speed <= 90 ? message = "excessive speeding" :
        speed > 90 ? message = "reckless driving" : message;
        break;

        case "residential":
        speed > 20 && speed <= 40 ? message = "speeding" :
        speed > 40 && speed <= 60 ? message = "excessive speeding" :
        speed > 60 ? message = "reckless driving" : message;
        break;
    }

    console.log(message);
}

solve([120, 'interstate']);