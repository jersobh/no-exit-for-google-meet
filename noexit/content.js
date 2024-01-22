'use strict';

const ARIA_LABELS = {
  camera: {
    'en-US': "Turn on camera",
    'pt-BR': "Ativar câmera"
  },
  mic: {
    'en-US': "Turn on microphone",
    'pt-BR': "Ativar microfone"
  },
  leaveCall: {
    'en-US': "Leave call",
    'pt-BR': "Sair da chamada"
  }
};

const userLang = navigator.language || navigator.userLanguage; 
navigator.keyboard.lock();
document.addEventListener('keydown', event => {
  event.preventDefault();
  return false;
});

document.addEventListener('contextmenu', event => event.preventDefault());

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
  var turnOnCameraButton = document.querySelector(`[aria-label*="${ARIA_LABELS.camera[userLang]}"]`);

  if (turnOnCameraButton) {
    turnOnCameraButton.click();
    turnOnCameraButton.style.display = "none";
    turnOnCameraButton.remove();
    clearInterval(cameraCheck);
  }
}, 500);

const micCheck = setInterval(() => {
  const turnOnMicButton = document.querySelector(`[aria-label*="${ARIA_LABELS.mic[userLang]}"]`);

  if (turnOnMicButton) {
    turnOnMicButton.click();
    turnOnMicButton.style.display = "none";
    turnOnMicButton.remove();
    clearInterval(micCheck);
  }
}, 500);



const leaveCallButtonCheck = setInterval(() => {
  var leaveCallButton = document.querySelector(`[aria-label*="${ARIA_LABELS.leaveCall[userLang]}"]`);

  if (leaveCallButton) {
    leaveCallButton.style.display = "none";
    leaveCallButton.remove();
    clearInterval(leaveCallButtonCheck);
  }
}, 500);

setInterval(() => {
  if (!document.fullscreenElement) {
    enterFullScreen();
  }
}, 500);

