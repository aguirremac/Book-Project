
const bookData = [
  {
    id: 1,
    name: "100 Interiors Around the World, Bibliotheca Universalis",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9783836557269.1.jpg",
    author: "Taschen",
    price: 1675.0,
    categ: "Arts & Designs",
  },
  {
    id: 2,
    name: "Healing Through Words",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/i/m/imageedit_1_3855508583.jpg",
    author: "Rupi Kaur",
    price: 1399.0,
    categ: "Lifestyle",
  },
  {
    id: 3,
    name: "Ariana and Whisper: Unicorn Academy, Book 8",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9780593179482-1.jpg",
    author: "Julie Sykes",
    price: 323.0,
    categ: "Children's",
  },
  {
    id: 4,
    name: "I Am Strong: A Positive Power Stor",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9780593481806_2.jpg",
    author: "Suzy Capozzi",
    price: 269.0,
    categ: "Children's",
  },
  {
    id: 5,
    name: "Peppa Pig: I Spy Up in the Sky! Colouring Book",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9780241415207-2.jpg",
    author: "Penguin",
    price: 299.0,
    categ: "Children's",
  },
  {
    id: 6,
    name: "The Cat in the Hat: In English and French",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9780394801711.jpg",
    author: "Dr. Seuss",
    price: 569.0,
    categ: "Children's",
  },

  {
    id: 7,
    name: "The Curious Barista's Guide to Coffee",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9781849755634_1.jpg",
    author: "Tristan Stephenson",
    price: 1399.0,
    categ: "Lifestyle",
  },

  {
    id: 8,
    name: "The Lightning Thief: Percy Jackson and the Olympians",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/l/i/lightning_thief-1_1.jpg",
    author: "Rick Riordan",
    price: 740.0,
    categ: "Graphic Novel",
  },

  {
    id: 9,
    name: "Tintin on the Moon: Destination Moon & Explorers on the Moon",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9780316494823_4007e_1.jpg",
    author: "Herge",
    price: 1559.0,
    categ: "Graphic Novel",
  },

  {
    id: 10,
    name: "Seven Days: Monday–Sunday",
    img: "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9781974709274.1.jpg",
    author: "Venio Tachibana and Rihito Takarai",
    price: 968.0,
    categ: "Graphic Novel",
  },
];

const productContainer = document.querySelector(".products");

//adding showAll function
const displayProducts = (filteredProducts) => {
  //filteredProducts is just an argument sample
  productContainer.innerHTML = filteredProducts
    .map(
      (item) =>
        `<div class="productContent">
        <div class="imageContainer">
            <img class='productImg'
            src = ${item.img}
            alt=""
            />
            </div>
            <span class="bookTitle">${item.name}</span>
        <div class='lowerProduct'>
            <span class="author"> ${item.author}</span>
            <span class="bookPrice">&#8369;${item.price.toLocaleString()}</span>
            </div>
        </div>`
    )
    .join(""); //joins array with commas
};

const all = document.querySelector(".all");
const arts = document.querySelector(".arts");
const children = document.querySelector(".children");
const graphic = document.querySelector(".graphic");
const lifestyle = document.querySelector(".lifestyle");
const search = document.querySelector(".searchbox");
const rangePrice = document.querySelector(".rangeBtn");
const priceValue = document.querySelector(".priceValue");

//adding function to category buttons
const showAll = () => {
  all.addEventListener("click", () => displayProducts(bookData));
};

showAll();

const showArts = () => {
  arts.addEventListener("click", () =>
    displayProducts(bookData.filter((item) => item.categ === "Arts & Designs"))
  );
};

showArts();

const showChildren = () => {
  children.addEventListener("click", () =>
    displayProducts(bookData.filter((item) => item.categ === "Children's"))
  );
};

showChildren();

const showGraphic = () => {
  graphic.addEventListener("click", () =>
    displayProducts(bookData.filter((item) => item.categ === "Graphic Novel"))
  );
};

showGraphic();

const showLifestyle = () => {
  lifestyle.addEventListener("click", () =>
    displayProducts(bookData.filter((item) => item.categ === "Lifestyle"))
  );
};

showLifestyle();

//adding search input function

const searchInput = () => {
  search.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
      displayProducts(
        (bookData.filter((item) => (item.name.concat(item.author)).toLowerCase().indexOf(value) !== -1) ))

        //added two array categories using concat syntax
    } else {
      displayProducts(bookData);
    }
  });
};

searchInput();

//adding function to range amount
const setFilterRangePrice = () => {
  const priceList = bookData.map((item) => item.price);
  const minPrice = Math.min(...priceList); //... spread the array to regular arg to work
  const maxPrice = Math.max(...priceList);

  priceValue.textContent = "₱" + maxPrice.toLocaleString();
  rangePrice.min = minPrice; //setting min innerHTML to minPrice
  rangePrice.max = maxPrice;
  rangePrice.value = maxPrice; //setting min innerHTML to maxPrice

  rangePrice.addEventListener("input", (e) => {
    priceValue.textContent = "₱" + e.target.value;
    const newMaxValue = e.target.value;
    displayProducts(bookData.filter((item) => item.price <= newMaxValue));
  });
};

setFilterRangePrice();

displayProducts(bookData);

//&#8369; Peso html code
