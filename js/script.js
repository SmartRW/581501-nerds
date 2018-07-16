var modalFeedback = document.querySelector('.modal-feedback');
var modalOpenButton = document.querySelector('.feedback-button');
var modalCloseButton = document.querySelector('.modal-close');

modalOpenButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
});
