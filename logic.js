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

for(let book of library){
    
    
    let tablerow = document.createElement("tr");
    table.appendChild(tablerow);
    for(let i = 0 ; i <4;i++){
        if(i == 0 ){
          let tabledata = document.createElement("td");
          tabledata.textContent = book.title;
table.appendChild(tabledata);  
        }
        else if (i==1){
            let tabledata = document.createElement("td");
            tabledata.textContent = book.author;
table.appendChild(tabledata);
        }
   else if (i==2){
            let tabledata = document.createElement("td");
            tabledata.textContent = book.pages;
table.appendChild(tabledata);
        }
           else if (i==3){
            let tabledata = document.createElement("td");
            tabledata.textContent = book.isread;
table.appendChild(tabledata);
        }
    }



}
