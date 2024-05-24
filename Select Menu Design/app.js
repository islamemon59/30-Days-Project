let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let options = document.getElementsByClassName("options");
let arrowIcon = document.getElementById("arrowIcon");

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate")
})

for(option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate")
    }
}