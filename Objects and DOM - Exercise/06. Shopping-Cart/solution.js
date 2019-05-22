function solve() {
   let [totalMoney, productsBought] = [0, []];
   let textArea = document.getElementsByTagName("textarea")[0];
   let checkOutButton = document.getElementsByClassName("checkout")[0];
   let addButtons = Array.from(document.getElementsByClassName("add-product"));
   
   addButtons.forEach((addButton) => {
      addButton.addEventListener("click", appendProduct);
   });

   function appendProduct(e) {
      let typeOfProduct = e.target.parentElement.parentElement.getElementsByClassName("product-title")[0].textContent;
      let priceOfProduct = e.target.parentElement.parentElement.getElementsByClassName("product-line-price")[0].textContent;
      
      if (!productsBought.includes(typeOfProduct)) {
         productsBought.push(typeOfProduct);
      }
      
      totalMoney += +priceOfProduct;
      textArea.textContent += `Added ${typeOfProduct} for ${priceOfProduct} to the cart.\n`;
   };

   checkOutButton.addEventListener("click", appendResult)
      
   function appendResult(e) {
      textArea.textContent += `You bought ${productsBought.join(", ")} for ${totalMoney.toFixed(2)}.\n`;
      addButtons.forEach((addButton) => {addButton.removeEventListener("click", appendProduct)});
      checkOutButton.removeEventListener("click", appendResult);
   }
}