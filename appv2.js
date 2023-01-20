///GOOGLE SEARCH API KEY AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw

const submit = document.querySelector(".magnifyButton");
const searchInput = document.querySelector(".searchbox");
const productContainer = document.querySelector(".products");

//search function

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      searchTerm +
      "&key=AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw" +
      "&maxResults=40"
  );

  //googlebooksAPI key AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw

  console.log(res.data.items);
  totalResult = res.data.items;
  showOutput();
});

// create function for category

const fiction = document.querySelector(".fiction");

fiction.addEventListener("click", async () => {
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw"
  );
  totalResult = res.data.items;
  showOutput();
});

const children = document.querySelector(".children");

children.addEventListener("click", async () => {
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:children&key=AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw"
  );
  totalResult = res.data.items;
  showOutput();
});

const nature = document.querySelector(".nature");

nature.addEventListener("click", async () => {
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:nature&key=AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw"
  );
  totalResult = res.data.items;
  showOutput();
});

const religion = document.querySelector(".religion");

religion.addEventListener("click", async () => {
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:religion&key=AIzaSyAivT_GqY9-Rl6MBY7Z0whim7SGatWXvJw"
  );
  totalResult = res.data.items;
  showOutput();
});

const showOutput = () => {
  let output = "";

  totalResult.forEach((book) => {
    // res.data.items is an array of object

    try {
      var bookTitle = book.volumeInfo.title;
      if (book.volumeInfo.title >= 40) {
        bookTitle = book.title.slice(0, 40);
      }

      var bookAuthor = book.volumeInfo.authors;
      if (Array.isArray(bookAuthor)) {
        bookAuthor = book.volumeInfo.authors[0];
      }

      if (bookAuthor === undefined) {
        return;
      }

      var pubYear = book.volumeInfo.publishedDate;
      if (pubYear.length > 4) {
        pubYear = pubYear.slice(0, 4);
      }

      var imageSrc = book.volumeInfo.imageLinks.thumbnail;

      var infoLink = book.volumeInfo.infoLink;

      output += `<div class="productContent">
    <div class="imageContainer">
        <img class="productImg" src = ${imageSrc} alt=""
        />
        </div>    
    <div class='lowerProduct'>
        <span class="bookTitle">${bookTitle}</span>
        <div class='yearAuthor'>
        <span class="author">${bookAuthor}</span>
        <span class="publishedYear">${pubYear}</span>
        </div>
        <a class="bookInfo" href=${infoLink}>Book Info</a>
        </div>
        
    </div>`;
    } catch (e) {
      return;
    }
  });
  productContainer.innerHTML = output;
};
