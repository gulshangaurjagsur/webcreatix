function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}



  const products = [
    { img: "images/product/1.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/2.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/3.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/4.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/5.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/6.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/7.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/8.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/9.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/10.jpg", name: "Perfumer", price: 100 },

{ img: "images/product/11.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/12.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/13.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/14.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/15.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/16.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/17.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/18.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/19.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/20.jpg", name: "Perfumer", price: 100 },

{ img: "images/product/21.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/22.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/23.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/24.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/25.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/26.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/27.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/28.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/29.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/30.jpg", name: "Perfumer", price: 100 },

{ img: "images/product/31.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/32.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/33.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/34.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/35.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/36.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/37.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/38.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/39.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/40.jpg", name: "Perfumer", price: 100 },

{ img: "images/product/41.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/42.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/43.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/44.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/45.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/46.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/47.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/48.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/49.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/50.jpg", name: "Perfumer", price: 100 },

{ img: "images/product/51.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/52.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/53.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/54.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/55.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/56.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/57.jpg", name: "Perfumer", price: 100 },
{ img: "images/product/58.jpg", name: "Perfumer", price: 100 },


    /* same pattern copy karke 60 tak bana sakte ho */
  ];

  const container = document.getElementById("productContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let itemsPerLoad = 12;
  let currentIndex = 0;

  function loadProducts() {
  const slice = products.slice(currentIndex, currentIndex + itemsPerLoad);

  slice.forEach(product => {
    const div = document.createElement("div");
    div.className = "box";

    div.innerHTML = `
      <div class="img-box">
        <img src="${product.img}" loading="lazy" alt="${product.name}">
      </div>

      <div class="detail-box">
        <h5>${product.name}</h5>
        <h4><span>$</span>${product.price}</h4>
        <a href="#" class="buy-btn">Buy Now</a>
      </div>
    `;

    container.appendChild(div);
  });

  currentIndex += itemsPerLoad;

  if (currentIndex >= products.length) {
    loadMoreBtn.style.display = "none";
  }
}


  loadMoreBtn.addEventListener("click", loadProducts);

  // initial load
  loadProducts();
