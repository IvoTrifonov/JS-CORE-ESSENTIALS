function solve() {
    let resultElement = document.getElementsByClassName("results-inner")[0];
    let index = 0;
    let sections = document.getElementsByTagName("section"); 
    let correctAnswers = 0;
    let answerWraps = document.getElementsByClassName("answer-wrap");
    Array.from(answerWraps).forEach((answer) => {
          answer.addEventListener("click", function () {
          let answerValue = answer.getElementsByTagName("p")[0].textContent;
          let possibleAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

          if (possibleAnswers.includes(answerValue)) {
              correctAnswers++;
          }

          sections[index].style.display = "none";
          
          if (index < 2) {
            sections[index + 1].style.display = "block";
          }
          
          if (index === 2) {
            document.getElementById("results").style.display = "block";
            let text = "";
            correctAnswers === 3 ? text = "You are recognized as top JavaScript fan!" : text = `You have ${correctAnswers} right answers`;
            resultElement.getElementsByTagName("h1")[0].textContent = text;
          }
          
          index++; 
      });
    });
}
  