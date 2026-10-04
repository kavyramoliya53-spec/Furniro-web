const collection = [
    {
        id: 1,
        name: "Vel elit euismod",
        price: "$26.00",
        oldPrice: "$42.00",
        image: "image/sofa (2).png"
    },
    {
        id: 2,
        name: "Ultricies condimentum imperdiet",
        price: "$24.00",
        oldPrice: "$42.00",
        image: "image/sofa (3).png"
    },
    {
        id: 3,
        name: "Vitae suspendisse sed",
        price: "$34.00",
        oldPrice: "$42.00",
        image: "image/sofa (4).png"
    },
    {
        id: 4,
        name: "Vitae suspendisse sed",
        price: "$65.00",
        oldPrice: "$42.00",
        image: "image/bag (2).png"
    },
    {
        id: 5,
        name: "Vitae suspendisse sed",
        price: "$78.00",
        oldPrice: "$42.00",
        image: "image/watch.png"
    },
    {
        id: 6,
        name: "Vitae suspendisse sed",
        price: "$23.00",
        oldPrice: "$42.00",
        image: "image/watch (2).png"
    },
    {
        id: 7,
        name: "Vitae suspendisse sed",
        price: "$26.00",
        oldPrice: "$42.00",
        image: "image/watch (3).png"
    },
    {
        id: 8,
        name: "Vitae suspendisse sed",
        price: "$56.00",
        oldPrice: "$42.00",
        image: "image/headphone (2).png"
    },
    {
        id: 9,
        name: "Porttitor cum",
        price: "$90.00",
        oldPrice: "$42.00",
        image: "image/headphone.png"
    },
    {
        id: 10,
        name: "Nunc in",
        price: "$40.00",
        oldPrice: "$42.00",
        image: "image/watch.png"
    },
    {
        id: 11,
        name: "Vitae facilisis",
        price: "$50.00",
        oldPrice: "$42.00",
        image: "image/camera.png"
    },
    {
        id: 12,
        name: "Curabitur lectus",
        price: "$60.00",
        oldPrice: "$42.00",
        image: "image/bag.png"
    },
];

const perPageInput = document.querySelector(".per_page input");

function renderProducts(products = collection, count = products.length) {

    const collectionHTML = products
        .slice(0, count)
        .map((product) => {
            return `
                <div class="collection-card">

                    <div class="collection-img">

                        <div class="icon-box">
                            <i class="fa fa-shopping-cart"></i>
                            <i class="fa fa-search"></i>

                            <i class="fa fa-heart wishlist-icon"
                               onclick="toggleWishlist(event, ${product.id}, this)">
                            </i>
                        </div>

                        <img src="${product.image}" alt="${product.name}">

                    </div>

                    <div class="collection-title">
                        ${product.name}
                    </div>

                    <div class="price">
                        ${product.price}
                        <span class="old-price">
                            ${product.oldPrice}
                        </span>
                    </div>

                    <button
                        class="view-detail-btn"
                        onclick="openProduct(event, ${product.id})">
                        View Detail
                    </button>

                </div>
            `;
        })
        .join("");

    document.getElementById("collectionContainer").innerHTML = collectionHTML;

    loadWishlistState();
}

function openProduct(event, productId) {

    event.stopPropagation();

    // Find selected product
    const product = collection.find(function (item) {
        return item.id === productId;
    });

    if (!product) {
        alert("Product not found");
        return;
    }

    // Save selected product
    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    // Go directly to product detail
    window.location.href = "product_detail.html";
}
// Initial Load
renderProducts();

// Per Page Input Event
perPageInput.addEventListener("input", function () {

    const count = parseInt(this.value);

    if (isNaN(count) || count <= 0) {

        renderProducts(currentProducts);

    } else {

        renderProducts(currentProducts, count);

    }

});


// sort by function
const sortSelect = document.getElementById("fruits");

sortSelect.addEventListener("change", function () {

    let sortedProducts = [...collection];

    if (this.value === "low") {

        sortedProducts.sort((a, b) => {
            return parseFloat(a.price.replace("$", "")) -
                   parseFloat(b.price.replace("$", ""));
        });

    } 
    else if (this.value === "high") {

        sortedProducts.sort((a, b) => {
            return parseFloat(b.price.replace("$", "")) -
                   parseFloat(a.price.replace("$", ""));
        });

    } 
    else if (this.value === "az") {

        sortedProducts.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

    } 
    else if (this.value === "za") {

        sortedProducts.sort((a, b) => {
            return b.name.localeCompare(a.name);
        });

    }

    // Display sorted products
    renderProducts(sortedProducts);

});



function toggleWishlist(event, index, icon) {

    event.stopPropagation();

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const product = collection[index];

    const existIndex = wishlist.findIndex(item => item.id === product.id);

    if (existIndex === -1) {
        // ✅ ADD
        wishlist.push(product);

        icon.classList.add("active"); // 🔴 ADD CLASS

        localStorage.setItem("wishlist", JSON.stringify(wishlist));


    } else {
        //remove
        wishlist.splice(existIndex, 1);

        icon.classList.remove("active"); 

        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
}


function loadWishlistState() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    document.querySelectorAll(".wishlist-icon").forEach((icon, index) => {
        const product = collection[index];

        if (wishlist.some(item => item.id === product.id)) {
            icon.classList.add("active");
        }
    });
}

// ✅ CALL AFTER RENDER
// document.getElementById("collectionContainer").innerHTML = collectionHTML;
// loadWishlistState();


document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // ❌ If not logged in → go to login page
    if (!currentUser) {
        window.location.href = "My_Account.html";
        return;
    }

    // ✅ If logged in → show user data
    document.getElementById("userName").textContent = currentUser.name;
    document.getElementById("userEmail").textContent = "  Email: " + currentUser.email;
    document.getElementById("userContact").textContent = "  Contact: " + currentUser.contact;
});