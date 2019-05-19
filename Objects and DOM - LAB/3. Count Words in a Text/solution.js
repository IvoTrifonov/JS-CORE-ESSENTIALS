function solve([array]) {
    let wordsArr = array.split(/\W+/).filter(w => w != "");
    let result = {};
    for(let word of wordsArr) {
        if(!result[word]) {
            result[word] = 0;
        } 

        result[word]++;
    }

    console.log(JSON.stringify(result));
}

solve(["devs use Node.js"]);