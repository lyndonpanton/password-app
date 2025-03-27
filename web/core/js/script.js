document.addEventListener("DOMContentLoaded", function(event) {
    let menuToggle = document.getElementsByClassName("menu-toggle");
    let mainSection = document.getElementsByClassName("main-section");
    let header = document.getElementsByTagName("header")[0];
    let menu = document.getElementById("menu");
    let app = document.getElementById("app");

    for (let i = 0; i < menuToggle.length; i++) {
        menuToggle[i].addEventListener("click", toggleMenu);
    }

    function toggleMenu(event) {
        if (event.target.id == "menu-open") {
            // hide header, app
            header.classList.add("hidden");
            app.classList.add("hidden");
            // show menu
            menu.classList.remove("hidden");
        } else {
            // hide menu
            menu.classList.add("hidden");
            // show header, app
            header.classList.remove("hidden");
            app.classList.remove("hidden");
        }
    }
});
