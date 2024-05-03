const toastBox = document.getElementById("toastBox");
const btnOne = document.getElementById("btn-one");
const btnTow = document.getElementById("btn-tow");
const btnThree = document.getElementById("btn-three");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Succesfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes("error")) {
        toast.classList.add("error");
    }
    if(msg.includes("Invalid")) {
        toast.classList.add("invalid");
    }

    setTimeout(() => {
        toast.remove();
    },5000);
}

btnOne.addEventListener("click", () => {
    showToast(successMsg);
})

btnTow.addEventListener("click", () => {
    showToast(errorMsg);
})

btnThree.addEventListener("click", () => {
    showToast(invalidMsg);
})
