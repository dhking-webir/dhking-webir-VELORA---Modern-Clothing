 let cart = [];

        function addToCart(name, price) {

            cart.push({
                name: name,
                price: price
            });

            updateCart();

            // Automatically open cart
            openCart();
        }


        function updateCart() {

            const cartCount = document.getElementById("cartCount");
            const cartItems = document.getElementById("cartItems");
            const cartTotal = document.getElementById("cartTotal");

            cartCount.textContent = cart.length;

            if (cart.length === 0) {

                cartItems.innerHTML =
                    '<p style="color:#777;">Your cart is empty.</p>';

                cartTotal.textContent = "0";

                return;
            }

            let total = 0;

            cartItems.innerHTML = "";

            cart.forEach((item, index) => {

                total += item.price;

                const div = document.createElement("div");

                div.className = "cart-item";

                div.innerHTML = `
                    <div>
                        <h4>${item.name}</h4>
                        <span>$${item.price}</span>
                        <div
                            class="remove-item"
                            onclick="removeItem(${index})">
                            Remove
                        </div>
                    </div>
                `;

                cartItems.appendChild(div);
            });

            cartTotal.textContent = total;
        }


        function removeItem(index) {

            cart.splice(index, 1);

            updateCart();
        }


        function openCart() {

            document
                .getElementById("cartPanel")
                .classList.add("open");
        }


        function closeCart() {

            document
                .getElementById("cartPanel")
                .classList.remove("open");
        }


        function checkout() {

            if (cart.length === 0) {

                alert("Your cart is empty.");

                return;
            }

            alert(
                "Thank you for shopping with VELORA! " +
                "Checkout would connect to your payment system here."
            );
        }


        // =========================
        // PRODUCT FILTER
        // =========================

        function filterProducts(category, button) {

            const products =
                document.querySelectorAll(".product");

            const buttons =
                document.querySelectorAll(".filter-btn");

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            products.forEach(product => {

                if (
                    category === "all" ||
                    product.dataset.category === category
                ) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });
        }


        // =========================
        // MOBILE MENU
        // =========================

        function toggleMenu() {

            document
                .getElementById("navLinks")
                .classList.toggle("show");
        }


        // Close mobile menu after clicking link

        document.querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    document
                        .getElementById("navLinks")
                        .classList.remove("show");

                });

            });


        // =========================
        // NEWSLETTER
        // =========================

        function subscribe(event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value;

            alert(
                "Thanks for subscribing! " +
                "Confirmation sent to " + email
            );

            document
                .getElementById("email")
                .value = "";
        }
