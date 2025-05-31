let market = document.getElementById("market");
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || []; // gets the shoppingcart from localstorage if it doesn't exists it makes it empty

let generateMarket = () => {
  //takes each object in cartData (array) and applies this code for each item.
  market.innerHTML = cartData
    .map((product) => {
      let { id, link, img, title, price, quantity } = product;
      //https://www.youtube.com/watch?v=G3BS3sh3D8Q - used for the .map method
      const totalPrice = price * quantity;
      return `<div id="product-id-${id}" class="cart-item">
    <div class="card-img">
      <a href="${link}"><img width="215" src="${img}" alt="${title}" /></a>
    </div>
    <div class="details">
    <h2>  <p>${title}</p> </h2>
    <h2>  <p>€ ${price}</p> </h2>
      <h4>
        <p class="cart-item-price"> ${quantity} x € ${price} - € ${totalPrice.toFixed(
        2
      )}</p>
      </h4>
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
    .join(""); // the map will by default retrun values like this "blablabla, blablabla, blablabla" but join removes the ","
};

function addItem(id) {
  let item = cartData.find((product) => product.id === id); //this searches the cartData and checks the which product has been clicked and stores it in item

  if (item) {
    //if the item already exists in cart data (which it always does) we update the quantity
    item.quantity += 1;
  }

  let cartItem = shoppingCart.find((product) => product.id === id); //here we do almost the same thing but we use the shoppingcart instead of cartdata.

  if (!cartItem) {
    //we check if the product exist or not in the shopping cart, if it does we make the quantity be the item quantity if it doesn't we push a new object with the right id
    shoppingCart.push({
      id: id,
      quantity: item.quantity,
      link: item.link,
      title: item.title,
      img: item.img,
      price: item.price,
    });
  } else {
    cartItem.quantity = item.quantity;
  }

  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart)); //stores the shopping cart in local storage
  generateMarket(); //update the market
}

function removeItem(id) {
  let item = cartData.find((product) => product.id === id); //does the same thing as adding items
  let cartItem = shoppingCart.find((product) => product.id === id);

  if (item.quantity === 0)
    return; //if an item does not exist or is the quantity is 0 we do nothing
  else {
    item.quantity -= 1; //if the items quantity is over 0 we remove the quantity, but we dont remove the entire object since it won't displayed on the product page
  }

  if (cartItem) {
    //does the same thing but the only difference is that we remove the object in the shopping cart if it is less than 1.
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      shoppingCart = shoppingCart.filter((product) => product.id !== id); //removes the right product by removing products that has no corresponding id
    }
  }
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  generateMarket();
}

generateMarket();
