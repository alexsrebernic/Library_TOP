const logInButton = document.querySelector("#logIn")
const addBookButton = document.querySelector("#addBook")
const catalogDisplay = document.querySelector("#catalog")


function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    let readFalseOrTrue = (read) => {
        if(read){
            return "Already read!"

    } else {
        return "Not read yet"
    }
}
    this.info = function(){
        return this.title + " by " + this.author  + "," + this.pages + " pages, " + readFalseOrTrue(this.read)
    }
}
let myLibrary = []
function addBookToLibrary(){
    if(new Book() instanceof Book){
        myLibrary.push(new Book)
    }
}
function displayBooks(){
    for(let l = 0, n = myLibrary.length; l < n ; l++){

    } 
}