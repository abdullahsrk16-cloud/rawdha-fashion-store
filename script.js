document.addEventListener("DOMContentLoaded", () => {

    // Hero Button
    const shopBtn = document.querySelector(".shop-btn");

    if (shopBtn) {
        shopBtn.addEventListener("click", () => {
            document.querySelector(".products").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Add to Cart Buttons
    const buttons = document.querySelectorAll(".product button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.innerText = "✓ Added";
            btn.style.background = "#28a745";

            setTimeout(() => {
                btn.innerText = "Add to Cart";
                btn.style.background = "gold";
            }, 2000);
        });
    });

});
