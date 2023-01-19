const search = document.querySelector(".searchbox");

const searchBook = () => {
    search.addEventListener("keyup", async (e) => {
  e.preventDefault();
  const searchTerm = e.target.value.toLowerCase();
  const config = { params: { q: searchTerm } };
//   // const res = await axios.get(`http://openlibrary.org/search.json?q=${searchTerm}`) or
  const res = await axios.get(`http://openlibrary.org/search.json`,config);
 
    let output = '';

    res.data.docs.forEach(book => {

        var bookTitle = book.title;
        if (book.title.length >= 40){
            bookTitle = book.title.slice(0,40);
        } 

        var bookAuthor = book.author_name
        if (book.author_name.length >1 ){
             bookTitle = book.author_name[0]
        }

        var pubYear = book.publish_year;
        if (book.publish_year.length > 1) {
            pubYear = book.publish_year[0]
        }

        var imageSrc = "https://covers.openlibrary.org/b/id/"+ book.cover_i + "-L.jpg";
        if (book.cover_i === undefined){
            imageSrc = "https://bimp-eaga.asia/sites/default/files/styles/cover/public/default_images/no-cover.png?itok=QYKv5ZlY"
        }

        output +=
            `<div class="productContent">
    <div class="imageContainer">
        <img class="productImg" src = ${imageSrc} alt=""
        />
        </div>
        <span class="bookTitle">${bookTitle}</span>
    <div class='lowerProduct'>
        <span class="author">${bookAuthor}</span>
        <span class="publishedYear">${pubYear}</span>
        </div>
    </div>`

      })

      productContainer.innerHTML = output;
    
    })
} 
searchBook();


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

    const randomLetter = Math.random().toString(36).slice(2, 3);
     //random letter/number search to generate random result

    const config = { params: { title: randomLetter } };
    const res = await axios.get(`http://openlibrary.org/search.json`, config);
    console.log(res.data.docs);

    let output = '';
    
    
    res.data.docs.slice(0,-10).forEach(book => {    // res.data.docs is an array of object 
        //sliced 10 only
        
        var bookTitle = book.title;
        if (book.title.length >= 40){
            bookTitle = book.title.slice(0,40);
        } 

        var bookAuthor = book.author_name
        if (book.author_name.length > 1 ){
             bookTitle = book.author_name[0];
        }

        var pubYear = book.publish_year;
        if (book.publish_year.length > 1) {
            pubYear = book.publish_year[0]
        }

        var imageSrc = "https://covers.openlibrary.org/b/id/"+ book.cover_i + "-L.jpg";
        if (book.cover_i === undefined){
            return;
        }

        output +=
            `<div class="productContent">
    <div class="imageContainer">
        <img class="productImg" src = ${imageSrc} alt=""
        />
        </div>
        <span class="bookTitle">${bookTitle}</span>
    <div class='lowerProduct'>
        <span class="author">${bookAuthor}</span>
        <span class="publishedYear">${pubYear}</span>
        </div>
    </div>`

      })

      productContainer.innerHTML = output;
    
    }
  displayProducts();
