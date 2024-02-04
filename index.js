let progress = document.getElementById("progress");
let song = document.getElementById("song");
let crtlIcon = document.getElementById("ctrlIcon");

song.onloadeddata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(crtlIcon.classList.contains("fa-play")){
        song.play();
        crtlIcon.classList.remove("fa-play");
        crtlIcon.classList.add("fa-pause");
    }
    else {
        song.pause();
        crtlIcon.classList.add("fa-play");
        crtlIcon.classList.remove("fa-pause");
    }
}

function seekToTime(time) {
    song.currentTime = time;
    if (song.paused) {
        crtlIcon.classList.remove("fa-pause");
        crtlIcon.classList.add("fa-play");
    } else {
        crtlIcon.classList.remove("fa-play");
        crtlIcon.classList.add("fa-pause");
    }
}


song.addEventListener("timeupdate", function() {
    progress.value = song.currentTime;
});

