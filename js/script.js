{
    const toggleButton = () => {
        const body = document.querySelector(".js-body");
        const header = document.querySelector(".js-header");
        const sectionHeader = document.querySelectorAll(".js-section__header");
        const sectionArticle = document.querySelectorAll(".js-section__article");
        const tableCaption = document.querySelector(".js-table__caption");
        const buttonName = document.querySelector(".js-button__icon");
        const footerHeader = document.querySelector(".js-footer__header");
        const footerContact = document.querySelector(".js-footer__contact");

        body.classList.toggle("body--light");
        tableCaption.classList.toggle("table__caption--dark");
        footerHeader.classList.toggle("footer__header--dark");
        header.classList.toggle("header--light");
        footerContact.classList.toggle("footer__contact--light");

        sectionHeader.forEach(header => {
            header.classList.toggle("section__header--dark");
        });

        sectionArticle.forEach(article => {
            article.classList.toggle("section__article--light");
        });

        buttonName.innerText = body.classList.contains("body--light") ? "🌙" : "🌞";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleButton);
    };
    init();
};
