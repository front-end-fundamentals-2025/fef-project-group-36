let market = document.getElementById("market");

let cartData = [
  {
    id: "1",
    title: "nocco",
    price: 34,
    img: "img/redbull.jpg.webp",
    quantity: 1,
    link: "//details.monster.html",
  },
  {
    id: "2",
    title: "redbull",
    price: 55,
    img: "img/powerking.jpg",
    quantity: 1,
  },
  {
    id: "3",
    title: "monster",
    price: 66,
    img: "img/nocco_bcaa_caribbean_330ml.jpg.avif",
    quantity: 1,
  },
  {
    id: "4",
    title: "Monster Ultra White",
    price: 1.5,
    img: "img/nocco_bcaa_caribbean_330ml.jpg.avif",
    quantity: 1,
  },
];

let generateMarket = () => {
  market.innerHTML = cartData
    .map((cartData) => {
      //https://www.youtube.com/watch?v=G3BS3sh3D8Q - used for the .map method
      return `<div id="product-id-${cartData.id}" class="cart-item">
    <div class="card-img">
      <img width="215" src="${cartData.img}" alt="" />
    </div>
    <div class="details">
      <h4>
        <p>${cartData.title}</p>
        <p class="cart-item-price">€ ${cartData.price}</p>
      </h4>
      <div class="buttons">
        <svg onclick="more"
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
        <div class="quantity">0</div>
        <svg onclick="less"
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

generateMarket();

/*`<div id="product-id-${id}" class="cart-item">
    <div class="card-img">
      <img width="215" src="${img}" alt="" />
    </div>
    <div class="details">
      <h4>
        <p>${title}/p>
        <p class="cart-item-price">€ ${price}</p>
      </h4>
      <div class="buttons">
        <svg
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
        <div class="quantity">0</div>
        <svg
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
  </div>`*/

//console.log(market.innerHTML);
