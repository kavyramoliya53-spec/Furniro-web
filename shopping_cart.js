

document.addEventListener("DOMContentLoaded", renderCart);


function renderCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartItems");

    if (cart.length === 0) {
        container.innerHTML = `<tr><td colspan="4">Cart is empty</td></tr>`;

        // reset totals
        document.getElementById("subTotal").innerText = "$0.00";
        document.getElementById("total").innerText = "$0.00";
        return;
    }

    let totalAmount = 0;

    container.innerHTML = cart.map((item, index) => {

        let price = parseFloat(item.price.replace("$", ""));
        let total = price * item.quantity;
        totalAmount += total;

        return `
        <tr class="cart-row">

            <td>
                <div class="product-info">
                    <img src="${item.image}" class="product-img">
                    <div>
                        <h4>${item.name}</h4>
                        <p class="sub-text">Color: Brown</p>
                        <p class="sub-text">Size: XL</p>
                    </div>
                </div>
            </td>

            <td class="price">${item.price}</td>

            <td>
                <div class="qty-box">
                    <button onclick="updateQty(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQty(${index}, 1)">+</button>
                </div>
            </td>

            <td class="total">$${total.toFixed(2)}</td>

            <td>
                <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>
            </td>
        </tr>
        `;
    }).join("");

    // UPDATE SUBTOTAL & TOTAL
    document.getElementById("subTotal").innerText = "$" + totalAmount.toFixed(2);
    document.getElementById("total").innerText = "$" + totalAmount.toFixed(2);
}

function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove that specific item
    cart.splice(index, 1);

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render cart
    renderCart();
}

function clearCart() {
    // Remove all cart data
    localStorage.removeItem("cart");

    // Reload page to update UI
    location.reload();
}




function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart[index]) return;

    // Convert to number
    let newQty = Number(cart[index].quantity) + change;


    if (newQty < 1) {
        return; // stop here, don't update
    }

    cart[index].quantity = newQty;

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render
    renderCart();
}

