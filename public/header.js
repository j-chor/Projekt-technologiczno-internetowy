var xhr = new XMLHttpRequest();
xhr.open('GET', 'header.html');
xhr.onload = function () {
  document.getElementById('header').innerHTML = xhr.response;
};
xhr.send();


const quoteApiLink = "https://type.fit/api/quotes";

const getQuote = () => {
  const quoteText = document.querySelector("#quote");
  const quoteAuthor = document.querySelector("#author");
  axios.get(quoteApiLink).then(res => {
    const quote = res.data[Math.floor(Math.random() * res.data.length)];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = " - " + quote.author;
  }).catch(error => {
    console.log(error)
  }).finally(() => {
    console.log("finally")
  })
};



setTimeout(getQuote, 100);
// document.addEventListener("DOMContentLoaded", getQuote); // czemu to nie działa!!!!