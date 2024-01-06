const headerContentBtn = document.querySelector(".header__content--btn");
const headerContentUl = document.querySelector(".header__content--ul");
const bgMenu = document.querySelector(".bg-menu");
const main = document.querySelector("main");
const header = document.querySelector(".header");


headerContentBtn.addEventListener("click", () => {
    headerContentBtn.classList.toggle("active");
    headerContentUl.classList.toggle("active");
    bgMenu.classList.toggle("active");
    main.classList.toggle("bg-dark");
})

document.querySelectorAll(".header__content--ul li a").forEach(item =>
    item.addEventListener("click", () => {
        if (headerContentBtn.classList.contains("active")) {
            headerContentBtn.classList.toggle("active");
            headerContentUl.classList.toggle("active");
            bgMenu.classList.toggle("active");
            main.classList.toggle("bg-dark");
        }
    })
);

document.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const header = document.querySelector(".header");

    scroll > 50 ? header.classList.add("active") : header.classList.remove("active");
});