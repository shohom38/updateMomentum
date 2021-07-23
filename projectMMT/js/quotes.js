const quotes = [
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "Usain Bolt",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King, Jr",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "The only thing worse than starting something and failing... is not starting something.",
        author: "Seth Godinr",
    },
    {
        quote: "If you really want to do something, you'll find a way, If you do not, you'll find an excuse.",
        author: "Jim Rohn",
    },
    {
        quote: "You cannot change what you are, only what you do.",
        author: "Philip Pullman",
    },
    {
        quote: "If you run you stand a chance of losing, but if you don't run you've already lost.",
        author: "Barack Obama",
    },
    {
        quote: "The greatest mistake you can make in life is to be continually fearing you will make one.",
        author: "Elbert Hubbard",
    },
    {
        quote: "Only i can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuotes.quote;
author.innerText = "- " + randomQuotes.author;
console.log(randomQuotes);