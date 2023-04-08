const quotes = [
{
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
},
{
    quote: "The biggest risk is not taking any risk.",
    author: "Mike Zuckerberg",
},
{
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
},
{
    quote: "Respect is how to treat everyone, not just those you want to impress.",
    author: "Richard Branson",
},
{
    quote: "Patience is a key element of success.",
    author: "Bill Gates",
},
{
    quote: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
},
{
    quote: "Stay hungry. Stay foolish.",
    author: "Seteve Jobs",
},
{
    quote: "We must accept finite disappointment, but we must never lose infinite hope.",
    author: "Martin Luther King",
},
{
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
},
{
    quote: "Don't let the noise of others' opinions drown out your own inner voice.",
    author: "Steve Jobs",
},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
