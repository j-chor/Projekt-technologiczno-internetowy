

var xhr = new XMLHttpRequest();
xhr.open('GET', 'header.html');
xhr.onload = function () {
    document.getElementById('header').innerHTML = xhr.response;
};
xhr.send();

console.log("say hi to quote")
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");

const quoteApiLink = "https://type.fit/api/quotes";

const getQuote = () => {
  axios.get(quoteApiLink).then(response => {
    console.log(response.data);
  }).catch(error => [
    console.log(error)
  ]).finally(() => {
    console.log("finally")
  })
};

getQuote();