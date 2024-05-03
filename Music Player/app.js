const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon"); 
const img = document.querySelector("img")

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

ctrlIcon.addEventListener("click", () => {
    function playPause() {
         if(ctrlIcon.classList.contains("fa-pause")) {
            song.pause();
            ctrlIcon.classList.remove("fa-pause");
            ctrlIcon.classList.add("fa-play");
            img.classList.remove("song-animation");
         } else {
            song.play();
            ctrlIcon.classList.add("fa-pause");
            ctrlIcon.classList.remove("fa-play");
            img.classList.add("song-animation");
         }
    }
    playPause();
});

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
