document.querySelector("#signup").addEventListener("click", myfun);
let SignUpData = JSON.parse(localStorage.getItem("signedUp")) || []

function myfun() {
    let first = document.querySelector("#first").value;
    let last = document.querySelector("#last").value;
    let email = document.querySelector("#email").value;
    let mob = document.querySelector("#mobile").value;
    let pass = document.querySelector("#password").value;
    if (first == "" || last == "" || email == "" || mob == "" || pass == "") {
        alert("Please Fill the all Details")
    } else {
        let obj = { first, last, mob, email, pass }
        SignUpData.push(obj)
        localStorage.setItem("signedUp", JSON.stringify(SignUpData));
        alert("Succesfully Registered..! Please click on the Sign in")
    }




}