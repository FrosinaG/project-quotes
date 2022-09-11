fetch('https://dummyjson.com/quotes')
    .then((responce) => responce.json())
    .then((json) => random(json));

var quoteslist = "";

function random(items) {
    console.log(items)
    for (var i = 0; i < items.quotes.length; i++) {
        quoteslist += `<div class="list">
        <a href="index.html?postId=${items.quotes[i].id}">
        <p>${items.quotes[i].quote}</p>
        <p><strong>Author: ${items.quotes[i].author}</strong></p></div></a>`;
    }
    document.getElementById("qu").innerHTML = quoteslist;
}

var modal = document.getElementById("MyModal");


var mybtn = document.getElementById("mybutton");


var span = document.getElementsByClassName("close")[0];

mybtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}