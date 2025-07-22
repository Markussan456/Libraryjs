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


 let turnedon = false;
let form = document.getElementById("formus");
let addbtn = document.getElementById("add");
addbtn.addEventListener("click",()=>{
    if(turnedon == true){
        form.classList.add("hidden");
        turnedon = false;
    }else{
turnedon = true;
form.classList.remove("hidden");

    }

});

form.addEventListener("submit",(e)=>{
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
if(readid.checked){
     readcheck = "yes";
}
else{
    readcheck = "no";
}

console.log(idtext+ " "+autorstext+" "+pages+" "+readcheck);
storebook(idtext,autorstext,pages,readcheck);
for(let a = library.length -1;a < library.length;a++){
    console.table(library);
    let tablerow = document.createElement("tr");
    table.appendChild(tablerow);
    for(let i = 0 ; i< props.length ;i++){
          let tabledata = document.createElement("td");
          tabledata.textContent = library[a][props[i]];
tablerow.appendChild(tabledata);     
    }
    let tabledatas = document.createElement("td");
    let deletebtn = document.createElement("button");
    deletebtn.classList.add("btnstils");
    deletebtn.textContent = "X";
    tabledatas.appendChild(deletebtn);
    tablerow.appendChild(tabledatas);
    console.log(library[library.length-1].id);

deletebtn.addEventListener("click",()=>{
       let myid = library[library.length-1].id;
       console.log(library[library.length-1].id);
       console.log(myid);
if(library[library.length-1].id == myid){
    let index = library.findIndex(book => book.id === myid);
   if(index !== -1)
   {
console.log(index);
    library.splice(index,1);
    tablerow.remove();
    console.table(library);
   }
    
}else{
    console.log("error");
}
    });

}
    } else {
      // Browser will show "Please fill out this field" messages
      console.log("Form is invalid.");
    }
});








for(let book of library){
    
    console.table(library);
    let tablerow = document.createElement("tr");
    table.appendChild(tablerow);
    for(let i = 0 ; i< props.length ;i++){
          let tabledata = document.createElement("td");
          tabledata.textContent = book[props[i]];
tablerow.appendChild(tabledata);     
    }
    let tabledatas = document.createElement("td");
    let deletebtn = document.createElement("button");
    deletebtn.classList.add("btnstils");
    deletebtn.textContent = "X";
    tabledatas.appendChild(deletebtn);
    tablerow.appendChild(tabledatas);
    console.log(book.id);
    deletebtn.addEventListener("click",()=>{
       let myid = book.id;
       console.log(book.id);
       console.log(myid);
if(book.id == myid){
    let index = library.findIndex(book => book.id === myid);
   if(index !== -1)
   {
console.log(index);
    library.splice(index,1);
    tablerow.remove();
    console.table(library);
   }
    else{
    console.log("error");
    console.table(library);
}
}
    });
}

