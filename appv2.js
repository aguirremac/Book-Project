// const search = document.querySelector(".searchbox");


// search.addEventListener("keyup", async (e) => {
//   e.preventDefault();
//   const searchTerm = e.target.value.toLowerCase();
//   const config = { params: { q: searchTerm } };
// //   // const res = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`) or
//   const res = await axios.get(`http://openlibrary.org/search.json`,config);
 
//   console.log(res.data.docs);
  

//   for (i = 0; (i = res.data.items.length); i++) {
//     const resultSearch = res.data.items[i].volumeInfo;
//     console.log(resultSearch);
    
//   }

//   //create a function to show results
//   const displayProducts = (filteredProducts) => {
//     //filteredProducts is just an argument sample

//       productContainer.innerHTML = filteredProducts.map(
//           (item) =>
//             `<div class="productContent">
//     <div class="imageContainer">
//         <img class='productImg'
//         src = ${item.imageLinks.thumbnail}
//         alt=""
//         />
//         </div>
//         <span class="bookTitle">${item.title}</span>
//     <div class='lowerProduct'>
//         <span class="author"> ${item.author[0]}</span>
//         <span class="publishedYear">&#8369;${item.publishedDate.splice(
//           0,
//           4
//         )}</span>
//         </div>
//     </div>`
//         )
//         .join("");
//   };
//   displayProducts(resultSearch);
// });




//create function to showAll

// const showAll = () => {
//     all.addEventListener('click')
// }

// let allBooks = [];
//     for (let i = 0; i < res.data.)

// displayProducts(allBooks);

// create a function to show results

const productContainer = document.querySelector(".products");

const displayProducts = async () => {

    const randomLetter = Math.random().toString(36).slice(2, 4);
    const config = { params: { title: randomLetter } };
    const res = await axios.get(`http://openlibrary.org/search.json`,config);
    console.log(res.data.docs);
    productContainer.innerHTML = res.data.docs.map((item) => {
            `<div class="productContent">
    <div class="imageContainer">
        <img class='productImg'
        src = 
        alt=""
        />
        </div>
        <span class="bookTitle">${item.title}</span>
    <div class='lowerProduct'>
        <span class="author">${item.author_name[0]}</span>
        <span class="publishedYear">${item.publish_year[0]}</span>
        </div>
    </div>`
      })
        .join("");

    }
  displayProducts();
