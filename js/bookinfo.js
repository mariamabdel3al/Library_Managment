
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


document.querySelectorAll('.stars').forEach(container => {
  const stars = container.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      const selectedRating = index + 1;

      stars.forEach((s, i) => {
        if (i < selectedRating) {
          s.classList.remove('fa-regular');
          s.classList.add('fa-solid', 'filled');
        } else {
          s.classList.remove('fa-solid', 'filled');
          s.classList.add('fa-regular');
        }
      });

    });
  });
});