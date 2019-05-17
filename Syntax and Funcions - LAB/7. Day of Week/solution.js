function solve(dayOfWeek) {
    let number;
    dayOfWeek === "Monday" ? number = 1 :
        dayOfWeek === "Tuesday" ? number = 2 :
            dayOfWeek === "Wednesday" ? number = 3 :
                dayOfWeek === "Thursday" ? number = 4 :
                    dayOfWeek === "Friday" ? number = 5 :
                        dayOfWeek === "Saturday" ? number = 6 :
                            dayOfWeek === "Sunday" ? number = 7 :
                                number = -1;

    number === - 1 ? console.log("error") : console.log(number);
}

solve("Friday")