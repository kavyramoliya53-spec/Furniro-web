const related_data = [
    {
        id: 1,
        img: "./image/chair (5).png",
        name: "Mens Fashion Wear",
        price: "$43.00"
    },
    {
        id: 2,
        img: "./Image/Rectangle 133.svg",
        name: "Women’s Fashion",
        price: "$67.00"
    },
    {
        id: 3,
        img: "./Image/Rectangle 130.svg",
        name: "Wolx Dummy Fashion",
        price: "$67.00"
    },
    {
        id: 4,
        img: "./Image/Rectangle 131.svg",
        name: "Top Wall Digital Clock",
        price: "$51.00"
    }
];



const product = JSON.parse(localStorage.getItem("selectedProduct"));

const container = document.getElementById("details_item");

if (product) {
    container.innerHTML = `
       <div class="sub">
            <div class="product_img_one">
                <img src="${product.image}" alt="${product.img}">
                <img src="${product.image}" alt="${product.img}">
                <img src="${product.image}" alt="${product.img}">
            </div>
            <div class="product_img_two">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product_txt">
                <div class="product_name">
                    <h1>${product.name}</h1>
                </div>
                <div class="star">
                    <img src="./Image/ant-design_star-filled.svg" alt="star">
                    <img src="./Image/ant-design_star-filled.svg" alt="star">
                    <img src="./Image/ant-design_star-filled.svg" alt="star">
                    <img src="./Image/ant-design_star-filled.svg" alt="star">
                    <img src="./Image/ant-design_star-filled.svg" alt="star">
                    <span>(22)</span>
                </div>
                <div class="price">
                    <p>${product.price} <del><span>${product.price}</span></del></p>
                </div>
                <div class="color">
                    <p>Color</p>
                </div>
                <div class="discription">
                    <p>${product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit."}</p>
                </div>
                <div class="product_cart" >
                <button href="./shopping_cart.html" onclick="addToCart()" class="luxury-cart-btn">
    <i class="fa-solid fa-cart-shopping"></i>
    Add to Cart
</button>
                    
                <i class="fa-solid fa-heart" id="wishlistIcon" alt="heart icon" onclick="addToWishlist()"></i>
                </div>
                <div class="categrioes">
                    <p>Categories:</p>
                    <p>Tags</p>
                    <div class="product_icon">
                        <p>Share</p>
                        <img src="./Image/Group 202.svg" alt="social">
                        <img src="./Image/Group 203.svg" alt="social">
                        <img src="./Image/Group 204.svg" alt="social">
                    </div>
                </div>
            </div>
        </div>
    `;
}
else {
    container.innerHTML = `
        <div style="text-align:center; padding:50px;">
            <h2>Product is not add</h2>
            <p>Please select a product first.</p>
            <a href="index.html">Go to Home</a>
        </div>
    `;
}

let isAdding = false;
function addToCart() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        alert("Product not found");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find(item => item.id === product.id);

    if (exist) {
        exist.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            oldPrice: product.oldPrice,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "shopping_cart.html";
}

function addToWishlist() {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!product) {
        alert("Product not found");
        return;
    }

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const index = wishlist.findIndex(item => item.id === product.id);

    const icon = document.getElementById("wishlistIcon");

    if (index === -1) {
        // ✅ ADD ITEM
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });

        icon.classList.add("active");

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        // ✅ redirect only when adding
        // window.location.href = "wishlist.html";

    } else {
        // ❌ REMOVE ITEM
        wishlist.splice(index, 1);

        icon.classList.remove("active"); // 🤍 normal

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
}


window.onload = function () {
    const product = JSON.parse(localStorage.getItem("selectedProduct"));
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const icon = document.getElementById("wishlistIcon");

    if (!product || !icon) return;

    const exist = wishlist.find(item => item.id === product.id);

    if (exist) {
        icon.classList.add("active");
    }
};


document.addEventListener("DOMContentLoaded", () => {

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

    // Show user information only if logged in
    if (currentUser) {

        const userName = document.getElementById("userName");
        const userEmail = document.getElementById("userEmail");
        const userContact = document.getElementById("userContact");

        if (userName) {
            userName.textContent = currentUser.name;
        }

        if (userEmail) {
            userEmail.textContent =
                " Email: " + currentUser.email;
        }

        if (userContact) {
            userContact.textContent =
                " Contact: " + currentUser.contact;
        }
    }

});