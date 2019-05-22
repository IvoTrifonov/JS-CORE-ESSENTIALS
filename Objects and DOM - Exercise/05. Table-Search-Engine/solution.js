function solve() {
   let button = document.getElementById("searchBtn");
   let inputField = document.getElementById("searchField");
   let tdElements = Array.from(document.getElementsByTagName("td"));
   
   button.addEventListener("click", function search(){
      clearRows();
      setClassNames();
      inputField.value = "";
   });

   function clearRows() {
      let selectElements = Array.from(document.getElementsByClassName("select"));
      for (const select of selectElements) {
         select.className = "";
      }
   }

   function setClassNames() {
      for (const tdElement of tdElements) {
         if (tdElement.textContent.includes(inputField.value) && inputField.value) {
            tdElement.parentElement.className = "select";
         }
      }
   }
}