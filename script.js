const PRINT_QUOTE_TIMER_DELAY = 20 * 1000;
const REFRESH_PAGE_RANDOM_COLOR = 20 * 1000; // set constants to make reading code below easier

let quotes = [

    { quote: "I am what time, circumstance, history, have made of me, certainly, but I am also, much more than that. So are we all.", source: "James Baldwin",  },
    { quote: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.", source: "Mahatma Gandhi", country: 'India' },
    { quote: "A people without the knowledge of their past history, origin and culture is like a tree without roots.", source: "Marcus Garvey", citation: "wisdomquotes.com", year: 1920, country: 'USA', industry:"Coal" },
    { quote: "I do not speak Hebrew, but I understand that it has no word for ‘history’. The closest word for it is memory.", source: "David Miliband", year: 1949, country: "USA" },
    { quote: "Neither the life of an individual nor the history of a society can be understood without understanding both.", source: "C. Wright Mills", year: 1919, country: "USA", industry:"Agriculture" },
    { quote: "I can’t change history, I don’t want to change history. I can only change the future. I’m working on that.", source: "Boris Becker", citation: "widsomquotes.com", country: "Germany" }

];

function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote]; // return the entire object  
}

function printQuote() {
    let x = getRandomQuote();//from this function we get an object from the array where x equals the object
    let html = '';
    html += '<p class="quote">'  + x.quote +  '</p>';
    html += '<p class= "source">' + x.source;
    
    if (typeof x.citation === 'string') { //test to see if a citation exists in the random object
        html += '<span class="citation">' + x.citation + '</span>';
    } 
    if (typeof x.year === 'number') { //test to see if a year exist as a number in the random object
        html +='<span class= "year">' + x.year + '</span>';
     } 
    if (typeof x.country === 'string') { //test to see if a citation exists in the random object
        html +='<span class= "country">' + ', ' +  x.country + '</span>';
     }
    if (typeof x.industry === 'string') { //test to see if a citation exists in the random object
         html += '<span class = "industry">' + ', ' + x.industry + '</span>';
     }
    html +=  '</p>';

    let element = document.getElementById('quote-box');
    element.innerHTML = html;
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", getRandomColors, false); //when clicking on 'Show another quote' button run functions to make new quote and new background color

function getRandomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let fullColor = "rgb(" + r + ', ' + g + ', ' + b + ')';
    document.body.style.backgroundColor = fullColor; //set background-color in body
}
let timerQuote = setInterval(printQuote, PRINT_QUOTE_TIMER_DELAY); 
let timerColor = setInterval(getRandomColors, 20000); //set timer for both quote and background color change equal to one another





document.addEventListener("DOMContentLoaded", printQuote());