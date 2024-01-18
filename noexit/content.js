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

const cameraCheck = setInterval(() => {
  const turnOnCameraButton = document.querySelector('[aria-label="Turn on camera (⌘ + e)"]');
  if (turnOnCameraButton) {
    turnOnCameraButton.click();
    turnOnCameraButton.style.display = "none";
    clearInterval(cameraCheck);
  }
}, 500);

const micCheck = setInterval(() => {
  const turnOnMicButton = document.querySelector('[aria-label="Turn on microphone (⌘ + d)"]');
  if (turnOnMicButton) {
    turnOnMicButton.click();
    turnOnMicButton.style.display = "none";
    clearInterval(micCheck);
  }
}, 500);

setInterval(() => {
  if (!document.fullscreenElement) {
    enterFullScreen();
  }
}, 500);

const leaveCallButtonCheck = setInterval(() => {
  const leaveCallButton = document.querySelector('[aria-label="Leave call"]');
  if (leaveCallButton) {
    leaveCallButton.style.display = "none";
    clearInterval(leaveCallButtonCheck);
  }
}, 500);
