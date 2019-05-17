function solve(radius) {
    if (typeof radius !== "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
        return;
    }

    let result = (Math.PI * radius ** 2).toFixed(2);
    console.log(result);
}

solve(5);