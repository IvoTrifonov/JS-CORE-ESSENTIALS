function solve(fruit, weightInGrams, pricePerKg) {
    let weightInKg = Number(weightInGrams / 1000);
    pricePerKg = Number(pricePerKg);

    let result = (weightInKg * pricePerKg).toFixed(2);
    console.log(`I need $${result} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);