
let book = JSON.parse(localStorage.getItem("thebook"));

const languageNames = {
    "eng": "English",
    "ara": "Arabic",
    "fre": "French",
    "fra": "French",
    "spa": "Spanish",
    "ger": "German",
    "deu": "German",
    "ita": "Italian",
    "por": "Portuguese",
    "rus": "Russian",
    "chi": "Chinese",
    "zho": "Chinese",
    "jpn": "Japanese",
    "kor": "Korean",
    "tur": "Turkish",
    "heb": "Hebrew",
    "dut": "Dutch",
    "nld": "Dutch"
};


document.getElementById('displayedbook').setAttribute("src", book.url);
document.getElementById('bookname').innerHTML=book.Name;
document.getElementById('bookauthor').innerHTML=book.author;
document.getElementById('categoryname').innerHTML=book.category;
document.getElementById('desription').innerHTML=book.description;
document.getElementById('year').innerHTML=`Year : ${book.publicationYear}`;
document.getElementById('language').innerHTML=`Language : ${languageNames[book.language]}`;


document.getElementById('openheart').addEventListener('click', function () {
    document.getElementById('openheart').classList.add('d-none')
    document.getElementById('closeheart').classList.remove('d-none')
})
document.getElementById('closeheart').addEventListener('click', function () {
    document.getElementById('openheart').classList.remove('d-none')
    document.getElementById('closeheart').classList.add('d-none')
})


let starReview = document.querySelectorAll('.starreview');
let rate = 'bookRating_' + book.id;
let commentsKey = 'bookComments_' + book.id;
let savedRating = localStorage.getItem(rate) || 0;
printStars(savedRating);

for (let i = 0; i < starReview.length; i++) {
  starReview[i].addEventListener("click", function (e) {
    let index = e.target.getAttribute("data-value");
    localStorage.setItem(rate, index);
    printStars(index);
  });
}

function printStars(index) {
  for (let j = 0; j < starReview.length; j++) {
    if (j < index) {
      starReview[j].classList.remove('fa-regular');
      starReview[j].classList.add('fa-solid', 'filled');
    } else {
      starReview[j].classList.add('fa-regular');
      starReview[j].classList.remove('fa-solid', 'filled');
    }
  }
}