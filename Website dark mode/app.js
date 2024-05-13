let icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    function darkmode() {
        document.body.classList.toggle("dark-theme");

        if(document.body.classList.contains("dark-theme")) {
            icon.src = "sun.png";
        } else {
            icon.src = "moon.png";
        }
    }
    darkmode();
})