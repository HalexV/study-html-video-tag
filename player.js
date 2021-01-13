let video = document.getElementById("video");

video.addEventListener("ended", stopVideo);

onload = () => {
  const playerMainButton = document.getElementById("main-btn");
  const playerFullscreenButton = document.getElementById("fullscreen");

  playerMainButton.addEventListener("click", play);
  playerMainButton.addEventListener("click", toggleToPause);

  playerFullscreenButton.addEventListener("click", fullscreen);
  playerFullscreenButton.addEventListener("click", toggleToNormalScreen);
};

function toggleToPause() {
  const element = document.getElementById("main-btn");

  element.setAttribute("src", "./assets/pause-white-48dp.svg");
  element.setAttribute("alt", "Pausar");
  element.setAttribute("title", "Pausar");

  element.removeEventListener("click", play);
  element.removeEventListener("click", toggleToPause);

  element.addEventListener("click", pause);
  element.addEventListener("click", toggleToPlay);
}

function toggleToPlay() {
  const element = document.getElementById("main-btn");

  element.setAttribute("src", "./assets/play_arrow-white-48dp.svg");
  element.setAttribute("alt", "Reproduzir");
  element.setAttribute("title", "Reproduzir");

  element.removeEventListener("click", pause);
  element.removeEventListener("click", toggleToPlay);

  element.addEventListener("click", play);
  element.addEventListener("click", toggleToPause);
}

function toggleToNormalScreen(e) {
  const element = e.target;

  element.setAttribute("src", "./assets/fullscreen_exit-white-48dp.svg");
  element.setAttribute("alt", "Tela normal");
  element.setAttribute("title", "Minimizar");

  element.removeEventListener("click", fullscreen);
  element.removeEventListener("click", toggleToNormalScreen);

  element.addEventListener("click", normalScreen);
  element.addEventListener("click", toggleToFullscreen);
}

function toggleToFullscreen(e) {
  const element = e.target;

  element.setAttribute("src", "./assets/fullscreen-white-48dp.svg");
  element.setAttribute("alt", "Tela cheia");
  element.setAttribute("title", "Maximizar");

  element.removeEventListener("click", normalScreen);
  element.removeEventListener("click", toggleToFullscreen);

  element.addEventListener("click", fullscreen);
  element.addEventListener("click", toggleToNormalScreen);
}

function displayControllers() {
  const controllers = document.getElementsByClassName("controls-row")[0];

  controllers.style.display = "flex";
}

function hideControllers() {
  const controllers = document.getElementsByClassName("controls-row")[0];

  controllers.style.display = "none";
}

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stopVideo() {
  video.pause();
  toggleToPlay();
  video.currentTime = 0;
}

function speedDown() {
  if (video.playbackRate <= 0.5) {
    return;
  }

  video.playbackRate -= 0.25;
}

function speedUp() {
  if (video.playbackRate >= 2) {
    return;
  }

  video.playbackRate += 0.5;
}

function fullscreen() {
  video.requestFullscreen();
}

function normalScreen() {
  document.exitFullscreen();
}

function forward() {
  video.currentTime += 10;
}

function rewind() {
  video.currentTime -= 10;
}
