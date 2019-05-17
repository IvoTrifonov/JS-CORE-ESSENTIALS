function solve(array) {
    let totalIncome = 0.0;

    for (let i = 0; i < array.length; i++) {
        let price = 0.0;
        let orderElements = array[i].split(", ");
        let coinsInserted = Number(orderElements[0]);
        let typeOfDrink = orderElements[1];

        if(typeOfDrink === "coffee"){
            let typeOfCoffee = orderElements[2];
            typeOfCoffee === "caffeine" ? price = 0.80 : price = 0.90;
            orderElements[3] === "milk" ? price += Number((price * 0.10).toFixed(1)) : price;

            Number(orderElements[orderElements.length - 1]) > 0 ? price += 0.10 : price;
        }
        else if(typeOfDrink === "tea"){
            price = 0.80;
            orderElements[2] === "milk" ? price += Number((price * 0.10).toFixed(1)) : price;
            Number(orderElements[orderElements.length - 1]) > 0 ? price += 0.10 : price;
        }

        price = price.toFixed(2);
        let rest = (coinsInserted - price).toFixed(2);

        if (coinsInserted >= price){
            console.log(`You ordered ${typeOfDrink}. Price: $${price} Change: $${rest}`)
            totalIncome += Number(price);
        }
        else{
            console.log(`Not enough money for ${typeOfDrink}. Need $${(price - coinsInserted).toFixed(2)} more.`)
        }
    }

    totalIncome = totalIncome.toFixed(2);
    console.log(`Income Report: $${totalIncome}`);
}

solve(['1.00, coffee, caffeine, milk, 4',  '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])