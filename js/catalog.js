// const books = [
//   // Fiction
//   { id: 1, Name: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", url: "images/fiction1.jpg", publicationYear: 1960, pages: 281, description: "A young girl in the American South watches her lawyer father defend a Black man falsely accused of rape, confronting racism and moral courage." },
//   { id: 2, Name: "1984", author: "George Orwell", category: "Fiction", url: "images/fiction2.jpg", publicationYear: 1949, pages: 328, description: "A dystopian vision of a totalitarian state that controls truth, language, and thought through constant surveillance." },
//   { id: 3, Name: "Pride and Prejudice", author: "Jane Austen", category: "Fiction", url: "images/fiction3.jpg", publicationYear: 1813, pages: 279, description: "A witty exploration of manners and marriage in Georgian England, centered on the spirited Elizabeth Bennet and the proud Mr. Darcy." },
//   { id: 4, Name: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", url: "images/fiction4.jpg", publicationYear: 1925, pages: 180, description: "A mysterious millionaire's obsessive love and the hollowness of the American Dream unfold in Jazz Age New York." },
//   { id: 5, Name: "One Hundred Years of Solitude", author: "Gabriel García Márquez", category: "Fiction", url: "images/fiction5.jpg", publicationYear: 1967, pages: 417, description: "The multigenerational saga of the Buendía family in the mythical town of Macondo, a landmark of magical realism." },

//   // Mystery/Thriller
//   { id: 6, Name: "Gone Girl", author: "Gillian Flynn", category: "Mystery/Thriller", url: "images/mystery1.jpg", publicationYear: 2012, pages: 415, description: "A husband becomes the prime suspect when his wife vanishes on their anniversary, in a twisting tale of deception." },
//   { id: 7, Name: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", category: "Mystery/Thriller", url: "images/mystery2.jpg", publicationYear: 2005, pages: 465, description: "A disgraced journalist and a brilliant hacker investigate a decades-old disappearance tied to a wealthy Swedish family." },
//   { id: 8, Name: "And Then There Were None", author: "Agatha Christie", category: "Mystery/Thriller", url: "images/mystery3.jpg", publicationYear: 1939, pages: 272, description: "Ten strangers lured to an isolated island are killed off one by one, each according to an ominous nursery rhyme." },
//   { id: 9, Name: "The Da Vinci Code", author: "Dan Brown", category: "Mystery/Thriller", url: "images/mystery4.jpg", publicationYear: 2003, pages: 454, description: "A symbologist races to unravel a murder linked to secret societies and hidden religious history." },
//   { id: 10, Name: "In the Woods", author: "Tana French", category: "Mystery/Thriller", url: "images/mystery5.jpg", publicationYear: 2007, pages: 429, description: "A detective investigating a child's murder must confront his own unresolved, traumatic childhood disappearance." },

//   // Romance
//   { id: 12, Name: "Outlander", author: "Diana Gabaldon", category: "Romance", url: "images/romance1.jpg", publicationYear: 1991, pages: 850, description: "A World War II nurse is mysteriously transported to 18th-century Scotland, where she falls for a Highland warrior." },
//   { id: 13, Name: "The Notebook", author: "Nicholas Sparks", category: "Romance", url: "images/romance2.jpg", publicationYear: 1996, pages: 214, description: "An elderly man reads to his wife the story of their youthful, class-crossed love affair decades earlier." },
//   { id: 14, Name: "Me Before You", author: "Jojo Moyes", category: "Romance", url: "images/romance3.jpg", publicationYear: 2012, pages: 369, description: "A free-spirited young woman becomes caregiver to a paralyzed man, and their bond changes both their lives." },
//   // Science Fiction
//   { id: 16, Name: "Dune", author: "Frank Herbert", category: "Science Fiction", url: "images/Sciencefiction1.jpg", publicationYear: 1965, pages: 412, description: "On a desert planet vital to the galaxy, a young heir becomes entangled in prophecy, politics, and rebellion." },
//   { id: 17, Name: "Ender's Game", author: "Orson Scott Card", category: "Science Fiction", url: "images/Sciencefiction2.jpg", publicationYear: 1985, pages: 324, description: "A gifted child is trained in a military academy to lead humanity's defense against an alien threat." },
//   { id: 18, Name: "The Martian", author: "Andy Weir", category: "Science Fiction", url: "images/Sciencefiction3.jpg", publicationYear: 2011, pages: 369, description: "An astronaut stranded alone on Mars must use ingenuity and science to survive until rescue is possible." },
//   { id: 19, Name: "Fahrenheit 451", author: "Ray Bradbury", category: "Science Fiction", url: "images/Sciencefiction4.jpg", publicationYear: 1953, pages: 194, description: "In a future where books are outlawed and burned, a fireman begins to question his role in suppressing knowledge." },
//   { id: 21, Name: "Neuromancer", author: "William Gibson", category: "Science Fiction", url: "images/Sciencefiction5.jpg", publicationYear: 1984, pages: 271, description: "A washed-up hacker is hired for one last job in a gritty cyberpunk future of AI and virtual reality, a genre-defining novel." },

