function solve(array) {
    let result = {};

    for (const element of array) {
        let args = String(element).split(" <-> ");
        let name = args[0];
        let popuation = Number(args[1]);

        if (!result[name]) {
            result[name] = 0;
        }

        result[name] += popuation;
    }

    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }
}

solve(["Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
   "Washington <-> 2345000",
    "Las Vegas <-> 1000000"
    ])