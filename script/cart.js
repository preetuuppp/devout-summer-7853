let cartData = JSON.parse(localStorage.getItem("cart"));



function displayCard(data) {
    document.querySelector("#container").innerHTML = ""
    data.forEach(function (element, index) {
        let div = document.createElement("div");
        let name = document.createElement("p")
        name.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.avatar;
        let price = document.createElement("p");
        price.innerText = "price :- " + element.price + "/-";

        let rate = document.createElement("p");
        rate.innerText = "rating :- " + element.rating;

        let Category = document.createElement("p");
        Category.innerText = element.category;
        let rem = document.createElement("button")
        rem.innerText = "Remove";
        rem.addEventListener("click", function () {
            deleteDta(cartData, index)
            alert("Item removed successfully.")
            price(cartData);
        })

        div.append(img, name, price, rate, Category, rem);
        document.querySelector("#container").append(div)


    });
}
displayCard(cartData)


function deleteDta(data, index) {
    data.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(data))
    displayCard(data)
}


function price(data) {
    let zoom = data.reduce((acc, el) => acc + el.price, 0);
    document.querySelector("span").innerText = zoom;
    // console.log(zoom)
}
price(cartData);






let form = document.querySelector("form");
let Submit = JSON.parse(localStorage.getItem("payment")) || []

form.addEventListener("submit", function (e) {
    e.preventDefault()

    let name = form.name.value
    let add = form.add.value;
    let mob = form.num.value;
    if (name == "" || add == "" || mob == "") {
        alert("Please fill the details")
    }
    else {
        alert("Payment Successful")

        window.location.href = "index.html"
    }


})




