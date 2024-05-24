let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
    let boxwidth = (e.pageX - leftSpace) + "px"; 
    imgWrap.style.width = boxwidth;
    line.style.left = boxwidth;
}