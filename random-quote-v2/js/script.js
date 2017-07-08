// // event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quoteSeen = [];
var blue;
var red;
var green;

//Quote Array (Data)
var quoteList = [
    {
    quote: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
    citation: "",
    year:  "",
    tags: 'Motivation'
    },
    {
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin",
    citation: "",
    year:  "",
    tags: 'CEO'
    },
    {
    quote: "Quality is not an act, it is a habit.",
    author: "Aristole",
    citation: "",
    year:  "",
    tags: 'Motivation'
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
    citation: "",
    year:  "",
    tags: 'Motivational'
  },
  {
    quote: "Think of all the beauty still left around you and be happy.",
    author: "Anne Frank",
    citation: "",
    year:  "",
    tags: 'Life'
  },
  {
    quote: "Summer means happy times and good sunshine. It means going to the beach, going to Disneyland, having fun.",
    author: "Brian Wilson",
    citation: "",
    year:  "",
    tags: 'Summer Time'
  },
  {
    quote: "The word 'happy' would lose its meaning if it were not balanced by sadness.",
    author: "Carl Jung",
    citation: "",
    year:  "",
    tags: 'Sad Meaning'
  },
  {
    quote: "I have been very blessed in my life and rewarded with good friends and good health. I am grateful and happy to be able to share this.",
    author: "Eric Idle",
    citation: "",
    year:  "",
    tags: 'Happy'
  }];

//Print Function
function print(quoteList) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = quoteList;
  }

//Getting the quote from the Quote object
  function getRandomQuote(){
    randomQuote = Math.floor(Math.random() * quoteList.length);
    var splicedQuote = quoteList.splice(randomQuote, 1)[0];
    return splicedQuote;
  }

  function printQuote(){
    var message = "";
    var quotes = getRandomQuote();

    message = '<p class="quote">' + quotes.quote + '</p>';
    message += '<p>' + quotes.tags + '</p>';
    message += '<p class="source">' + quotes.author ;

    if (quotes.citation){
      message += '<span class="citation">' + quotes.citation + '</span>';
    }

    if(quotes.year){
      message += '<span class="year">' + quotes.year + '</span>';
    }

    message += '</p>';

    print(message);
  }