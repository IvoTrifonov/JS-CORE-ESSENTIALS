function solve() {
   let firstSpan = document.getElementsByTagName("span")[0];
   let secondSpan = document.getElementsByTagName("span")[2];
   
   Array.from(document.getElementsByTagName("img")).forEach((card) => {
      card.addEventListener("click", () => {
         card.src = "images/whiteCard.jpg";
         card.parentElement.id === "player1Div" ? firstSpan.textContent = card.name : secondSpan.textContent = card.name;

         let span1Value = firstSpan.textContent;
         let span2Value = secondSpan.textContent;

         if (span1Value && span2Value) {
            let firstCard = Array.from(document.getElementById("player1Div").childNodes).find(x => x.name === span1Value);
            let secondCard = Array.from(document.getElementById("player2Div").childNodes).find(x => x.name === span2Value);

            if (+span1Value > +span2Value) {
               firstCard.style.border = "2px solid green";
               secondCard.style.border = "2px solid red";
            }else{
               firstCard.style.border = "2px solid red";
               secondCard.style.border = "2px solid green";
            }

            document.getElementById("history").textContent += `[${span1Value} vs ${span2Value}] `;
            firstSpan.textContent = "";
            secondSpan.textContent = "";
            
         }
      });
   });
}