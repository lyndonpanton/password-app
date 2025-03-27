document.addEventListener("DOMContentLoaded", function(event) {
    let menuToggle = document.getElementsByClassName("menu-toggle");
    let menuListItem = document.getElementsByClassName("menu-list-item");
    let header = document.getElementsByTagName("header")[0];
    let menu = document.getElementById("menu");
    let app = document.getElementById("app");
    let appSection = document.getElementsByClassName("main-feature");
    let appForm = document.getElementsByClassName("main-form");

    for (let i = 0; i < menuToggle.length; i++) {
        menuToggle[i].addEventListener("click", toggleMenu);
    }

    for (let i = 0; i < menuListItem.length; i++) {
        menuListItem[i].addEventListener("click", changeAppSection);
    }

    for (let i = 0; i < appForm.length; i++) {
        appForm[i].addEventListener("submit", handleFormSubmission);
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

    function generatePassword(event) {
        let length = document.getElementById("generator-length").value;
        let allowingLowercase = document.getElementById("generator-lowercase").checked;
        let allowingNumbers = document.getElementById("generator-numbers").checked;
        let allowingSpecialCharacters = document.getElementById("generator-special-characters").checked;

        let password = "";

        for (let i = 0; i < length; i++) {
            // random number (0 - 2)
            let type = Math.floor(Math.random() * 3);

            switch (type) {
                case 0:
                    // Alphabetical character
                    let alphabeticalCharacter;

                    if (allowingLowercase) {

                    } else {

                    }
                    
                    break;
                case 1:
                    // Number
                    let number = Math.random() * 10;
                    password += number;

                    break;
                case 2:
                    // Special character
                    let specialCharacter;
                    break;
                default:
                    break;
            }
        }

        console.log(length);
        console.log(allowingNumbers);
        console.log(allowingSpecialCharacters);
    }

    function handleFormSubmission(event) {
        event.preventDefault();

        switch (event.target.id) {
            case "generator-form":
                generatePassword(event);
                break;
            case "manager-form":
                break;
            case "validator-form":
                break;
            default:
                break;
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
