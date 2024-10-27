(function init() {
    "use strict";
    const headerHeight = document.querySelector("header").offsetHeight;

    console.log("headerHeight: " + headerHeight);
    console.log("document.documentElement: " + document.documentElement);

// Setting Custom Properties
    document.documentElement.style.setProperty("--scroll-padding", headerHeight + "px");
})();
