const arrayLimit = 20;
let quotes = [];
let authors = [];
let currentQuote = 0;

function newQuote() {
    let quote = "";
    let author = "";

    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quotes.push(data.content);
            authors.push(data.author);

            if (quotes.length > arrayLimit) {
                quotes.shift();
                authors.shift();
            }

            currentQuote = quotes.length - 1;
            showQuote(currentQuote);
        })
        .catch(error => console.error('Error:', error));
}

function showQuote(i) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.innerText = '"' + quotes[i] + '"';
    authorElement.innerText = "~ " + authors[i];
    updateNumber();
}

function showPrevious() {
    if (currentQuote > 0) {
        currentQuote--;
    }
    showQuote(currentQuote);
}

function showNext() {
    if (currentQuote < quotes.length - 1) {
        currentQuote++;
    }
    showQuote(currentQuote);
}

function updateNumber() {
    const numberElement = document.getElementById('number');
    numberElement.innerText = currentQuote + 1 + "/" + quotes.length;
}

newQuote();