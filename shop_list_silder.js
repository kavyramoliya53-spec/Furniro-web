const shop = [
  {
    id: 1,
    image: "image/Rectangle 33 (1).svg",
    name: "Dicen morbi",
    price: "$260.00",
    oldPrice: "$360.00"
  },
  {
    id: 2,
    image: "image/Rectangle 33 (3).svg",
    name: "Sodales sit",
    price: "$300.00",
    oldPrice: "$400.00"
  },
  {
    id: 3,
    image: "image/Rectangle 33 (4).svg",
    name: "Nibh massa",
    price: "$200.00",
    oldPrice: "$350.00"
  },
  {
    id: 4,
    image: "image/Rectangle 33 (5).svg",
    name: "Velit augue",
    price: "$260.00",
    oldPrice: "$360.00"
  },
  {
    id: 5,
    image: "image/Rectangle 33 (6).svg",
    name: "Nibh augue",
    price: "$260.00",
    oldPrice: "$360.00"
  },
  {
    id: 6,
    image: "image/Rectangle 33.svg",
    name: "Nibh augue",
    price: "$260.00",
    oldPrice: "$360.00"
  },
  {
    id: 7,
    image: "image/Rectangle 37.svg",
    name: "Nibh augue",
    price: "$260.00",
    oldPrice: "$360.00"
  },
];



const shopList = document.getElementById("shopList");

productList.innerHTML = shop.map(product => `
  <div class="shop-card">
    <div class="shop-img">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="shop-details">
      <h4>${product.name}</h4>
      <div class="price">
        ${product.price}
        <span class="old-price">${product.oldPrice}</span>
        <i class="fa fa-star" style="color:#ffb400;"></i>
        <i class="fa fa-star" style="color:#ffb400;"></i>
        <i class="fa fa-star" style="color:#ffb400;"></i>
        <i class="fa fa-star" style="color:#ffb400;"></i>
        <i class="fa fa-star" style="color:#ffb400;"></i>
      </div>
      <p class="shop-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
      </p>
      <div class="shop-icons">
        <img src="image/fluent_cart-24-regular.svg" alt="" onclick="addCart(${product.id})">
        <img src="image/Vector1.svg" alt="" onclick="addToWishlist(${product.id})">
        <img src="image/Vector2.svg" alt="">
      </div>
    </div>
  </div>
`).join("");



function addCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = shop.find(item => item.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // ✅ Redirect to cart page
  window.location.href = "Shopping_cart.html";
}