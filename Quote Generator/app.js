const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btnOne = document.getElementById("btn-one");
const btnTow = document.getElementById("btn-tow");

async function getquote(url){
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

btnOne.addEventListener("click", () => {
    getquote(api_url)
})

getquote(api_url)

btnTow.addEventListener("click", () => {
    tweet()
})

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by " + author.innerHTML, "Tweet Window", "width=600", "height=300")
}