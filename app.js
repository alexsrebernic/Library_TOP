let myLibrary = []

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

class Book{
    constructor(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read            
    }
}

function displayPopUp (){
    if(catalogDisplay.childNodes.length == 12){
        submitButton.type = "button"
        submitButton.onclick = () => {
            return
        }
       setTimeout(function(){
            submitButton.textContent = "Max Books!"
            submitButton.style.backgroundColor = "rgb(252, 145, 145)"
        }, 1000);
        
    } else {
        submitButton.type = "submit"
        submitButton.onclick = () => submitForm()
        submitButton.textContent = "Submit"
    }
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
        localStorage.setItem("Library",JSON.stringify(myLibrary))

    } else if(readCard.textContent == "Not Read"){
        readCard.setAttribute("class","readCardTrue")
        readCard.textContent = "Read"
        myLibrary[index].read = true
        localStorage.setItem("Library",JSON.stringify(myLibrary))

    }
}

function deleteCard(element){
    let parent = element.parentNode
    let grandparent = parent.parentNode
    let index = Array.from(grandparent.parentNode.children).indexOf(grandparent)
    catalogDisplay.removeChild(grandparent)
    myLibrary.splice(index,1)
    localStorage.setItem("Library",JSON.stringify(myLibrary))
    localStorage.setItem('document', JSON.stringify(catalogDisplay.innerHTML))

}
function submitForm (){
    if(titleInput.value == "" || authorInput.value == "" || pagesInput.value == "") return
    closePopUp()
    event.preventDefault()
    let book = new Book(titleInput.value,authorInput.value,pagesInput.value,readBoolean.value)
    addBookToLibrary(book)
    createCard()
    clearForm()
    localStorage.setItem('document', catalogDisplay.innerHTML)

}

function createCard(){
    const cardMoving = document.createElement("div")
    const card = document.createElement("div")
    const titleText= document.createElement("h2")
    const imgUrl = document.createElement("img")
    const authorText = document.createElement("h2")
    const pagesText = document.createElement("h2")
    const readCard = document.createElement("button")
    const deleteCard = document.createElement("button")
    deleteCard.setAttribute("class","deleteCard")
    readCard.setAttribute("class","readCard")
    cardMoving.style.display = "inline-block"
    cardMoving.id = "cardMoving"
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
    deleteCard.textContent = "Delete"
    pagesText.textContent = pagesInput.value + " pages"        
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
    cardMoving.appendChild(card)
    catalogDisplay.appendChild(cardMoving)
}

function clearForm(){
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    urlInput.value = ""
}


function addBookToLibrary(newBook){
    let value = 0
    if(newBook instanceof Book){
        myLibrary.push(newBook)
    localStorage.setItem("Library",JSON.stringify(myLibrary))

    }
}

//WEB STORAGE API

function checkLocalStorage (){
    let saved = JSON.parse(localStorage.getItem('document'))
    if(saved){
        catalogDisplay.innerHTML = saved
    }
}
checkLocalStorage()