//   // Fantasy
//   { id: 22, Name: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", url: "images/fantacy1.jpg", publicationYear: 1937, pages: 310, description: "A reluctant hobbit joins a band of dwarves on a quest to reclaim treasure guarded by a dragon." },
//   { id: 23, Name: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "Fantasy", url: "images/fantacy2.jpg", publicationYear: 1997, pages: 309, description: "An orphaned boy discovers he is a wizard and begins his education at a magical boarding school." },
//   { id: 24, Name: "A Game of Thrones", author: "George R.R. Martin", category: "Fantasy", url: "images/fantacy3.jpg", publicationYear: 1996, pages: 694, description: "Noble houses vie for control of the Iron Throne while an ancient threat stirs beyond a great wall of ice." },
//   { id: 25, Name: "The Name of the Wind", author: "Patrick Rothfuss", category: "Fantasy", url: "images/fantacy4.jpg", publicationYear: 2007, pages: 662, description: "A legendary figure recounts his rise from orphaned street child to renowned magician and adventurer." },

//   // Horror
//   { id: 26, Name: "The Shining", author: "Stephen King", category: "Horror", url: "images/horror1.jpg", publicationYear: 1977, pages: 447, description: "A writer's descent into madness at an isolated, haunted hotel endangers his wife and psychically gifted son." },
//   { id: 27, Name: "Dracula", author: "Bram Stoker", category: "Horror", url: "images/horror2.jpg", publicationYear: 1897, pages: 418, description: "The classic epistolary tale of Count Dracula's journey to England and the group who hunts him." },
//   { id: 28, Name: "It", author: "Stephen King", category: "Horror", url: "images/horror3.jpg", publicationYear: 1986, pages: 1138, description: "A shape-shifting entity that preys on children draws a group of friends back to confront it as adults." },
//   { id: 29, Name: "The Haunting of Hill House", author: "Shirley Jackson", category: "Horror", url: "images/horror4.jpg", publicationYear: 1959, pages: 246, description: "Four people staying in a notoriously haunted mansion experience escalating, psychologically ambiguous terror." },
//   { id: 30, Name: "Frankenstein", author: "Mary Shelley", category: "Horror", url: "images/horror5.jpg", publicationYear: 1818, pages: 280, description: "A scientist's creation of life leads to tragedy, in a foundational work of science fiction and horror." },
//   // Historical Fiction
//   { id: 31, Name: "All the Light We Cannot See", author: "Anthony Doerr", category: "Historical Fiction", url: "images/historicalfiction1.jpg", publicationYear: 2014, pages: 531, description: "A blind French girl and a German boy's paths converge during World War II in occupied France." },
//   { id: 32, Name: "The Book Thief", author: "Markus Zusak", category: "Historical Fiction", url: "images/historicalfiction2.jpg", publicationYear: 2005, pages: 552, description: "Narrated by Death, the story follows a girl in Nazi Germany who finds solace in stealing and sharing books." },
//   { id: 33, Name: "The Nightingale", author: "Kristin Hannah", category: "Historical Fiction", url: "images/historicalfiction3.jpg", publicationYear: 2015, pages: 440, description: "Two sisters in Nazi-occupied France each choose their own path of resistance and survival." },

