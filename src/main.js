let market = document.getElementById("market");

let generateMarket = () => {
  market.innerHTML = cartData
    .map((product) => {
      //https://www.youtube.com/watch?v=G3BS3sh3D8Q - used for the .map method

      return `<div id="product-id-${product.id}" class="cart-item">
    <div class="card-img">
      <a href="${product.link}"><img width="215" src="${product.img}" alt="" /></a>
    </div>
    <div class="details">
      <h4>
        <p>${product.title}</p>
        <p class="cart-item-price">€ ${product.price}</p>
      </h4>
      <div id="buttons" class="buttons">
        <svg onclick="addItem(${product.id})"
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
        <div class="quantity">${product.quantity}</div>
        <svg onclick="removeItem(${product.id})"
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
};

let shoppingCart = [];

const addItem = (id) => {
  let item = shoppingCart.find((product) => product.id === id);

  if (item) {
    item.quantity += 1;
  } else {
    shoppingCart.push({ id: id, quantity: 1 });
  }
  localStorage.setItem("items", JSON.stringify(shoppingCart));

  let findItem = shoppingCart.find((item) => (item.id = id));
  console.log(findItem);
  generateMarket();
};

const removeItem = (id) => {
  let item = shoppingCart.find((product) => product.id === id);

  if (item.quantity > 0) {
    if (item) {
      item.quantity -= 1;
    }
  }

  localStorage.setItem("items", JSON.stringify(shoppingCart));
  generateMarket();
};

generateMarket();

const plusBtn = document.getElementById("buttons");
