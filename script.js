
const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const songImage = document.getElementById("songImage");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const songList = document.getElementById("songList");

const songs = [
  {
    title: "Labon Ko",
    artist: "KK",
    source: "02. Labon Ko.mp3",
    image: "m4.jpg"
  },
  {
    title: "Chukar Mere Maan Ko",
    artist: "Kishor Kumar",
    source: "03. Chukar Mere Mann Ko.mp3",
    image: "m3.jpg"
  },
  {
    title: "Arabic Kuthu",
    artist: "Anirudh",
    source: "Arabic Kuthu_320(PagalWorld).mp3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmEOllHDtfn0zLF9spT2gufUR0DEqjFz4Ng&usqp=CAU"
  },

  {
    title: "Tum Se Hi",
    artist: "Mohit Chauvan",
    source: "Tum Se Hi (Jab We Met) - Mohit Chauhan - 320Kbps.mp3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnr8Ql3Na_Cy1y2KZJOj0B-Gzt1Wsrqi_NmA&usqp=CAU"
  },

  {
    title: "Tujhko Jo Paya",
    artist: "Mohit Chauvan",
    source: "06. Tujhko Jo Paaya.mp3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQi0vyAFzsUF-6T_9abq-B2Cyb_JtMWtV8nSQD4jMeYPYvANNices8k3b-M2xrxI6nLc&usqp=CAU"
  },

  {
    title: "Wolves",
    artist: "Selena Gomez",
    source: "Wolves - Selena Gomez, Marshmello- [MyMp3Bhojpuri.In].mp3",
    image: "https://images.squarespace-cdn.com/content/v1/58edd4add482e95365c91942/1516319835985-NKC46SJMNMZNO9UIQY14/artworks-000281761313-sl2jft-original.jpg?format=1000w"
  }
];

let currentSongIndex = 0;

// Function for play song
function playSong(index) {
  const currentSong = songs[index];
  audioPlayer.src = currentSong.source;
  audioPlayer.play();
  playButton.textContent = "Pause";
  songImage.src = currentSong.image;
  songTitle.textContent = currentSong.title;
  songArtist.textContent = currentSong.artist;
  currentSongIndex = index;
}

// Function to pause the song
function pauseSong() {
  audioPlayer.pause();
  playButton.textContent = "Play";
}

// Function to toggle 
function togglePlayPause() {
  if (audioPlayer.paused) {
    playSong(currentSongIndex);
  } else {
    pauseSong();
  }
}

// Function to play the previous song
function prevSong() {
  if (currentSongIndex > 0) {
    playSong(currentSongIndex - 1);
  } else {
    playSong(songs.length - 1);
  }
}

// Function to play the next song
function nextSong() {
  if (currentSongIndex < songs.length - 1) {
    playSong(currentSongIndex + 1);
  } else {
    playSong(0);
  }
}

// Function to populate the song list
function populateSongList() {
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${song.title} - ${song.artist}`;
    listItem.addEventListener("click", () => playSong(i));
    songList.appendChild(listItem);
  }
}

// Populate the song list
populateSongList();
