function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    let readBoolean = function(read){
        if(read){
            return "Already read!"
        } else {
            return "Not read yet"
        }
    }
    this.info = function(){
        return title + " by " + author + " ," + pages + " pages," + readBoolean(read)
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