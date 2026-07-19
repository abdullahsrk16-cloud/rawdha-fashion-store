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
            cartItems.innerHTML += `
    <li style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeItem(${cart.indexOf(item)})">❌</button>
    </li>
`;function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
