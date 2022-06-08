let img = document.getElementById("img");
let audio = document.getElementById("audio");
let trackName = document.getElementById("track-name");
let trackArtist = document.getElementById("track-artist");
let back = document.getElementById("back");
let play = document.getElementById("play");
let foward = document.getElementById("foward");
let currentMusic = document.getElementById("current-time");
let totalMusic = document.getElementById("total-duration");
let progress = document.getElementById("progress");

let isPlaying = false;
let index = 0;

// Armazenamento de musicas e dados
let data = [
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "O Papa é Pop",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/01 O Papa é Pop.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Até o Fim",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/02 Até o Fim.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Vida Real",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/03 Vida Real.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Infinita Highway",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/04 Infinita Highway.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Armas Químicas e Poemas",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/05 Armas Químicas e Poemas.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "O Preço",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/06 O Preço.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Dom Quixote",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/07 Dom Quixote.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "3x4",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/08 3x4.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Refrão de Bolero",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/09 Refrão de Bolero.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Surfando em Karmas e DNA",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/10 Surfando em Karmas e DNA.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Depois de Nós",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/11 Depois de Nós.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "3º do Plural",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/12 3º do Plural.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Terra de Gigantes - Números",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/13 Terra de Gigantes - Números.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Somos Quem Podemos Ser",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/14 Somos Quem Podemos Ser.mp3"
    },
    {
        image: "./assets/musicas/Engenheiros do Hawaii/Folder.jpg",
        title: "Outras Freqüencias",
        artist: "Engenheiros do Hawaii",
        file: "./assets/musicas/Engenheiros do Hawaii/Engenheiros do Hawaii Acústico MTV/15 Outras Freqüencias.mp3"
    },
    {
        image: "./assets/musicas/Banda catedral/Folder.jpg",
        title: "Inexoravelmente",
        artist: "Banda catedral",
        file: "./assets/musicas/Banda catedral/Banda catedral - 20 Anos/01 Inexoravelmente.mp3"
    },
    {
        image: "./assets/musicas/Banda catedral/Folder.jpg",
        title: "Joga fora",
        artist: "Banda catedral",
        file: "./assets/musicas/Banda catedral/Banda catedral - 20 Anos/01 Joga fora.mp3"
    }
];
localStorage.setItem("newData", JSON.stringify(data));
let musics = JSON.parse(localStorage.newData);

// FUNCTIONS
function RenderMe() {
    img.src = musics[index].image;
    audio.src = musics[index].file;
    document.body.style.backgroundImage = musics[index].background;
    trackName.innerHTML = musics[index].title;
    trackArtist.innerHTML = musics[index].artist;
}
RenderMe();

function playPause() {
    isPlaying ? goPause() : goPlay();
}

function goPause() {
    audio.pause();
    play.src = "./assets/btns/play.PNG";
    isPlaying = false;
}

function goPlay() {
    audio.play();
    play.src = "./assets/btns/pause.PNG";
    isPlaying = true;
}

function updateProgress() {
    let porcent = Math.floor((audio.currentTime / audio.duration) * 100);
    progress.value = porcent;
    currentMusic.innerHTML = secondsInMinutes(Math.floor(audio.currentTime));
    totalMusic.innerHTML = secondsInMinutes(Math.floor(audio.duration));
    if (audio.currentTime == audio.duration) {
        nextMusic();
    }
};

function changeProgress() {
    audio.currentTime = progress.value / progress.max * audio.duration;
    goPlay();
    audio.play();
};

function secondsInMinutes(second) {
    let minutes = Math.floor(second / 60);
    let seconds = second % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ":" + seconds;
};

function backMusic() {
    index--
    if (index < 0) {
        index = musics.length - 1;
    }
    RenderMe();
    goPlay();
};

function nextMusic() {
    index++
    if (index > musics.length - 1) {
        index = 0;
    }
    RenderMe();
    goPlay();
}

//EVENTS
play.addEventListener("click", playPause);
audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", changeProgress);
back.addEventListener("click", backMusic);
foward.addEventListener("click", nextMusic);
