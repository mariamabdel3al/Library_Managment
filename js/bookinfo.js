
let book = JSON.parse(localStorage.getItem("thebook"));
document.getElementById('displayedbook').setAttribute("src", book.url);
document.getElementById('bookname').innerHTML=book.Name;
document.getElementById('bookauthor').innerHTML=book.author;
document.getElementById('categoryname').innerHTML=book.category;
document.getElementById('desription').innerHTML=book.description;
document.getElementById('pages').innerHTML=`${book.pages} page`;
document.getElementById('year').innerHTML=`Year : ${book.publicationYear}`;


document.getElementById('openheart').addEventListener('click', function () {
    document.getElementById('openheart').classList.add('d-none')
    document.getElementById('closeheart').classList.remove('d-none')
})
document.getElementById('closeheart').addEventListener('click', function () {
    document.getElementById('openheart').classList.remove('d-none')
    document.getElementById('closeheart').classList.add('d-none')
})