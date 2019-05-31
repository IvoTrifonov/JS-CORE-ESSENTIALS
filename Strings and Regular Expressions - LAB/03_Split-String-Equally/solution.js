function solve() {
    let text = document.getElementById("text").value;
    let num = +document.getElementById("number").value;

    if (text.length % num > 0) {
        text += text.substr(0, num - text.length % num);
    }

    let result = [];
    
    for (let i = 0; i < text.length; i+=num) {
        result.push(text.substring(i, num + i));
    }

    document.getElementById("result").textContent = result.join(" ");
}