// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts(category) {
  fetch("products.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("product-grid");
      const items = data[category];
      items.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
          <div class="card">
            <img src="${item.img}" class="card-img-top" alt="Product ${i+1}">
            <div class="card-body">
              <p class="card-text">${item.desc.replace(/\n/g, "<br>")}</p>
              <p><strong>₹${item.price}</strong></p>
              <button class="btn btn-success" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
            </div>
          </div>`;
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Error loading products:", err));
}

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
  alert("Added to cart");
}

function viewCart() {
  const cartTable = document.getElementById("cart-table");
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cartTable.innerHTML = `<tr><th>Description</th><th>Price</th></tr>`;
  cart.forEach(item => {
    total += item.price;
    cartTable.innerHTML += `<tr><td>${item.desc}</td><td>₹${item.price}</td></tr>`;
  });

  cartTable.innerHTML += `<tr><td><strong>Total</strong></td><td><strong>₹${total}</strong></td></tr>`;
}

function placeOrder() {
  cart = [];
  localStorage.removeItem("cart"); // Clear localStorage
  document.getElementById("cart-table").innerHTML = "";
  alert("Your order was placed successfully!");
}
