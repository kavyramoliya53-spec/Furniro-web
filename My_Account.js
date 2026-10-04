// // ============================================
// // GET DATA FROM LOCAL STORAGE
// // ============================================

// let cart =
//     JSON.parse(localStorage.getItem("cart")) || [];

// let wishlist =
//     JSON.parse(localStorage.getItem("wishlist")) || [];

// let lastOrder =
//     JSON.parse(localStorage.getItem("lastOrder"));

// let orders =
//     JSON.parse(localStorage.getItem("orders")) || [];

// let user =
//     JSON.parse(localStorage.getItem("userdata")) || {};

// let addresses =
//     JSON.parse(localStorage.getItem("addresses")) || [];


// // ============================================
// // DEFAULT USER
// // ============================================

// if (!user.name) {

//     user = {

//         name: "User",

//         email: "user@example.com",

//         mobile: "",

//         dob: ""

//     };

// }


// // ============================================
// // SIDEBAR USER
// // ============================================

// document.getElementById("sideName").innerText =
//     user.name;

// document.getElementById("sideEmail").innerText =
//     user.email;

// document.getElementById("welcomeName").innerText =
//     user.name;


// // ============================================
// // DASHBOARD COUNTS
// // ============================================

// document.getElementById("totalCart").innerText =
//     cart.length;

// document.getElementById("totalWishlist").innerText =
//     wishlist.length;

// document.getElementById("cartCount").innerText =
//     cart.length;


// // ============================================
// // ORDERS
// // ============================================

// // Include last order if orders array is empty

// if (orders.length === 0 && lastOrder) {

//     orders.push(lastOrder);

//     localStorage.setItem(
//         "orders",
//         JSON.stringify(orders)
//     );

// }


// document.getElementById("totalOrders").innerText =
//     orders.length;


// // ============================================
// // TOTAL SPENT
// // ============================================

// let totalSpent = 0;

// orders.forEach(function(order) {

//     let amount = Number(order.total) || 0;

//     totalSpent += amount;

// });


// document.getElementById("totalSpent").innerText =
//     "₹" + totalSpent.toLocaleString("en-IN");


// // ============================================
// // RECENT ORDER
// // ============================================

// function displayRecentOrder() {

//     const recentOrder =
//         document.getElementById("recentOrder");


//     if (orders.length === 0) {

//         recentOrder.innerHTML =
//             "No recent order.";

//         return;

//     }


//     let order =
//         orders[orders.length - 1];


//     recentOrder.innerHTML = `

//         <div class="order_card">

//             <div class="order_top">

//                 <strong>
//                     ${order.orderId || "Order"}
//                 </strong>

//                 <span class="order_status">
//                     Placed
//                 </span>

//             </div>

//             <div class="order_products">

//                 ${order.products
//                     ? order.products.length
//                     : 0}
//                 Product(s)

//             </div>

//             <strong>
//                 Total:
//                 ₹${Number(order.total || 0)
//                     .toLocaleString("en-IN")}
//             </strong>

//         </div>

//     `;

// }

// displayRecentOrder();


// // ============================================
// // SHOW ACCOUNT SECTION
// // ============================================

// function showSection(sectionId, button) {

//     const sections =
//         document.querySelectorAll(".account_section");

//     sections.forEach(function(section) {

//         section.classList.remove("active");

//     });


//     document
//         .getElementById(sectionId)
//         .classList.add("active");


//     const buttons =
//         document.querySelectorAll(".menu_btn");

//     buttons.forEach(function(btn) {

//         btn.classList.remove("active");

//     });


//     if (button) {

//         button.classList.add("active");

//     }


//     // Load section data

//     if (sectionId === "profile") {

//         loadProfile();

//     }

//     if (sectionId === "orders") {

//         displayOrders();

//     }

//     if (sectionId === "wishlist") {

//         displayWishlist();

//     }

//     if (sectionId === "cart") {

//         displayCart();

//     }

//     if (sectionId === "addresses") {

//         displayAddresses();

//     }

// }


// // ============================================
// // PROFILE
// // ============================================

// function loadProfile() {

//     document.getElementById("profileName").value =
//         user.name || "";

//     document.getElementById("profileEmail").value =
//         user.email || "";

//     document.getElementById("profileMobile").value =
//         user.mobile || "";

//     document.getElementById("profileDob").value =
//         user.dob || "";

// }


// function enableProfileEdit() {

//     document.getElementById("profileName")
//         .disabled = false;

//     document.getElementById("profileEmail")
//         .disabled = false;

