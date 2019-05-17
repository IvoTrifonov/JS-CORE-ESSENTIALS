function solve(input) {
    let foodObject = {};

    for (let i = 0; i < input.length; i+=2) {
        foodObject[input[i]] = Number(input[i + 1]);

    }

    console.log(foodObject);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);