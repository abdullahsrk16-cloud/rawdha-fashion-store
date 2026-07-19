let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");

    cartCount.innerText = cart.length;

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price;

        cartItems.innerHTML += `
            <li style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <span>${item.name} - $${item.price}</span>
                <button onclick="removeItem(${index})">❌</button>
            </li>
        `;
    });

    total.innerText = "$" + sum;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const panel = document.getElementById("cart-panel");

    if (panel.style.right === "0px") {
        panel.style.right = "-400px";
    } else {
        panel.style.right = "0px";
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("✅ Thank you for your purchase!");
        cart = [];
        updateCart();
    }
}
