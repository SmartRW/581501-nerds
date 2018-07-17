var modalOverlay = document.querySelector('.modal-overlay')
var modalFeedback = document.querySelector('.modal-feedback');
var feedbackForm = document.querySelector('.feedback-form');
var modalOpenButton = document.querySelector('.feedback-button');
var modalCloseButton = document.querySelector('.modal-close');
var feedbackName = document.querySelector('#feedback-name');
var feedbackEmail= document.querySelector('#feedback-email');
var feedbackMessage = document.querySelector('#feedback-message')
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('feedbackName');
  storageEmail = localStorage.getItem('feedbackEmail');
} catch (e) {
  isStorageSupport = false;
  console.log('Локальное хранилище не поддерживается');
}

modalOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalOverlay.classList.add('overlay-show');
  modalFeedback.classList.add('modal-show');
  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  } else {
    feedbackName.focus();
  }
});

modalFeedback.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
      evt.preventDefault();
      modalFeedback.classList.remove('modal-shake');
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add('modal-shake');
    } else if (isStorageSupport) {
      localStorage.setItem('feedbackEmail', feedbackEmail.value);
      localStorage.setItem('feedbackName', feedbackName.value);
    }
});

modalCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalOverlay.classList.remove('overlay-show');
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-shake');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalOverlay.classList.contains('overlay-show')) {
      modalOverlay.classList.remove('overlay-show');
      modalFeedback.classList.remove('modal-show');
      modalFeedback.classList.remove('modal-shake');
    }
  }
});
