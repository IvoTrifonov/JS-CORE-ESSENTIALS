function solve() {
    let input = document.getElementById("arr").value;
    let users = JSON.parse(input);
    let result = document.getElementById("result");
    let nameMatch = new RegExp(/[A-Z][a-z]* [A-Z][a-z]*/);
    let numberMatch = new RegExp(/\+359(( |-)[0-9]*\1)+/);
    let emailMatch = new RegExp(/[A-Za-z0-9]+@[a-z]*.[a-z]{2,3}/);


    [...users].forEach(user => {
        let userTokens = user.split(" ");
        let [name, number, email] = [userTokens[0] + " " + userTokens[1], userTokens[2],  userTokens[3]];

        let additionalNumberCheck = number.includes("-") && number.includes(" ");

        if (nameMatch.test(name) && (!additionalNumberCheck && numberMatch.test(number)) && 
        emailMatch.test(email)) {
            let [p1, p2, p3, p4] = [document.createElement("p"),
            document.createElement("p"),
            document.createElement("p"),
            document.createElement("p")];
            
            p1.textContent = `Name: ${name}`;
            p2.textContent = `Phone Number: ${number}`;
            p3.textContent = `Email: ${email}`;
            p4.textContent = "- - -";

            result.appendChild(p1);
            result.appendChild(p2);
            result.appendChild(p3);
            result.appendChild(p4);
        }else {
            let pError = document.createElement("p");
            let pLine = document.createElement("p");
            pError.textContent = "Invalid data";
            pLine.textContent = "- - -";

            result.appendChild(pError);
            result.appendChild(pLine);
        }
    });
}