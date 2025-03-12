let market = document.getElementById("market");
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let total = 0;
let superTotal = 0;

let generateMarket = () => {
  if (shoppingCart.length === 0) {
    market.innerHTML = `<div class="empty"><h1>The cart is empty - add new products.</h1></div>`;
  } else {
    market.innerHTML = shoppingCart
      .map((product) => {
        let { id, link, img, title, price, quantity } = product;
        //https://www.youtube.com/watch?v=G3BS3sh3D8Q - used for the .map method

        return `<div id="product-id-${id}" class="cart-item">
    <div class="card-img">
      <a href="${link}"><img width="215" src="${img}" alt="" /></a>
    </div>
    <div class="details">
      <h3>
        <p>${title}</p>
        <p class="cart-item-price">€ ${price * quantity}</p>
      </h3>
      <div id="buttons" class="buttons">
        <svg onclick="addItem(${id})"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="plus-btn"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
          />
        </svg>
        <div class="quantity">${quantity}</div>
        <svg onclick="removeItem(${id})"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="minus-btn"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
          <path
            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
          />
        </svg>
      </div>
    </div>
  </div>`;
      })
      .join("");
  }
  calculateTotal();
};

//used ChatGPT to calculate the sum of everyproducts total and display it https://chatgpt.com/share/67d184af-a678-8007-ae61-2af60cb2cbaa
function calculateTotal() {
  superTotal = shoppingCart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  document.getElementById(
    "total-price"
  ).innerHTML = `Total: €${superTotal.toFixed(2)}`;
}

//hitta vilket vad id:t på knappen jag tryckte på (addItem)

function addItem(id, total) {
  let item = cartData.find((product) => product.id === id);

  if (item) {
    item.quantity += 1;
  }

  let cartItem = shoppingCart.find((product) => product.id === id);

  if (!cartItem) {
    shoppingCart.push({ id: id, quantity: item.quantity });
  } else {
    cartItem.quantity = item.quantity;
  }
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  total = item.price * item.quantity;
  calculateTotal();
  generateMarket();

  //console.log(total);
}

function removeItem(id, total) {
  let item = cartData.find((product) => product.id === id);
  let cartItem = shoppingCart.find((product) => product.id === id);

  if (!item || item.quantity === 0) return;
  else {
    item.quantity -= 1;
  }

  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      shoppingCart = shoppingCart.filter((product) => product.id !== id);
    }
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  total = item.price * item.quantity;
  generateMarket();
  calculateTotal();
  //console.log(total);
}

console.log(shoppingCart);
// updatera cartData objektets quantity som hade det id,t

//pusha in ett nytt object med samma id och samma quantity i en ny array

// spara den nya arrayen i localStorage

generateMarket();
calculateTotal();
