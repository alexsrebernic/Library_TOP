const logInButton = document.querySelector("#logIn")
const addBookButton = document.querySelector("#addBook")
const catalogDisplay = document.querySelector("#catalog")

const backgroundPopUpElement = document.querySelector("#backgroundPopUp")
const closePopUpElement = document.querySelector("#close")

addBookButton.onclick = () => displayPopUp();
closePopUpElement.onclick = () => closePopUp();

function displayPopUp (){
backgroundPopUpElement.style.display = "flex"
backgroundPopUpElement.style.transform = "scale(1)"

}
function closePopUp (){
backgroundPopUpElement.style.display = "none"

}


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