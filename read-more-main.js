let readMoreMain = document.querySelector(".main__read-more");
let iconMain = document.querySelector(".read-more__icon");
let textLaptop = document.querySelector(".main__text--laptop");
let textDesktop = document.querySelector(".main__text--desktop");
readMoreMain.addEventListener("click", function() {
    textLaptop.classList.toggle("main__text--laptop");
    textDesktop.classList.toggle("main__text--desktop");
    iconMain.classList.toggle("rotate");
    if (readMoreMain.textContent === "Читать далее") {
       readMoreMain.textContent = "Скрыть";
    } else {
        readMoreMain.textContent = "Читать далее";
    } 
});