//     document.getElementById("profileMobile")
//         .disabled = false;

//     document.getElementById("profileDob")
//         .disabled = false;

//     document.getElementById("saveProfileBtn")
//         .style.display = "block";

// }


// document
//     .getElementById("profileForm")
//     .addEventListener("submit", function(event) {

//         event.preventDefault();


//         user.name =
//             document.getElementById("profileName").value;

//         user.email =
//             document.getElementById("profileEmail").value;

//         user.mobile =
//             document.getElementById("profileMobile").value;

//         user.dob =
//             document.getElementById("profileDob").value;


//         localStorage.setItem(
//             "userdata",
//             JSON.stringify(user)
//         );


//         document.getElementById("sideName")
//             .innerText = user.name;

//         document.getElementById("sideEmail")
//             .innerText = user.email;

//         document.getElementById("welcomeName")
//             .innerText = user.name;


//         alert("Profile updated successfully!");

//     });


// function changePhoto() {

//     alert(
//         "Profile photo upload functionality can be connected here."
//     );

// }


// // ============================================
// // ORDERS
// // ============================================

// function displayOrders() {

//     const ordersList =
//         document.getElementById("ordersList");


//     if (orders.length === 0) {

//         ordersList.innerHTML = `
//             <p>You have no orders yet.</p>
//         `;

//         return;

//     }


//     ordersList.innerHTML = "";


//     orders.forEach(function(order) {

//         ordersList.innerHTML += `

//             <div class="order_card">

//                 <div class="order_top">

//                     <strong>
//                         ${order.orderId || "Order"}
//                     </strong>

//                     <span class="order_status">
//                         Placed
//                     </span>

//                 </div>

//                 <p>
//                     Date:
//                     ${order.orderDate || "-"}
//                 </p>

//                 <p class="order_products">

//                     Products:
//                     ${order.products
//                         ? order.products.length
//                         : 0}

//                 </p>

//                 <strong>

//                     Total:
//                     ₹${Number(order.total || 0)
//                         .toLocaleString("en-IN")}

//                 </strong>

//             </div>

//         `;

//     });

// }


// // ============================================
// // WISHLIST
// // ============================================

// function displayWishlist() {

//     const wishlistList =
//         document.getElementById("wishlistList");


//     if (wishlist.length === 0) {

//         wishlistList.innerHTML = `
//             <p>Your wishlist is empty.</p>
//         `;

//         return;

//     }


//     wishlistList.innerHTML = "";


//     wishlist.forEach(function(product) {

//         wishlistList.innerHTML += `

//             <div class="product_card">

//                 <img
//                     src="${product.img || product.image || ""}"
//                     alt="${product.name}"
//                 >

//                 <h3>
//                     ${product.name}
//                 </h3>

//                 <p>
//                     ₹${product.price}
//                 </p>

//                 <button
//                     onclick="addWishlistToCart('${product.id}')">
//                     Add To Cart
//                 </button>

//             </div>

//         `;

//     });

// }


// function addWishlistToCart(id) {

//     let product =
//         wishlist.find(
//             item => String(item.id) === String(id)
//         );


//     if (!product) {

//         alert("Product not found!");

//         return;

//     }


//     let existing =
//         cart.find(
//             item => String(item.id) === String(id)
//         );


//     if (existing) {

//         existing.quantity =
//             (Number(existing.quantity) || 0) + 1;

//     } else {

//         product.quantity = 1;

//         cart.push(product);

//     }


//     localStorage.setItem(
//         "cart",
//         JSON.stringify(cart)
//     );


//     alert("Product added to cart!");

//     updateCounts();

// }


// // ============================================
// // CART
// // ============================================

// function displayCart() {

//     const accountCart =
//         document.getElementById("accountCart");


//     if (cart.length === 0) {

//         accountCart.innerHTML =
//             "<p>Your cart is empty.</p>";

//         return;

//     }


//     accountCart.innerHTML = "";


//     cart.forEach(function(product) {

//         let price =
//             Number(
//                 String(product.price)
//                     .replace(/[^\d.-]/g, "")
//             ) || 0;

//         let quantity =
//             Number(product.quantity) || 1;


//         accountCart.innerHTML += `

//             <div class="cart_account_item">

//                 <img
//                     src="${product.img || product.image || ""}"
//                 >

//                 <div>

//                     <h3>
//                         ${product.name}
//                     </h3>

//                     <p>
//                         Price:
//                         ₹${price.toLocaleString("en-IN")}
//                     </p>

//                     <p>
//                         Quantity:
//                         ${quantity}
//                     </p>

