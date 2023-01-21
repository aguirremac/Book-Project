///GOOGLE SEARCH API KEY AIzaSyAwSRanyWIeC1v6E3b2ndCTZG4rb-LTIiU

const submit = document.querySelector(".magnifyButton");
const searchInput = document.querySelector(".searchbox");
const productContainer = document.querySelector(".products");
const searchText = document.querySelector('.searchText');
const apiKey = 'AIzaSyAozjA5x184ufKIKnTVj3X7I1TlH4yR6gc';
const trending = document.querySelector('.trending');
const popularAuthor = document.querySelector('.popularAuthor');
const trendingContainer = document.querySelector('.products2');
const popularAuthorContainer = document.querySelector('.products3');




//




//search function

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  searchText.textContent = 'Searching for "' +searchTerm+ '"'
  trending.textContent = ''
  popularAuthor.textContent = ''
  popularAuthorContainer.style.display = 'none';
  trendingContainer.style.display = 'none';
  newContainer.style.display = 'none';
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      searchTerm +
      "&key=" + apiKey +
      "&maxResults=12"
  );

  //googlebooksAPI key AIzaSyByYKm_A-AVZtii6N8uc9cxY3VNpdNxTUA

  console.log(res.data.items);
  totalResult = res.data.items;
  showOutput();
  
});

// create function for category



const fiction = document.querySelector(".fiction");

  
  fiction.addEventListener("click", async () => {
  searchText.textContent = 'Fiction'
  trending.textContent = ''
  popularAuthor.textContent = ''
  popularAuthorContainer.style.display = 'none';
  trendingContainer.style.display = 'none';
  newContainer.style.display = 'none';
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=" + apiKey
  );
  totalResult = res.data.items;
  showOutput();
  
});

const children = document.querySelector(".children");
children.addEventListener("click", async () => {
  searchText.textContent = "Children's"
  trending.textContent = ''
  popularAuthor.textContent = ''
  popularAuthorContainer.style.display = 'none';
  trendingContainer.style.display = 'none';
  newContainer.style.display = 'none';
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:children&key=" + apiKey
  );
  totalResult = res.data.items;
  showOutput();
});

const nature = document.querySelector(".nature");



nature.addEventListener("click", async () => {
  searchText.textContent = "Nature"
  trending.textContent = ''
  popularAuthor.textContent = ''
  popularAuthorContainer.style.display = 'none';
  trendingContainer.style.display = 'none';
  newContainer.style.display = 'none';
  var res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:nature&key=" + apiKey
  );
  totalResult = res.data.items;
  showOutput();
});

const religion = document.querySelector(".religion");


religion.addEventListener("click", async () => {
  searchText.textContent = "Religion"
  trending.textContent = ''
  popularAuthor.textContent = ''
  popularAuthorContainer.style.display = 'none';
  trendingContainer.style.display = 'none';
  newContainer.style.display = 'none';
  var res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:religion&key=" + apiKey
  );
  totalResult = res.data.items;
  showOutput();
});





//creating range function 

const range = document.querySelector(".rangeBtn");
const yearValueStart = document.querySelector(".yearValueStart");
const yearValueEnd = document.querySelector(".yearValueEnd");

range.min = 1900; //inserting innerHTML of range min
range.max = 2023; //inserting innerHTML of range max

yearValueEnd.textContent = range.max;
yearValueStart.textContent = range.min;
range.value = range.max; //setting initial range max to 2023


//range function

range.addEventListener("click ", async (e) => {
  e.preventDefault()
  const searchTerm = "a";
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=&key=" + apiKey
  );

  year = range.value;
  console.log(year)
  yearValueEnd.textContent = year;
  const filteredBook = res.data.items.filter((book) =>{ book.volumeInfo.publishedDate <= year
})

//  console.log(...filteredBook)

  
  // totalResult = filteredResult.map((book) => book.volumeInfo.publishedDate )
  // showOutput();

});



//creating an output function to shorten the code
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






// new released books function

const newContainer = document.querySelector(".products1");

const newReleased = async () => {
  searchText.textContent = 'New Released Books'
    const rand = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];;
    const res = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +rand+ "&orderBy=newest&printType=books&key=" + apiKey + "&maxResults=3")
    totalResult = res.data.items

    if (totalResult === undefined){
      return;
    }
    
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
  newContainer.style.top = '0px'
  newContainer.innerHTML = output;



}
newReleased()


//popular Authors

const authors = [ "Anne Rice","Cassandra Clare","George R. R. Martin","Rick Riordan","Veronica Roth","Patricia Cornwell","Nicholas Sparks","Stephenie Meyer","EL James","Dan Brown","C. S. Lewis","J. R. R. Tolkien","James Patterson","Stephen King","R. L. Stine","Dr. Seuss","William Shakespeare","J. K. Rowling","Suzanne Collins"]

const popularAuthors = async () => {
  const rand = authors[Math.floor(Math.random()*21)]
    const res = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +rand+ "&key=" + apiKey + "&maxResults=3")
    totalResult = res.data.items

    if (totalResult === undefined){
      return;
    }
    
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
  popularAuthor.textContent = 'Popular Authors'
  popularAuthorContainer.style.top = '0px'
  popularAuthorContainer.innerHTML = output;
  
    
}
popularAuthors()


//trending Books

const hotBooks = [ "Chain of Thorns","If He Had Been with Me","The Battle of The Labyrinth","The Subtle Art of Not Giving a F*ck","The 5 Love Languages","Harry Potter and the Order of the Phoenix","Interesting Facts For Curious Minds","Hunger Games","Ugly Love","Reminders of Him","Atomic Habits","The Seven Husbands of Evelyn Hugo","Verity","Where the Crawdads Sing","It Ends with Us","It Starts with U"]

const trendingBooks = async () => {
  trending.textContent = 'Hot Pick For You'
  const rand = hotBooks[(Math.floor(Math.random()*16))]
  const res = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=" +rand+ "&orderBy=relevance&printType=books&key=" + apiKey + "&maxResults=1")
    totalResult = res.data.items

  if (totalResult === undefined){
    return;
  }
  
  
  
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
trendingContainer.style.top = '0px';
trendingContainer.innerHTML = output;  
}
trendingBooks()



const forYou = document.querySelector(".home");

forYou.addEventListener("click", async () => {
  location.reload();
})
