document.addEventListener("DOMContentLoaded", function(event) {
    let menuToggle = document.getElementsByClassName("menu-toggle");
    let menuListItem = document.getElementsByClassName("menu-list-item");
    let header = document.getElementsByTagName("header")[0];
    let menu = document.getElementById("menu");
    let app = document.getElementById("app");
    let appSection = document.getElementsByClassName("main-feature");

    for (let i = 0; i < menuToggle.length; i++) {
        menuToggle[i].addEventListener("click", toggleMenu);
    }

    for (let i = 0; i < menuListItem.length; i++) {
        menuListItem[i].addEventListener("click", changeAppSection);
    }

    function changeAppSection(event) {
        let sectionName = event.target.id.slice(
            event.target.id.lastIndexOf("-") + 1
        );

        for (let i = 0; i < appSection.length; i++) {
            if (appSection[i].id == sectionName) {
                appSection[i].classList.remove("hidden");
            } else {
                appSection[i].classList.add("hidden");
            }

            toggleMenu(event);
        }
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
