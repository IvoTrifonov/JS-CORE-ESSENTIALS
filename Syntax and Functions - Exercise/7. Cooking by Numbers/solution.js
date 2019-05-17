function solve(array) {
    let number = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        switch (array[i]) {
            case "chop":
            number = chop(number);
            break;

            case "dice":
            number = dice(number);
            break;

            case "spice":
            number++;
            break;

            case "bake":
            number = bake(number);
            break;

            case "fillet":
            number -= fillet(number);
            break;
        }

        console.log(number);
    }

    function chop(num) {
        return num / 2;
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function bake(num) {
        return num * 3;
    }

    function fillet(num) {
        return num * 0.2;
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);