//   // Biography/Memoir
//   { id: 34, Name: "Educated", author: "Tara Westover", category: "Biography/Memoir", url: "images/biography1.jpg", publicationYear: 2018, pages: 334, description: "A memoir of growing up in a strict, isolated survivalist family and the author's journey to formal education." },
//   { id: 35, Name: "Long Walk to Freedom", author: "Nelson Mandela", category: "Biography/Memoir", url: "images/biography2.jpg", publicationYear: 1994, pages: 656, description: "Nelson Mandela's autobiography chronicling his fight against apartheid and years of imprisonment." },
//   { id: 37, Name: "The Diary of a Young Girl", author: "Anne Frank", category: "Biography/Memoir", url: "images/biography3.jpg", publicationYear: 1947, pages: 283, description: "The diary of a Jewish teenager hiding from the Nazis, documenting daily life and hope in hiding." },
//   { id: 38, Name: "Steve Jobs", author: "Walter Isaacson", category: "Biography/Memoir", url: "images/biography4.jpg", publicationYear: 2011, pages: 656, description: "An authorized biography detailing the life, career, and complex personality of Apple co-founder Steve Jobs." },
//   { id: 39, Name: "Born a Crime", author: "Trevor Noah", category: "Biography/Memoir", url: "images/biography5.jpg", publicationYear: 2016, pages: 288, description: "Trevor Noah recounts his childhood in apartheid and post-apartheid South Africa with humor and honesty." },

//   // History
//   { id: 40, Name: "Sapiens", author: "Yuval Noah Harari", category: "History", url: "images/history1.jpg", publicationYear: 2011, pages: 443, description: "A sweeping overview of human history, from the emergence of Homo sapiens to the modern age." },
//   { id: 41, Name: "Guns, Germs, and Steel", author: "Jared Diamond", category: "History", url: "images/history2.jpg", publicationYear: 1997, pages: 480, description: "An examination of why some civilizations came to dominate others through geography, technology, and disease." },
//   { id: 42, Name: "A People's History of the United States", author: "Howard Zinn", category: "History", url: "images/history3.jpg", publicationYear: 1980, pages: 729, description: "American history retold from the perspective of ordinary people, workers, and marginalized groups." },

//   // Science
//   { id: 43, Name: "A Brief History of Time", author: "Stephen Hawking", category: "Science", url: "images/science1.jpg", publicationYear: 1988, pages: 256, description: "An accessible explanation of cosmology, black holes, and the origins of the universe for general readers." },
//   { id: 44, Name: "Cosmos", author: "Carl Sagan", category: "Science", url: "images/science2.jpg", publicationYear: 1980, pages: 365, description: "A celebrated tour of astronomy and the universe, blending science with a sense of wonder." },
//   { id: 45, Name: "The Selfish Gene", author: "Richard Dawkins", category: "Science", url: "images/science3.jpg", publicationYear: 1976, pages: 224, description: "An influential argument that genes, not organisms, are the primary units of natural selection." },
//   { id: 46, Name: "Silent Spring", author: "Rachel Carson", category: "Science", url: "images/science4.jpg", publicationYear: 1962, pages: 368, description: "A groundbreaking exposé on the environmental damage caused by pesticides, sparking the modern environmental movement." },
//   { id: 47, Name: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", category: "Science", url: "images/science5.jpg", publicationYear: 2010, pages: 381, description: "The story of the woman whose cells, taken without consent, became vital to medical research worldwide." },

//   // Self-Help/Business
//   { id: 48, Name: "Atomic Habits", author: "James Clear", category: "Self-Help/Business", url: "images/self1.jpg", publicationYear: 2018, pages: 320, description: "A practical guide to building good habits and breaking bad ones through small, incremental changes." },
//   { id: 49, Name: "Think and Grow Rich", author: "Napoleon Hill", category: "Self-Help/Business", url: "images/self2.jpg", publicationYear: 1937, pages: 320, description: "A classic self-help book outlining principles of personal success drawn from studies of wealthy individuals." },
//   { id: 50, Name: "How to Win Friends and Influence People", author: "Dale Carnegie", category: "Self-Help/Business", url: "images/self3.jpg", publicationYear: 1936, pages: 291, description: "A foundational guide to interpersonal skills, persuasion, and building better relationships." },

//   // Poetry
//   { id: 51, Name: "Leaves of Grass", author: "Walt Whitman", category: "Poetry", url: "images/poetry1.jpg", publicationYear: 1855, pages: 128, description: "A landmark collection celebrating individuality, nature, and democracy in free verse." },
//   { id: 52, Name: "The Sun and Her Flowers", author: "Rupi Kaur", category: "Poetry", url: "images/poetry2.jpg", publicationYear: 2017, pages: 256, description: "A collection of poems exploring growth, love, loss, and healing across five thematic chapters." },
//   { id: 53, Name: "Ariel", author: "Sylvia Plath", category: "Poetry", url: "images/poetry3.jpg", publicationYear: 1965, pages: 96, description: "A posthumously published collection known for its raw intensity and confessional style." },
//   { id: 54, Name: "Milk and Honey", author: "Rupi Kaur", category: "Poetry", url: "images/poetry4.jpg", publicationYear: 2014, pages: 208, description: "A widely popular collection addressing themes of abuse, love, loss, and femininity." },
//   { id: 55, Name: "A Light in the Attic", author: "Shel Silverstein", category: "Poetry", url: "images/poetry5.jpg", publicationYear: 1981, pages: 176, description: "A whimsical, widely loved collection of illustrated poems for children and adults alike." },

