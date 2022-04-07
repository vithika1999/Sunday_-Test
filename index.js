const titleInput = document.querySelector('#title')
const lastInput = document.querySelector('#last')
const authorInput = document.querySelector('#author')
const isbnInput = document.querySelector('#isbn')
const phoneInput = document.querySelector('#phone')
const passwordInput = document.querySelector('#password')
const button = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

button.addEventListener('click', function() {
    if (
        titleInput.value == "" &&
        lastInput.value == "" &&
        authorInput.value == ""
    ){
        alert("Enter any input");
    }else{
        const bookListRow = document.createElement("tr");
        
        const newTitle = document.createElement("tr");
        newTitle.innerHTML = titleInput.value;
        bookListRow.appendChild(newTitle);

        const newlast = document.createElement("tr");
        newlast.innerHTML = lastInput.value;
        bookListRow.appendChild(newlast);

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookListRow.appendChild(newAuthor);

        const newISBN = document.createElement("th");
        newISBN.innerHTML = isbnInput.value;
        bookListRow.appendChild(newISBN);

        const newphone = document.createElement("th");
        newphone.innerHTML = phoneInput.value;
        bookListRow.appendChild(newphone);

        const newpassword = document.createElement("th");
        newpassword.innerHTML = passwordInput.value;
        bookListRow.appendChild(newpassword);


        bookList.appendChild(bookListRow);
    }
});