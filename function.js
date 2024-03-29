// splash screen

document.addEventListener("DOMContentLoaded", function () {
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");

    function animateLine(line, delay) {
        setTimeout(function () {
            line.style.animation = "fadeIn 1s forwards";
            setTimeout(function () {
                line.style.animation = "fadeOut 1s forwards";
            }, 2000);
        }, delay);
    }

  
    animateLine(line1, 4000);
    animateLine(line2, 7000); 
    animateLine(line3, 10000);

    var container2 = document.querySelector(".container2");
    var spinner = document.querySelector(".spinner");

    // Hide spinner and show main content after 10 seconds 
    setTimeout(function() {
        spinner.style.display = "none"; 
        container2.style.display = "none"; 
        document.querySelector("header").style.display = "block"; 
        document.querySelector("footer").style.display = "block";
        document.querySelector("main").style.display = "flex"; 
        document.querySelectorAll("section").forEach(function(section) {
            section.style.display = "flex"; 
        });
        document.querySelector("nav").style.display = "flex"; // Fix typo here
    }, 13000); 
});


//checkout basket

function addToBasket(title, price, quantity) {

    const item = `${title} - Price: ${price} - Quantity: ${quantity}`;


    const orders = document.querySelector(".orders");


    const orderItem = document.createElement("div");


    orderItem.classList.add("order-item");

    orderItem.textContent = item;


    orders.appendChild(orderItem);
}


document.querySelector(".clear").addEventListener("click", function() {

    document.querySelector(".orders").innerHTML = "";
});

const addToBasketButtons = document.querySelectorAll(".button");

addToBasketButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const box = event.target.closest(".box");

        const title = box.querySelector("h5").textContent;
        const price = box.querySelector(".prices").textContent;
        const quantity = box.querySelector("select[name='numbers']").value;

        addToBasket(title, price, quantity);
    });
});
