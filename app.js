const logInButton = document.querySelector("#logIn")
const addBookButton = document.querySelector("#addBook")

const catalogDisplay = document.querySelector("#catalog")
const backgroundPopUpElement = document.querySelector("#backgroundPopUp")
const closePopUpElement = document.querySelector("#close")

const titleInput = document.querySelector("#titleInput")
const authorInput = document.querySelector("#authorInput")
const pagesInput = document.querySelector("#pagesInput")
const urlInput = document.querySelector("#urlInput")
const readBoolean = document.querySelector("#readCheck")
const submitButton = document.querySelector("#submit")

let myLibrary = []
myLibrary.forEach(book => {
    book.onclick = () => console.log("asd")
})
addBookButton.onclick = () => displayPopUp();
closePopUpElement.onclick = () => closePopUp();
submitButton.onclick = () => submitForm()

document.addEventListener('click',function(e){
    let element = document.getElementById(e.target.id)
    if(element.textContent === "Read" || element.textContent === "Not Read"){
        checkRead(element)
    }
    if(element.textContent === "Delete"){
        deleteCard(element)
    }
})

function displayPopUp (){
    backgroundPopUpElement.style.display = "flex"
    backgroundPopUpElement.style.transform = "scale(1)"
}
function closePopUp (){
    backgroundPopUpElement.style.display = "none"
}

function checkRead(readCard){
    let parent = readCard.parentNode
    let index = Array.from(parent.parentNode.children).indexOf(parent)
    if(readCard.textContent == "Read"){
        readCard.setAttribute("class","readCardFalse")
        readCard.textContent = "Not Read"
        myLibrary[index].read = false
    } else if(readCard.textContent == "Not Read"){
        readCard.setAttribute("class","readCardTrue")
        readCard.textContent = "Read"
        myLibrary[index].read = true
    }
}

function deleteCard(element){
    let parent = element.parentNode
    let index = Array.from(parent.parentNode.children).indexOf(parent)
    catalogDisplay.removeChild(parent)
    myLibrary.splice(index,1)
    parent.classList.add("desvanecerse")
    console.log(myLibrary)
}

function submitForm (){
    if(titleInput.value == "" || authorInput.value == "" || pagesInput.value == "") return
    closePopUp()
    event.preventDefault()
    let book = new Book(titleInput.value,authorInput.value,pagesInput.value,readBoolean.value)
    addBookToLibrary(book)
    createCard()
    clearForm()
    console.log(myLibrary)
}
function createCard(){
    const card = document.createElement("div")
    const titleText= document.createElement("h2")
    const imgUrl = document.createElement("img")
    const authorText = document.createElement("h2")
    const pagesText = document.createElement("h2")
    const readCard = document.createElement("button")
    const deleteCard = document.createElement("button")
    deleteCard.setAttribute("class","deleteCard")
    readCard.setAttribute("class","readCard")
    readCard.id = Math.floor(Math.random() * 100)
    deleteCard.id = Math.floor(Math.random() * 100)
    titleText.id = "titleText"
    imgUrl.id = "imgUrl"
    card.appendChild(titleText)
    card.appendChild(imgUrl)
    card.appendChild(authorText)
    card.appendChild(pagesText)
    card.appendChild(readCard)
    card.appendChild(deleteCard)
    card.setAttribute("class","card")
    titleText.textContent = titleInput.value
    authorText.textContent = "By: " + authorInput.value
    pagesText.textContent = pagesInput.value + " pages"
    deleteCard.textContent = "Delete"
    if(readBoolean.checked){
        readCard.setAttribute("class","readCardTrue")
        readCard.textContent = "Read"
    } else {
        readCard.setAttribute("class","readCardFalse")
        readCard.textContent = "Not Read"
    }
    if(urlInput.value == ""){
        imgUrl.src = "img/not-available.jpg"
    } else{
        imgUrl.src = urlInput.value 
    }
    catalogDisplay.appendChild(card)
}

function clearForm(){
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    urlInput.value = ""
}


class Book{
        constructor(title,author,pages,read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read            
    }
}
function addBookToLibrary(newBook){
    if(newBook instanceof Book){
        myLibrary.push(newBook)
    }
}
