const userLang = navigator.language || navigator.userLanguage; 

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
  var turnOnCameraButton = null;
  if (userLang  == 'en-US') { 
    turnOnCameraButton = document.querySelector('[aria-label*="Turn on microphone"]');
  } else if (userLang  == 'pt-BR') {  
    turnOnCameraButton = document.querySelector('[aria-label*="Ativar câmera"]');
  }

  if (turnOnCameraButton) {
    turnOnCameraButton.click();
    turnOnCameraButton.style.display = "none";
    clearInterval(cameraCheck);
  }
}, 500);

const micCheck = setInterval(() => {
  var turnOnMicButton = null;
  if (userLang  == 'en-US') { 
    turnOnMicButton = document.querySelector('[aria-label*="Turn on microphone"]');
  } else if (userLang  == 'pt-BR') {  
    turnOnMicButton = document.querySelector('[aria-label*="Ativar microfone"]');
  }

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
  var leaveCallButton = null;
  if (userLang  == 'en-US') { 
    leaveCallButton = document.querySelector('[aria-label*="Leave call"]');
  } else if (userLang  == 'pt-BR') {  
    leaveCallButton = document.querySelector('[aria-label*="Sair da chamada"]');
  }

  if (leaveCallButton) {
    leaveCallButton.style.display = "none";
    clearInterval(leaveCallButtonCheck);
  }
}, 500);
