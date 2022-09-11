const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");
console.log(postId);
fetch(`https://dummyjson.com/quotes/random/?${postId}`)
    .then((response) => response.json())
    .then((json) => clickfuncition(json));

function clickfuncition(post) {
    console.log(post);
    document.getElementById("demo").innerHTML += `
   <p> ${post.quote}</p>
    <strong><p>Author:${post.author}<p></strong>`;

    document.getElementById("demo1").onclick.value = (post) => {
        clickfuncition
            ()
    };
}