//                 </div>

//             </div>

//         `;

//     });

// }


// // ============================================
// // ADDRESSES
// // ============================================

// function displayAddresses() {

//     const addressList =
//         document.getElementById("addressList");


//     if (addresses.length === 0) {

//         addressList.innerHTML = `
//             <p>
//                 No saved addresses.
//             </p>
//         `;

//         return;

//     }


//     addressList.innerHTML = "";


//     addresses.forEach(function(address, index) {

//         addressList.innerHTML += `

//             <div class="address_card">

//                 <h3>
//                     ${address.name}
//                 </h3>

//                 <p>
//                     ${address.address}
//                 </p>

//                 <p>
//                     ${address.city},
//                     ${address.state}
//                 </p>

//                 <p>
//                     PIN:
//                     ${address.pincode}
//                 </p>

//                 <p>
//                     Mobile:
//                     ${address.mobile}
//                 </p>


//                 <div class="address_buttons">

//                     <button
//                         onclick="deleteAddress(${index})">
//                         Delete
//                     </button>

//                 </div>

//             </div>

//         `;

//     });

// }


// function addAddress() {

//     let name =
//         prompt("Enter address name:");

//     if (!name) return;


//     let address =
//         prompt("Enter complete address:");

//     if (!address) return;


//     let city =
//         prompt("Enter city:");

//     if (!city) return;


//     let state =
//         prompt("Enter state:");

//     if (!state) return;


//     let pincode =
//         prompt("Enter PIN code:");

//     if (!pincode) return;


//     let mobile =
//         prompt("Enter mobile number:");

//     if (!mobile) return;


//     addresses.push({

//         name: name,

//         address: address,

//         city: city,

//         state: state,

//         pincode: pincode,

//         mobile: mobile

//     });


//     localStorage.setItem(
//         "addresses",
//         JSON.stringify(addresses)
//     );


//     displayAddresses();

//     alert("Address added successfully!");

// }


// function deleteAddress(index) {

//     if (
//         confirm(
//             "Are you sure you want to delete this address?"
//         )
//     ) {

//         addresses.splice(index, 1);

//         localStorage.setItem(
//             "addresses",
//             JSON.stringify(addresses)
//         );

//         displayAddresses();

//     }

// }


// // ============================================
// // PAYMENT
// // ============================================

// function addPayment() {

//     alert(
//         "Payment gateway can be connected here.\n\n" +
//         "You can integrate Razorpay, Stripe or another payment provider."
//     );

// }


// // ============================================
// // SETTINGS
// // ============================================

// function changePassword() {

//     let oldPassword =
//         prompt("Enter current password:");

//     if (!oldPassword) return;


//     let newPassword =
//         prompt("Enter new password:");

//     if (!newPassword) return;


//     alert(
//         "Password changed successfully!"
//     );

// }


// // ============================================
// // HELP
// // ============================================

// function showFAQ() {

//     alert(
//         "Frequently Asked Questions\n\n" +

//         "1. How can I place an order?\n" +
//         "Add products to cart and proceed to checkout.\n\n" +

//         "2. How can I check my order?\n" +
//         "Open My Orders from your account.\n\n" +

//         "3. How can I change my address?\n" +
//         "Open Addresses and add or remove an address."
//     );

// }


// function contactSupport() {

//     alert(
//         "Contact Support\n\n" +
//         "Email: support@mystore.com\n" +
//         "Phone: +91 98765 43210"
//     );

// }


// function reportProblem() {

//     let problem =
//         prompt(
//             "Describe your problem:"
//         );

//     if (problem) {

//         alert(
//             "Your problem has been submitted successfully!"
//         );

//     }

// }


// // ============================================
// // LOGOUT
// // ============================================

// function logout() {

//     let confirmLogout =
//         confirm(
//             "Are you sure you want to logout?"
//         );


//     if (confirmLogout) {

//         localStorage.removeItem("isLoggedIn");

//         alert("You have been logged out.");

//         window.location.href =
//             "login.html";

//     }

// }


// // ============================================
// // UPDATE COUNTS
// // ============================================

// function updateCounts() {

//     cart =
//         JSON.parse(
//             localStorage.getItem("cart")
//         ) || [];


//     wishlist =
//         JSON.parse(
//             localStorage.getItem("wishlist")
//         ) || [];


//     document.getElementById("totalCart")
//         .innerText = cart.length;

//     document.getElementById("totalWishlist")
//         .innerText = wishlist.length;

//     document.getElementById("cartCount")
//         .innerText = cart.length;

// }