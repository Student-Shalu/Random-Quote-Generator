let quote = document.querySelector(".quote");
let author = document.querySelector(".author span");
let refreshBtn = document.querySelector(".getquote-btn");
let copyBtn = document.querySelector(".copy-btn");
let speakBtn = document.querySelector(".speak-btn");
let twittBtn = document.querySelector(".twitt-btn");
let copyText = document.querySelector(".copy-btn span");
let copyIcon = document.querySelector(".copy-btn i");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    quote.innerHTML = "Abaraca Dabara";
    author.innerHTML = "Loading...";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = data.content;
            author.innerHTML = '-' + data.author;
        })
}

let copyQuote = () => {
    navigator.clipboard.writeText(quote.textContent);
    copyIcon.style.display = 'none';
    copyText.style.display = 'block'; 
    setTimeout(() => {
        copyIcon.style.display = "block";
        copyText.style.display = 'none';
    })
}

let speakQuote = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = `${quote.textContent} by ${author.textContent}`;
    speechSynthesis.speak(speech);
}

let twittQuote = () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerHTML} ${author.innerHTML}`; 
}

getQuote();
refreshBtn.addEventListener('click', getQuote);
copyBtn.addEventListener('click', copyQuote);
speakBtn.addEventListener('click', speakQuote);
twittBtn.addEventListener('click', twittQuote);