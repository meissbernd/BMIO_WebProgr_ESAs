{
    "use strict";

    // DOM: Document Object Model
    // Methoden, um auf Elemente, Attribute und Textknoten zuzugreifen.
    // Einzelne Elemente
    const article = document.getElementById("define");
    console.log(article);
    console.log(typeof article);
    console.log(article.childNodes);
    console.log(article.id);
    console.log(article.className);
    console.log(article.parentElement);
    console.log(article.firstElementChild);
    console.log(article.firstElementChild.innerHTML);

    const oneheadline = document.querySelector("article > h2");
    console.log(oneheadline, typeof oneheadline);


    // Mehrere Elemente
    const allLi = document.getElementsByTagName("li");
    console.log(allLi, allLi.length, typeof allLi);

    const headlines = document.getElementsByClassName("headline");
    console.log(headlines, typeof headlines);

    const input = document.getElementsByName("fn");
    console.log(input);

    const allHeadlines = document.querySelectorAll("article > h2");
    console.log(allHeadlines, typeof allHeadlines);

    console.clear();
    console.log(typeof document.getElementById("define"));
    console.log(typeof document.querySelector("article"));
    console.log(typeof document.getElementsByTagName("article"));
    console.log(typeof document.getElementsByClassName("headline"));
    console.log(typeof document.getElementsByName("fn"));
    console.log(typeof document.querySelectorAll("article"));
}