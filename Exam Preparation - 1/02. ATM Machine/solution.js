function solve(input) {
    let atmAmount = 0;
    let atmBanknotes = [];

    [...input].forEach((arr) => {
        if (arr.length > 2) {
            let currentSum = insert(arr);
            console.log(`Service Report: ${currentSum}$ inserted. Current balance: ${atmAmount}$.`);
        } else if (arr.length === 2){
            let [accountBalance, moneyToWithdraw] = [+arr[0], +arr[1]];

            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`)
            } else if (atmAmount < moneyToWithdraw) {
                console.log(`ATM machine is out of order!`);
            }
            else {
                withDraw(moneyToWithdraw);
                atmAmount -= moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${accountBalance - moneyToWithdraw}$. Thank you!`)
            }
        } else {
            let banknote = +arr[0];
            let banknoteCount = atmBanknotes.filter(b => b === banknote).length;

            console.log(`Service Report: Banknotes from ${banknote}$: ${banknoteCount}.`)
        }
    });

    function insert(money) {
        let currentSum = 0;
        [...money].forEach((bankNote) => {
            currentSum += +bankNote;
            atmBanknotes.push(bankNote);
        });
        
        atmBanknotes.sort((a,b) => b - a);
        atmAmount += currentSum;
        return currentSum;
    } 

    function withDraw(moneyToWithdraw) {
         for (let i = 0; i < atmBanknotes.length; i++) {
            if (moneyToWithdraw - atmBanknotes[i] >= 0) {
                moneyToWithdraw -= atmBanknotes[i];
                atmBanknotes.splice(i, 1);
                i--;
            } 
            
            if (moneyToWithdraw === 0) {
                atmBanknotes.sort((a,b) => b - a);
                break;
            }
        }
    }
}

solve([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
   ]
   );