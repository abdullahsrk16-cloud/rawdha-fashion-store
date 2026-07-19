let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
cartCount.innerText = totalItems;

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price * item.quantity;

        cartItems.innerHTML += `
            <li style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <span>${item.name} x${item.quantity} - $${item.price * item.quantity}</span>
                <button onclick="removeItem(${index})">❌</button>
            </li>
        `;
    });

    total.innerText = "$" + sum;
localStorage.setItem("cart", JSON.stringify(cart));}

function removeItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

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
updateCart();
