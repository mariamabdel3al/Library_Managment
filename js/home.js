
function renderBookRow(containerId, bookList) {
    let html = "";
    for (let i = 0; i < bookList.length; i++) {
        let book = bookList[i];

        let title = book.title;
        let author = "Unknown author";
        if (book.author_name) {
            author = book.author_name[0];
        }

        let coverUrl = "https://via.placeholder.com/180x250/222222/999999?text=No+Cover";
        if (book.cover_i) {
            coverUrl = "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg";
        }

        html += `
            <div class="book-card">
                <img src="${coverUrl}" alt="${title}" class="bookimg">
                <p class="book-title">${title}</p>
                <p class="book-author">${author}</p>
            </div>
        `;
    }
    document.getElementById(containerId).innerHTML = html;
}

async function loadTopBooks() {
    let response = await fetch("https://openlibrary.org/search.json?q=bestseller&limit=10");
    let data = await response.json();
    renderBookRow("top-books", data.docs);
}

async function loadNewBooks() {
    let response = await fetch("https://openlibrary.org/search.json?q=fiction&sort=new&limit=10");
    let data = await response.json();
    renderBookRow("new-books", data.docs);
}

async function loadRecommendedBooks() {
    let response = await fetch("https://openlibrary.org/search.json?q=fantasy&limit=10");
    let data = await response.json();
    renderBookRow("recommended-books", data.docs);
}

loadTopBooks();
loadNewBooks();
loadRecommendedBooks();