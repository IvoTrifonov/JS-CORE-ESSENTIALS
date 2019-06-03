function solve(input) {
    let totalMoney = 0;
    [...input].forEach((order) => {
        let orderTokens = order.split(", ");
        let [coinsInserted, typeOfDrink, quantitySugar] = 
        [orderTokens[0], orderTokens[1], orderTokens[orderTokens.length - 1]];
        let price = 0.80;

        if (typeOfDrink === "coffee") {
            let typeOfCoffee = orderTokens[2];
             typeOfCoffee === "caffeine" ? price = 0.80 : price = 0.90;
        } 

        if (order.includes("milk")) {
            let milkPrice = +(price * 0.10).toFixed(1);
            price += milkPrice;
        }

        quantitySugar > 0 ? price += 0.10 : null;

        if (coinsInserted >= price) {
            totalMoney += price;
            let rest = (coinsInserted - price).toFixed(2);
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${rest}$`)
        } else {
            let coinsNeeded = (price - coinsInserted).toFixed(2);
            console.log(`Not enough money for ${typeOfDrink}. Need ${coinsNeeded}$ more.`);
        }
    });

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
'1.00, coffee, decaf, 0']);