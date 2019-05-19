function solve() {
  let input = document.getElementById("input").textContent.split(".");
  let result = document.getElementById("output");
  let numberOfSentances = 0;
  let text = "";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    text += input[i] + ".";
    count++;

    if (count === 3 || i === input.length - 1) {
      count = 0;
      let p = document.createElement("p");
      p.textContent = text;
      text = "";
      document.getElementById("output").appendChild(p);
    }
  }
}
