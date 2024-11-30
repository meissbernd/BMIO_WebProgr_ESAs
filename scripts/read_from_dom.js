// (Immediately Invoked Function Expression, IIFE)
(function init() {
    "use strict";

    console.clear()
    console.log("Start Reading from DOM:");

    // ************************************************************************
    // einzelne Elemente
    console.log("\neinzelne Elemente");

    // per ID:
    let id_to_search = "team-info"
    const article_found = document.getElementById(id_to_search);
    console.log(`--> Gefunden per ID "${id_to_search}":\n`, article_found);
    console.log("  Parent Element: ", article_found.parentElement);
    console.log("  Parent Node: ", article_found.parentNode);
    console.log("  Children: ", article_found.children);

    // per Query Selektor:
    let selector_for_search = "main article > div > div"
    const single_element_found = document.querySelector(selector_for_search);
    console.log(`--> Gefunden per Selektor '${selector_for_search}': `, single_element_found, " ist vom Typ: ", typeof single_element_found);
    console.log("  im letzten Child steht: \n", `'${single_element_found.lastElementChild.innerText}'`);

    // ************************************************************************
    // mehrere Elemente
    console.log("\nmehrere Elemente");

    // per TagName:
    let tag_for_search = "p"
    const all_p = document.getElementsByTagName(tag_for_search);
    console.log(`--> Gefunden per Tag '${tag_for_search}': `, all_p);
    console.log("Anzahl der gefundenen Elemente", all_p.length, " diese sind von Typ: ", typeof all_p);

    // per ClassName:
    let class_to_search = "logo_sv05";
    const class_elements_found = document.getElementsByClassName(class_to_search);
    console.log(`--> Gefunden per Class Name '${class_to_search}': `, class_elements_found);

    // per Name:
    let name_to_search = "viewport";
    const name_elements_found = document.getElementsByName(name_to_search);
    console.log(`--> Gefunden per Name '${name_to_search}': `, name_elements_found);

    // per Query All Selektor
    let selector_for_search_all = "main article > div > div"
    const all_elements_found = document.querySelectorAll(selector_for_search_all);
    console.log(`--> Gefunden per AllSelektor '${selector_for_search_all}': `, all_elements_found, " Typ: ", typeof all_elements_found);
    console.log("  im letzten Child steht: \n", all_elements_found.item(all_elements_found.length - 1).textContent);

})();