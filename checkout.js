// Get cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutProducts = document.getElementById("checkoutProducts");
const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");


// -----------------------------------
// PRICE CONVERTER
// -----------------------------------

function getPrice(price) {

    if (typeof price === "number") {
        return price;
    }

    if (typeof price === "string") {

        // Remove ₹, commas, spaces and other characters
        let cleanPrice = price.replace(/[^\d.-]/g, "");

        let numberPrice = parseFloat(cleanPrice);

        return isNaN(numberPrice) ? 0 : numberPrice;
    }

    return 0;
}


// -----------------------------------
// DISPLAY CHECKOUT PRODUCTS
// -----------------------------------

function displayCheckoutProducts() {

    checkoutProducts.innerHTML = "";

    if (cart.length === 0) {

        checkoutProducts.innerHTML = `
            <p class="empty_cart">
                Your cart is empty.
            </p>
        `;

        subtotalElement.innerText = "₹0";
        shippingElement.innerText = "₹0";
        totalElement.innerText = "₹0";

        return;
    }


    let subtotal = 0;


    cart.forEach(function(product) {

        // Get correct price
        let price = getPrice(product.price);

        // Get quantity
        let quantity = parseInt(product.quantity) || 1;

        // Product total
        let productTotal = price * quantity;

        // Add to subtotal
        subtotal += productTotal;


        // Product image
        let productImage = product.img || product.image || "";


        checkoutProducts.innerHTML += `

            <div class="checkout_product">

                <img
                    src="${productImage}"
                    alt="${product.name}"
                >

                <div class="product_info">

                    <h3>${product.name}</h3>

                    <p>
                        Price:
                        ₹${price.toLocaleString("en-IN")}
                    </p>

                    <p>
                        Quantity: ${quantity}
                    </p>

                    <p>
                        Product Total:
                        ₹${productTotal.toLocaleString("en-IN")}
                    </p>

                </div>

            </div>

        `;

    });


    // -----------------------------------
    // SHIPPING
    // -----------------------------------

    let shipping = 0;

    // Free shipping above ₹1000
    if (subtotal < 1000) {
        shipping = 100;
    }


    // -----------------------------------
    // FINAL TOTAL
    // -----------------------------------

    let total = subtotal + shipping;


    // -----------------------------------
    // SHOW PRICE
    // -----------------------------------

    subtotalElement.innerText =
        "₹" + subtotal.toLocaleString("en-IN");

    shippingElement.innerText =
        shipping === 0
            ? "FREE"
            : "₹" + shipping.toLocaleString("en-IN");

    totalElement.innerText =
        "₹" + total.toLocaleString("en-IN");


    // Save total for order
    localStorage.setItem(
        "checkoutTotal",
        total
    );
}


// Run checkout
displayCheckoutProducts();


// -----------------------------------
// PLACE ORDER
// -----------------------------------

document
    .getElementById("checkoutForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // If cart empty
        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }


        // Get customer information

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let mobile =
            document.getElementById("mobile").value.trim();

        let address =
            document.getElementById("address").value.trim();

        let city =
            document.getElementById("city").value.trim();

        let state =
            document.getElementById("state").value.trim();

        let pincode =
            document.getElementById("pincode").value.trim();


        // Payment
        let payment =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;


        // Get total
        let total =
            Number(localStorage.getItem("checkoutTotal")) || 0;


        // Create order

        let order = {

            orderId:
                "ORD" + Date.now(),

            customer: {

                name: name,

                email: email,

                mobile: mobile,

                address: address,

                city: city,

                state: state,

                pincode: pincode

            },

            products: cart,

            paymentMethod: payment,

            subtotal:
                total >= 1000
                    ? total
                    : total - 100,

            shipping:
                total >= 1000
                    ? 0
                    : 100,

            total: total,

            orderDate:
                new Date().toLocaleString()

        };


        // Save order
        localStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );


        // Remove cart
        localStorage.removeItem("cart");


        // Redirect to order success page

        window.location.href =
            "order_complete.html";

    });