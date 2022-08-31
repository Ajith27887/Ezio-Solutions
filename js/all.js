const imgs = document.querySelectorAll("img");
const closeIcon = document.querySelector(".close");
const bugerMenu = document.querySelector(".burger-menu");

closeIcon.addEventListener("click", () => {
    bugerMenu.style.display = "none"

})

imgs[0].addEventListener("click", () => {
    bugerMenu.style.display = "block"
})