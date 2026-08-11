// ========================================
// Language Configuration
// ========================================

const languages = {
    en: "index.html",
    ar: "index-ar.html"
};


// ========================================
// Get Current Page
// ========================================

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();


// ========================================
// Get Browser Language
// ========================================

const browserLanguage =
    navigator.language || navigator.userLanguage;

const languageCode =
    browserLanguage.split("-")[0].toLowerCase();


// ========================================
// Automatic Language Detection
// ========================================

// Check if the current page is already
// one of the supported language pages

const isLanguagePage =
    Object.values(languages).includes(currentPage);


// Only redirect automatically if the current page
// is not already a language page

if (!isLanguagePage) {

    // Check if browser language is supported

    if (languages[languageCode]) {

        window.location.href =
            languages[languageCode];

    } else {

        // Unsupported browser language
        // Falls back to English

        window.location.href =
            languages.en;
    }
}


// ========================================
// Language Dropdown
// ========================================

const languageBtn =
    document.getElementById("languageBtn");

const languageMenu =
    document.getElementById("languageMenu");


// Open / close language menu

if (languageBtn && languageMenu) {

    languageBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        languageMenu.classList.toggle("show");

    });


    // Close menu when clicking outside

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".language-dropdown")) {

            languageMenu.classList.remove("show");

        }

    });

}


// ========================================
// Language Selection
// ========================================

const languageLinks =
    document.querySelectorAll("[data-language]");


languageLinks.forEach(function (link) {

    const selectedLanguage =
        link.dataset.language;


    // ========================================
    // Detect Current Language
    // ========================================

    if (
        languages[selectedLanguage] === currentPage
    ) {

        // Add check mark to current language

        link.innerHTML += " ✓";

        // Add active class

        link.classList.add("active-language");
    }


    // ========================================
    // Change Language
    // ========================================

    link.addEventListener("click", function (event) {

        event.preventDefault();


        // Check if selected language exists

        if (languages[selectedLanguage]) {

            window.location.href =
                languages[selectedLanguage];

        }

    });

});