//   // Children's/YA
//   { id: 57, Name: "Charlotte's Web", author: "E.B. White", category: "Children's/YA", url: "images/child1.jpg", publicationYear: 1952, pages: 192, description: "A gentle story of friendship between a pig and a spider who works to save his life." },
//   { id: 58, Name: "The Giver", author: "Lois Lowry", category: "Children's/YA", url: "images/child2.jpg", publicationYear: 1993, pages: 208, description: "A boy in a seemingly perfect, emotionless society begins to uncover the dark truths it conceals." },
//   { id: 59, Name: "Percy Jackson and the Olympians", author: "Rick Riordan", category: "Children's/YA", url: "images/child3.jpg", publicationYear: 2005, pages: 377, description: "A boy discovers he is a demigod and embarks on adventures rooted in Greek mythology." },
//   { id: 61, Name: "Matilda", author: "Roald Dahl", category: "Children's/YA", url: "images/child4.jpg", publicationYear: 1988, pages: 240, description: "A brilliant young girl with telekinetic powers outwits her neglectful family and tyrannical headmistress." },
//   { id: 62, Name: "Where the Wild Things Are", author: "Maurice Sendak", category: "Children's/YA", url: "images/child5.jpg", publicationYear: 1963, pages: 48, description: "A boy sails to an island of monstrous creatures who crown him their king, in a classic illustrated tale." },
//   { id: 63, Name: "The Fault in Our Stars", author: "John Green", category: "Children's/YA", url: "images/child6.jpg", publicationYear: 2012, pages: 313, description: "Two teenagers with cancer fall in love and confront mortality with wit and honesty." },
// ];

// // get book index
// document.getElementById("box").addEventListener("click", function (e) {
//     let img = e.target.closest(".bookimg");
//     if (img) {
//         let index = img.getAttribute("data-index");
//         let thebook = books[index];
//         localStorage.setItem("thebook",JSON.stringify(thebook));
//     }
// });

// //autors,categories arrays
// let categories = [];
// let authors = [];
// for (let i = 0; i < books.length; i++){
//     if (!categories.includes(books[i].category))
//         categories.push(books[i].category);
//     if (!authors.includes(books[i].author))
//         authors.push(books[i].author);
// }
// categories.sort();
// authors.sort();
// // filter buttons
// function selectors(data,id,name) {
//     let x = `<option value='all' selected> All ${name}</option> `;
//     for (let i = 0; i < data.length; i++){
//         x += `
//         <option value="${data[i]}">${data[i]}</option>
//         `
//     }
//     document.getElementById(id).innerHTML = x;
// }
// selectors(categories, 'categorySelect', 'Categories');
// selectors(authors, 'authorSelect', 'Authors');


// //filter and display
// function filterBooks() {
//     let selectedCategory = document.getElementById('categorySelect').value;
//     let selectedAuthor = document.getElementById('authorSelect').value;
//     let searchValue = document.getElementById("search").value.toLowerCase();

//     let x = "";
//     for (let i = 0; i < books.length; i++) {
//         let matchCategory = (selectedCategory === 'all' || books[i].category === selectedCategory);
//         let matchAuthor = (selectedAuthor === 'all' || books[i].author === selectedAuthor);
//         let matchSearch =(books[i].Name.toLowerCase().includes(searchValue) ||books[i].author.toLowerCase().includes(searchValue));

//         if (matchCategory && matchAuthor && matchSearch) {
//             x += `
//                 <div class="item col-xl-3 col-md-4 col-sm-6 ">
//                     <div class="item p-2 border border-1 rounded-2 bg-light-subtle">
//                <a href="bookinfo.html"><img src="${books[i].url}" alt="${books[i].Name}" class="w-100 bookimg" data-index="${i}"></a>
               
//              </div>
//            </div> `
//         }
//     }
//     if (x === '') {
//         document.getElementById("box").innerHTML = `<h1 class=" text-secondary-emphasis p-4">No Books Matched</h1>`
//     }
//     else
//         document.getElementById("box").innerHTML = x;
// }
// document.getElementById("categorySelect").addEventListener("change", filterBooks);
// document.getElementById("authorSelect").addEventListener("change", filterBooks);
// document.getElementById("search").addEventListener("input", filterBooks);

