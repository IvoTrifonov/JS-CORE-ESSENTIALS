function solve() {
    let inputElement = document.getElementsByTagName("input")[0];
    let button = document.getElementsByTagName("button")[0];
    let liElements = document.getElementsByTagName("li");
    
    button.addEventListener("click", appendName);

    function appendName() {
        let name = inputElement.value;
        
        let index = name[0].toUpperCase().charCodeAt(0) - 65;
        name = name[0].toUpperCase() + name.slice(1).toLowerCase();
        
        liElements[index].textContent != "" ? liElements[index].textContent += ", " + name : liElements[index].textContent += name;
        inputElement.value = "";
    }
}