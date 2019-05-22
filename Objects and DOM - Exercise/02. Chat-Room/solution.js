function solve() {
   let message = document.getElementById("chat_input");
   let button = document.getElementById("send");
   
   button.addEventListener("click", () => {
      let newDivElement = document.createElement("div");
      newDivElement.textContent = message.value;
      newDivElement.className = "message my-message";

      document.getElementById("chat_messages").appendChild(newDivElement);
      message.value = "";
   });
}


