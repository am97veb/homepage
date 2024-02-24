let button = document.querySelector(".js-button");
let buttonName = document.querySelector(".js-button__name")
let body = document.querySelector(".js-body");
let sectionHeader = document.querySelector(".js-section__header");
let tableCaption = document.querySelector(".js-table__caption")
let footerHeader = document.querySelector(".js-footer__header");

button.addEventListener("click", () => {
    body.classList.toggle("body--light");
    sectionHeader.classList.toggle("section__header--dark");
    tableCaption.classList.toggle("table__caption--dark");
    footerHeader.classList.toggle("footer__header--dark");

    buttonName.innerText = body.classList.contains("body--light") ? "ciemne" : "jasny";
});