const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const isbnInput = document.querySelector('#isbn')
// const statusInput = document.querySelector('#status')
// const dispText = statusInput.options[statusInput.selectedIndex].text;
const DateInput = document.querySelector('input[type=Date]')
const button = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

button.addEventListener('click', function() {
    if (
        titleInput.value == "" &&
        authorInout.value == "" &&
        isbnInput.value == ""
    ){
        alert("Enter any input");
    }else{
        const bookListRow = document.createElement("tr");
        
        const newTitle = document.createElement("tr");
        newTitle.innerHTML = titleInput.value;
        bookListRow.appendChild(newTitle);

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = authorInput.value;
        bookListRow.appendChild(newAuthor);

        const newISBN = document.createElement("th");
        newISBN.innerHTML = isbnInput.value;
        bookListRow.appendChild(newISBN);

        // const newstatus = document.createElement("th");
        // newstatus.innerHTML = dispText.value;
        // bookListRow.appendChild(newstatus);

        const newDate = document.createElement("th");
        newDate.innerHTML = DateInput.value;
        bookListRow.appendChild(newDate);

        bookList.appendChild(bookListRow);
    }
});