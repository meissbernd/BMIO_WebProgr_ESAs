(function init() {
    "use strict";

    console.clear()
    console.log("Start Reading from Form DOM:");

    // ************************************************************************
    // mehrere Elemente

    // per Name:
    let name_to_search = "phone";
    const name_elements_found = document.getElementsByName(name_to_search);
    console.log(`--> Gefunden per Name '${name_to_search}': `, name_elements_found);

})();