let quotes = [
    { quote: "I am what time, circumstance, history, have made of me, certainly, but I am also, much more than that. So are we all.", source: "James Baldwin" },
    { quote: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.", source: "Mahatma Gandhi" },
    { quote: "A people without the knowledge of their past history, origin and culture is like a tree without roots.", source: "Marcus Garvey", citation: "lol.com", year: 2000 },
    { quote: "I do not speak Hebrew, but I understand that it has no word for ‘history’. The closest word for it is memory.", source: "David Miliband", year: 1999 },
    { quote: "History is merely a list of surprises. It can only prepare us to be surprised yet again.", source: "Kurt Vonnegut", citation: "Bob.com" }

];


function getRandomQuote() {
    let z = Math.floor(Math.random() * quotes.length);
    return quotes[z]; // return the entire object  
}



function printQuote() {
    let x = getRandomQuote();//from this function we get an object from the array { x equals the object
    let numericalValue = 22;
    let stringValue = 'string';
    //console.log('x: ', x);




    let html = '';
    html += '<p class="quote">'  + x.quote +  '</p>';
    html += '<p class= "source">' + x.source;
    
    if (typeof x.citation === 'string') { //test to see if a citation exists in the random object
        html += '<span class="citation">' + x.citation + '</span>';
    } if (typeof x.year === 'number') { //test to see if a year exist as a number in the random object
        html +='<span class= "year">' + x.year + '</span>';
     } 
    html += '</p>';

    return html;
    let element = document.getElementById('loadQuote');
    element.innerHTML = html;
}


console.log(printQuote());

document.write(printQuote());


document.getElementById('loadQuote').addEventListener("click", printQuote, false);




