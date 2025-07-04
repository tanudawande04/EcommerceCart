document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "product1", price: 40.0 },
        { id: 2, name: "product2", price: 19.0 },
        { id: 3, name: "product3", price: 80.0 },
        { id: 4, name: "product4", price: 30.0 },
    ];

    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("chekout-btn");

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
            <div class="product-info">
                <span class="product-name">${product.name}</span>
                <span class="product-price">$${product.price.toFixed(2)}</span>
            </div>
            <button class="add-btn" data-id="${product.id}">Add to cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {

            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);

        }

    })

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function renderCart() {
        cartItems.innerText = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove("hidden")

            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement('div');

                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}

                `;
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;


            });


        } else {
            emptyCartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent = `$0.00`;

        }
    }

    checkOutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("chekout successfully");
        renderCart();

    })


});

