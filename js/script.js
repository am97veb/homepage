{
    const welcome = () => {
     console.log("witam");
    };

    const toggleButton = () => {

        const body = document.querySelector(".js-body");
        const sectionHeader = document.querySelector(".js-section__header");
        const tableCaption = document.querySelector(".js-table__caption");
        const footerHeader = document.querySelector(".js-footer__header");
        const buttonName = document.querySelector(".js-button__name");

        body.classList.toggle("body--light");
        sectionHeader.classList.toggle("section__header--dark");
        tableCaption.classList.toggle("table__caption--dark");
        footerHeader.classList.toggle("footer__header--dark");

        buttonName.innerText = body.classList.contains("body--light") ? "ciemne" : "jasny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleButton);

        welcome();
    };
        init();
};
    