let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");

    if (!cartCount || !cartItems || !total) return;

    cartCount.innerText = cart.length;

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach(item => {
        sum += item.price;

        cartItems.innerHTML += `
            <li>
                ${item.name} - $${item.price}
            </li>
        `;
    });

    total.innerText = "$" + sum;
}
function toggleCart() {
    const panel = document.getElementById("cart-panel");

    if (panel.style.right === "0px") {
        panel.style.right = "-400px";
    } else {
        panel.style.right = "0px";
    }

    console.log("Cart clicked!");
}
