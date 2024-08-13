const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        const quote = data.content;
        const author = data.author;
        quoteElement.innerText = quote;
        authorElement.innerText = author;
    })
    .catch(error => console.error('Error:', error));