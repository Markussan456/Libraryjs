let library = [];
function Book(title,author,pages,isread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = "Read the book : "+isread;
    this.id = crypto.randomUUID();
}
function storebook(title,author,pages,isread){
const book1 = new Book(title,author,pages,isread);
library.push(book1);

}
storebook("Lord of whatever","jk ro",45,"yes");
storebook("Harry potter","togi",56,"yes");
storebook("Shans adventures","Shansbruh",245,"yes");


let table = document.querySelector("tbody");
const props = ["title","author","pages","isread"]
for(let book of library){
    let tablerow = document.createElement("tr");
    table.appendChild(tablerow);
    for(let i = 0 ; i< props.length ;i++){
          let tabledata = document.createElement("td");
          tabledata.textContent = book[props[i]];
table.appendChild(tabledata);     
    }
}

let form = document.getElementById("formus");
let addbtn = document.getElementById("add");
addbtn.addEventListener("click",()=>{
form.classList.remove("hidden");
});
