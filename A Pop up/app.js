let popup = document.getElementById("popup");
let btn = document.querySelector(".btn");
let button = document.getElementById("button");


btn.addEventListener("click", () => {
    function openPopup() {
        popup.classList.add("open-popup");
    }
    openPopup();
})

button.addEventListener("click", () => {
    function closePopup() {
        popup.classList.remove("open-popup");
    }
    closePopup();
})