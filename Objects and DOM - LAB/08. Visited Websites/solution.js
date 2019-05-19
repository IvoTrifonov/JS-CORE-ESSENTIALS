function solve() {
  let links = Array.from( document.getElementsByTagName("a"));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      let index = links.indexOf(link);
      let p = document.getElementsByTagName("p")[index];
      let currentNumber = Number(p.textContent.split(" ")[1]);
      p.textContent = `visited ${++currentNumber} times`;
      
    });
  });
}