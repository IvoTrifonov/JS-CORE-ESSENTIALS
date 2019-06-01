function solve() {
    let text = document.getElementById('text').value;
    let keyWord = document.getElementById('string').value;
    let result = document.getElementById('result');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
 
    let regexPattern = '(?<=LIUBO)(.*?)(?=LIUBO)';
 
    let regex = /(east|north)[\s\S]*?([\d]{2})[\s\S]*?,[\s\S]*?([\d]{6})/igm;
 
    let final = regexPattern.replace(/LIUBO/g, keyWord);
 
    let keyWordPattern = new RegExp(final, "gmi")
 
    let message = text.match(keyWordPattern);
 
    let m;
 
    let east = '';
    let north = '';

    while ((m = regex.exec(text)) !== null) {
        if(m[1].toUpperCase() === "NORTH") {
           north =  `${m[2]}.${m[3]} N`;
        } else if (m[1].toUpperCase() === "EAST"){
           east= `${m[2]}.${m[3]} E`;
        }
    }
    p1.textContent = north;
    result.appendChild(p1);
    p2.textContent = east;
    result.appendChild(p2);
    p3.textContent = "Message: " + message;
    result.appendChild(p3);
}
    
