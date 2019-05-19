function solve(input) {
    let towns = {};

    for (let i = 0; i < input.length; i+=2) {
        if (!towns[input[i]]) {
            towns[input[i]] = 0;
        }

        towns[input[i]] += Number(input[i + 1]);
    }

    console.log(JSON.stringify(towns));
}

solve(["Sofia",
    "20",
    "Varna",
    "3",
    "Sofia",
    "5",
    "varna",
    "4"]);