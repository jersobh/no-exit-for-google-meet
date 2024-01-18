function enterFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
    document.documentElement.msRequestFullscreen();
  }
}

setInterval(() => {
  if (!document.fullscreenElement) {
    enterFullScreen();
  }
}, 500);


const intervalId = setInterval(() => {
  const leaveCallButton = document.querySelector('[aria-label="Leave call"]');
  if (leaveCallButton) {
    console.log("Button found");
    leaveCallButton.style.display = "none";
    clearInterval(intervalId);
  }
}, 500);
