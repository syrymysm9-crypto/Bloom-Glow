let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <li>
                ${item.name} - SAR ${item.price}
                <button class="remove-btn" onclick="removeItem(${index})">✖</button>
            </li>
        `;
    });

    totalPrice.innerText = `SAR ${total}`;
    cartCount.innerText = cart.length;

    saveCart();
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    toggleCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

function checkout() {
    alert("Thank you for your purchase! (Demo)");
    cart = [];
    updateCartUI();
}

updateCartUI();