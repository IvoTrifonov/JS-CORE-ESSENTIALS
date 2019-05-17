function solve([x1, y1, x2, y2]) {

    let comparisons = ([x1, y1, x2, y2]) => {
        let x = x1 - x2;
        let y = y1 - y2;

        let distance = Math.sqrt(x ** 2 + y ** 2);
        let distanceIs = Number.isInteger(distance) ? "valid" : "invalid";
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceIs}`);
    };

    comparisons([x1, y1, 0, 0]);
    comparisons([x2, y2, 0, 0]);
    comparisons([x1, y1, x2, y2]);
}

solve([2, 1, 1, 1]);