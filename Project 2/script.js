let books = {};

fetch("books.json")
  .then((response) => response.json())
  .then((booksData) => {
    console.log(booksData);
    books = booksData;
    renderBooks(books);
  })
  .catch((error) => console.error("Error loading JSON:", error));

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  console.log(data);
  console.log(data.map(book => book.image));
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-genre", book.language);
    newDiv.innerHTML = `
    <h3>${book.Title}</h3>
    <p>${book.language}</p>
    <p>${book.script}</p>
    <p>${book.scriptspecifications}</p>
    <p>${book.tags}</p>
    <p>${book.Year}</p>
    <p>${book.CountryofPublication}</p>
    <p>${book.author}</p>
    <p>${book.NationalityofAuthor}</p>
    <p>${book.Description}</p>
    <img src="${book.image}" alt="${book.Title}" class="book-image"/>
  `;
    wrapper.append(newDiv);
  });
};



let sortData = (e) => {
  wrapper.innerHTML = ""; 
  const isAscending = e.target.classList.contains("sortaz"); 
  books.sort((a, b) =>
    isAscending
      ? a.Title.localeCompare(b.Title)
      : b.Title.localeCompare(a.Title)
  ); 
  renderBooks(books);
};

let azSelection = document.querySelector(".sortaz");
let zaSelection = document.querySelector(".sortza");

document.querySelectorAll(".sortaz, .sortza").forEach((btn) => {
  btn.addEventListener("click", sortData);
});
