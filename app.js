console.log("Welcome to Music App");
let audioIndex = 1;
let masterPlay = document.getElementById("masterPlay");
let previousBtn = document.getElementById("previousBtn");
let nextBtn = document.getElementById("nextBtn");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("songs/1.mp3");
let gif = document.getElementById("gif");
let currentSong = document.getElementById("currentSong");
let songList = Array.from(document.getElementsByClassName("songs"));
let playButton = document.getElementsByClassName("playButton");
// audioElement.play()
let songs = [
  {
    title: "Aaja mahiya",
    filePath: "songs/1.mp3",
    coverPath:
      "https://rukminim1.flixcart.com/image/416/416/av-media/movies/c/f/c/fiza-original-imadhfyhwwbydzvg.jpeg?q=70",
  },
  {
    title: "Deva Shree Ganesa",
    filePath: "songs/2.mp3",
    coverPath:
      "https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/ab4ffb7acad291e6d684168d435cc2da_500x500.jpg",
  },
  {
    title: "Dilbara",
    filePath: "songs/3.mp3",
    coverPath:
      "https://c-fa.cdn.smule.com/rs-s92/arr/15/1e/651378c6-7042-4aec-9dcd-425181c234ce_1024.jpg",
  },
  {
    title: "Dil chori",
    filePath: "songs/4.mp3",
    coverPath:
      "https://i.pinimg.com/originals/a2/60/41/a26041e5a878e223d3c3b177b6f24d4b.jpg",
  },
  {
    title: "Do pal ka",
    filePath: "songs/5.mp3",
    coverPath:
      "https://a10.gaanacdn.com/images/albums/79/71379/crop_480x480_71379.jpg",
  },
  {
    title: "High rated",
    filePath: "songs/6.mp3",
    coverPath:
      "https://www.teahub.io/photos/full/70-703399_singer-guru-randhawa-biography-and-hd-wallpapers-2019.jpg",
  },
  {
    title: "In panchiyo",
    filePath: "songs/7.mp3",
    coverPath:
      "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/50898607.jpg",
  },
  {
    title: "Ishare-Tere",
    filePath: "songs/8.mp3",
    coverPath:
      "https://djravish.com/wp-content/uploads/2018/12/ishare-tere-663x663.jpg",
  },
  {
    title: "Kal ho na ho",
    filePath: "songs/9.mp3",
    coverPath: "https://wallpapercave.com/wp/wp7647992.jpg",
  },
  {
    title: "Made in india",
    filePath: "songs/10.mp3",
    coverPath:
      "https://i.pinimg.com/originals/e5/e0/3c/e5e03c5c3a5bc54c34ed8da75da54845.jpg",
  },
];

songList.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].title;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    makeAllPlay();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("Time is updated");
  let progress = (audioElement.currentTime / audioElement.duration) * 100;
  // console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(playButton).forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};
let x = true;

const playButtonClick = (e) => {
  console.log(e.target);
  makeAllPlay();
  audioIndex = parseInt(e.target.id);
  audioElement.src = `songs/${audioIndex}.mp3`;
  currentSong.innerText = songs[audioIndex - 1].title;
  audioElement.currentTime = 0;
  if (x) {
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    x = false;
  } else {
    e.target.classList.remove("fa-pause-circle");
    e.target.classList.add("fa-play-circle");
    audioElement.pause();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    x = true;
  }
};

Array.from(playButton).forEach((element) => {
  element.addEventListener("click", playButtonClick);
});

previousBtn.addEventListener("click", () => {
  if (audioIndex <= 1) {
    audioIndex = 10;
  } else {
    audioIndex -= 1;
  }
  audioElement.src = `songs/${audioIndex}.mp3`;
  currentSong.innerText = songs[audioIndex - 1].title;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
nextBtn.addEventListener("click", () => {
  if (audioIndex >= 10) {
    audioIndex = 1;
  } else {
    audioIndex += 1;
  }
  audioElement.src = `songs/${audioIndex}.mp3`;
  currentSong.innerText = songs[audioIndex - 1].title;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
