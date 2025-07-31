// Book class
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
      this.id = crypto.randomUUID();
  }
 
}

// Main app class
class LibraryApp {
  constructor() {
    this.turnedon = false;
    this.library = [];

    // Optional: add a couple of books manually to test
const book = new Book("Harry potter","JK Rowling",245,"yes");
const book2 = new Book("Togis Book","Boooklandia",245,"No");
    // Call initial render
    this.addBook(book);
    this.addBook(book2);
    this.renderBooks();
    this.setupEventListeners();

  }

  // Add a book to the library
  addBook(book) {
    // push the book to this.library
    this.library.push(book);
    // call renderBooks afterward
    this.renderBooks();
  }

  // Render all books
  renderBooks() {
    let tbody = document.querySelector("tbody");
    tbody.textContent ="";
    
    // clear the container
    for(let i of this.library){
      let row1 = document.createElement("tr");
     let data1 = document.createElement("td");
     let data2 = document.createElement("td");
     let data3 = document.createElement("td");
     let data4 = document.createElement("td");
    
     let data4text = document.createElement("label");
     data4.appendChild(data4text);
     let data4box = document.createElement("input");
     data4box.type = "checkbox";
     data4.appendChild(data4box);
     let btncont = document.createElement("td");
     let deletebtn = document.createElement("button");

data4box.addEventListener("change",()=>{
  if(!data4box.checked){
data4text.textContent = "no";
  }else if (data4box.checked){
    data4text.textContent = "yes";
  }
  

})

deletebtn.textContent = "X";
deletebtn.setAttribute("data-id", i.id);
deletebtn.classList.add("delbtn");
  deletebtn.addEventListener("click",()=>{
   const id = deletebtn.getAttribute("data-id");
const index = this.library.findIndex(book => book.id === id);

    if (index !== -1) {
      console.log("clicked");
      console.log(index);
  this.library.splice(index, 1); // deletes "You"
  this.renderBooks();
}

   })

tbody.appendChild(row1);
row1.appendChild(data1);
row1.appendChild(data2);
row1.appendChild(data3);
row1.appendChild(data4);
row1.appendChild(btncont);
btncont.appendChild(deletebtn);
data1.textContent = i.title;
data2.textContent = i.author;
data3.textContent = i.pages;
data4text.textContent = i.isRead;
if(data4text.textContent === "yes"){
  data4box.checked = true;
}
    }
    // loop through this.library and create book cards
  }

  // Set up any event listeners (for form, buttons, etc.)
  setupEventListeners() {
    // handle form submission

 
let form = document.getElementById("formus");
let addbtn = document.getElementById("add");
addbtn.addEventListener("click", () => {
  if (this.turnedon == true) {
    form.classList.add("hidden");
    this.turnedon = false;
  } else {
    this.turnedon = true;
    form.classList.remove("hidden");
  }
});

form.addEventListener("submit", (e) =>{
  e.preventDefault();
if (form.reportValidity()) {
    // All fields are valid, proceed
    const idinput = document.getElementById("tituls");
    const idtext = idinput.value;

    const autorsid = document.getElementById("authors");
    const autorstext = autorsid.value;

    const pagesid = document.getElementById("pages");
    const pagesnum = pagesid.value;
    const pages = parseInt(pagesnum);

    const readid = document.getElementById("read");
    let readcheck = "none";
    if (readid.checked) {
      readcheck = "yes";
    } else {
      readcheck = "no";
    }
       console.log(idtext + " " + autorstext + " " + pages + " " + readcheck);
    const personbook = new Book(idtext, autorstext, pages, readcheck);
    this.addBook(personbook);
  
  }


})

  }
}

// Instantiate the app
const app = new LibraryApp();
