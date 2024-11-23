{
    "use strict";
    console.log("Start");

    // Einzelne Elemente
    // per ID:
    const article = document.getElementById("define");
    // console.log(article);
    // console.log(typeof article);
    // console.log(article.childNodes);
    // console.log(article.id);
    // console.log(article.className);
    // console.log(article.parentElement);
    // console.log(article.firstElementChild);
    // console.log(article.firstElementChild.innerHTML);

    // per query selektor
    const oneheadline = document.querySelector("article > h2");
    console.log(oneheadline);
    console.log(typeof oneheadline);

}