function solve() {
    let word = document.getElementById("word").value;
    let parts = JSON.parse(document.getElementById("text").value);
    let wordToBeRplaced = parts[0].split(" ")[2];
    let pattern = new RegExp(wordToBeRplaced, "gi");
    let resultElement = document.getElementById("result");
    
    parts = parts.map(part => {
        return part.replace(pattern, word);
    });

    parts.forEach((part) => {
        let p = document.createElement("p");
        p.textContent = part;
        resultElement.appendChild(p);
    });
}