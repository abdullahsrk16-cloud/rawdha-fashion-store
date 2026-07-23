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

    cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price * item.quantity;

        cartItems.innerHTML += `
        <li style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span>${item.name}</span>

            <div style="display:flex;align-items:center;gap:8px;">
                <button onclick="changeQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </div>

            <span>$${item.price * item.quantity}</span>

            <button onclick="removeItem(${index})">❌</button>
        </li>
        `;
    });

    total.innerText = "$" + sum;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
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

updateCart();
function searchProducts() {

    const input = document.getElementById("search").value.toLowerCase();

    const hero = document.querySelector(".hero");
    const categories = document.querySelector(".categories");

    if (input === "") {
        hero.style.display = "";
        categories.style.display = "";
    } else {
        hero.style.display = "none";
        categories.style.display = "none";
    }

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

}

}
// ===== Product Page =====

function changeImage(image) {
    document.getElementById("mainImage").src = image;
}

let quantity = 1;

function changeQty(change) {

    quantity += change;

    if (quantity < 1) {
        quantity = 1;
    }

    document.getElementById("qty").innerText = quantity;
}
function addWishlist() {
    alert("❤️ Product added to Wishlist!");
}
