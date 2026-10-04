document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("wishlist-items");

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // ✅ REMOVE DUPLICATES
    wishlist = wishlist.filter((item, index, self) =>
        index === self.findIndex(p => p.id === item.id)
    );

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    function renderWishlist() {

        if (wishlist.length === 0) {
            container.innerHTML = "<h2>No items in wishlist</h2>";
            return;
        }

        container.innerHTML = wishlist.map(item => `
          <div class="wishlist-card">
            <img src="${item.image}" alt="product">

            <div class="card-content">
                <h3>${item.name || item.title}</h3>
                <div class="price">${item.price}</div>
            </div>
        </div>
        `).join("");
    }

    renderWishlist();
});