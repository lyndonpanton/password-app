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

        let i = 0;
        while (i < length) {
            // random number (0 - 2)
            let type = Math.floor(Math.random() * 3);

            switch (type) {
                case 0:
                    // Alphabetical character
                    let alphabeticalCharacter;

                    if (allowingLowercase) {
                        let isLowercase = Math.floor(Math.random() * 2);

                        if (isLowercase == 1) {
                            alphabeticalCharacter = String.fromCharCode(
                                Math.floor(Math.random() * 26 + 97)
                            );
                        } else {
                            alphabeticalCharacter = String.fromCharCode(
                                Math.floor(Math.random() * 26 + 65)
                            );
                        }
                    } else {
                        alphabeticalCharacter = String.fromCharCode(
                            Math.floor(Math.random() * 26 + 65)
                        );
                    }

                    password += alphabeticalCharacter;

                    break;
                case 1:
                    if (!allowingNumbers) continue;

                    // Number
                    let number = Math.floor(Math.random() * 10);
                    password += number;

                    break;
                case 2:
                    if (!allowingSpecialCharacters) continue;

                    // Special character
                    let specialCharacter;

                    let asciiSection = Math.floor(Math.random() * 5);

                    switch (asciiSection) {
                        case 0:
                            // 33 - 47
                            specialCharacter = String.fromCharCode(
                                Math.floor(Math.random() * 15 + 33)
                            );

                            break;
                        case 1:
                            // 58 - 64
                            specialCharacter = String.fromCharCode(
                                Math.floor(Math.random() * 7 + 58)
                            );

                            break;
                        case 2:
                            // 91
                            specialCharacter = String.fromCharCode(91);

                            break;
                        case 3:
                            // 93 - 96
                            
                            specialCharacter = String.fromCharCode(
                                Math.floor(Math.random() * 4 + 93)
                            );

                            break;
                        case 4:
                            // 123 - 125
                            specialCharacter = String.fromCharCode(
                                Math.floor(Math.random() * 3 + 123)
                            );

                            break;
                    }

                    password += specialCharacter;

                    break;
                default:
                    break;
            }

            i += 1;
        }
        
        document.getElementById("generator-password").textContent = password;
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