// filterBooks();
let books = [];
let categories = [];
let authors = [];
async function getbooks() {
    let response = await fetch("https://openlibrary.org/search.json?q=bestseller&limit=100");
    let data = await response.json();

    let docs = data.docs;

     books = [];
    for (let i = 0; i < docs.length; i++) {
        let book = docs[i];

        let coverUrl = "images/default.jpg";
        if (book.cover_i) {
            coverUrl = "https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg";
        }

        let author = "Unknown ";
        if (book.author_name) {
            author = book.author_name[0];
        }

        let description = "No description available.";
        if (book.first_sentence) {
            description = book.first_sentence[0];
        }

        let publicationYear = "N/A";
        if (book.first_publish_year) {
            publicationYear = book.first_publish_year;
        }

        let pages = "N/A";
        if (book.number_of_pages_median) {
            pages = book.number_of_pages_median;
        }

        let category = "General";
        if (book.subject) {
            category = book.subject[0];
        }

        let publisher = "Unknown";
        if (book.publisher) {
            publisher = book.publisher[0];
        }

        let editionCount = 0;
        if (book.edition_count) {
            editionCount = book.edition_count;
        }

        let language = "Unknown";
        if (book.language) {
            language = book.language[0];
        }

        let alreadyReadCount = 0;
        if (book.already_read_count) {
            alreadyReadCount = book.already_read_count;
        }

        let bookLink = "#";
        if (book.key) {
            bookLink = "https://openlibrary.org" + book.key;
        }

        books.push({
            id: i + 1,
            Name: book.title || "Unknown Title",
            author: author,
            description: description,
            publicationYear: publicationYear,
            pages: pages,
            category: category,
            publisher: publisher,
            language: language,
            alreadyReadCount: alreadyReadCount,
            bookLink: bookLink,
            url: coverUrl
        });
    }

    return books;
}

async function displaybooks() {
    await getbooks();

    for (let i = 0; i < books.length; i++){
        if (!categories.includes(books[i].category))
            categories.push(books[i].category);
        if (!authors.includes(books[i].author))
            authors.push(books[i].author);
    }
    categories.sort();
    authors.sort();
    // filter buttons
    selectors(categories, 'categorySelect', 'Categories');
    selectors(authors, 'authorSelect', 'Authors');

    document.getElementById("categorySelect").addEventListener("change", filterBooks);
    document.getElementById("authorSelect").addEventListener("change", filterBooks);
    document.getElementById("search").addEventListener("input", filterBooks);
    document.getElementById("box").addEventListener("click", function (e) {
        let img = e.target.closest(".bookimg");
        if (img) {
            let index = img.getAttribute("data-index");
            let thebook = books[index];
            localStorage.setItem("thebook",JSON.stringify(thebook));
        }

        });
        filterBooks();

}

function selectors(data,id,name) {
    let x = `<option value='all' selected> All ${name}</option>`;
    for (let i = 0; i < data.length; i++){
        x += `
        <option value="${data[i]}">${data[i]}</option>
        `
    }
    document.getElementById(id).innerHTML = x;
}


function filterBooks() {
    let selectedCategory = document.getElementById('categorySelect').value;
    let selectedAuthor = document.getElementById('authorSelect').value;
    let searchValue = document.getElementById("search").value.toLowerCase();

    let x = "";
    for (let i = 0; i < books.length; i++) {
        let matchCategory = (selectedCategory === 'all' || books[i].category === selectedCategory);
        let matchAuthor = (selectedAuthor === 'all' || books[i].author === selectedAuthor);
        let matchSearch = (books[i].Name.toLowerCase().includes(searchValue) || books[i].author.toLowerCase().includes(searchValue));

        if (matchCategory && matchAuthor && matchSearch) {
            x += `
                <div class="item col-xl-3 col-md-4 col-sm-6 ">
                    <div class="item p-2 border border-1 rounded-2 bg-light-subtle">
               <a href="bookinfo.html"><img src="${books[i].url}" alt="${books[i].Name}" class="w-100 bookimg" data-index="${i}"></a>
               
             </div>
           </div> `
        }
    }

    if (x === '') {
        document.getElementById("box").innerHTML = `<h1 class=" text-secondary-emphasis p-4">No Books Matched</h1>`;
    }
    else {
        document.getElementById("box").innerHTML = x;
    }

}

displaybooks();