document.querySelector("#signup").addEventListener("click", myfun);
let SignUpData = JSON.parse(localStorage.getItem("signedUp")) || []

function myfun() {
    let first = document.querySelector("#first").value;
    let last = document.querySelector("#last").value;
    let email = document.querySelector("#email").value;
    let mob = document.querySelector("#mobile").value;
    let password = document.querySelector("#password").value;
    if (first == "" || last == "" || email == "" || mob == "" || password == "") {
        alert("Please Fill the all Details")
    } else {
        let obj = { first, last, mob, email, password }
        SignUpData.push(obj)
        localStorage.setItem("signedUp", JSON.stringify(SignUpData));
        alert("Succesfully Registered..!")
        window.location.href = "signin.html"
    }




}