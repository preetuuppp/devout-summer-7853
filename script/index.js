let data = [
    {
        "title": "Faces Canada Hydro Cleanser",
        "avatar": "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_4.jpg",
        "price": 734,
        "rating": 4.2,
        "category": "Cleanser",

    },
    {
        "title": "O3+ Blueberry Dtan Creme Mask",
        "avatar": "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/_/1/.111.jpg",
        "price": 880,
        "rating": 4.7,
        "category": "Moisturising ",

    },
    {
        "title": " ",
        "avatar": "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/g/ggggghh.jpg",
        "price": 680,
        "rating": 4.8,
        "category": "Cleansing",

    },

]
// let count = 0;

function displayCard(data) {
    document.querySelector("#color").innerHTML = ""
    data.forEach(function (element) {
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
        let add = document.createElement("button")
        add.innerText = "Add to Cart";
        add.addEventListener("click", function () {
            addData("cart", element)
            alert("product added in Cart")
            // count++
            // document.getElementById("cartCount").innerText = count;
            // localStorage.setItem("cartCountData", count)

        })

        div.append(img, name, price, rate, Category, add);
        document.querySelector("#color").append(div)


    });
}
// let mainCount = JSON.parse(localStorage.getItem("cartCountData")) || [];
// document.getElementById("cartCount").innerText = mainCount;
displayCard(data)

function addData(key, value) {
    let newData = JSON.parse(localStorage.getItem(key)) || [];
    newData.push(value);

    localStorage.setItem(key, JSON.stringify(newData))
}