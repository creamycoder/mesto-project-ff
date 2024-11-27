import { renderCards, createCard, deleteCard, likeCard } from "./card.js";
import { openModal, closeModal, fillEditModal, saveEditModal, saveNewCard, openImage } from './modal.js';
import { popupNewCard, popupEditProfile, profile, pageContent, formEditProfile, formAddCard, popupImage } from './config.js'
import '../pages/index.css';

renderCards(createCard, deleteCard, likeCard, openImage);

profile.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('profile__add-button')) {
        openModal(popupNewCard);
    } else if (evt.target.classList.contains('profile__edit-button')) {
        fillEditModal(popupEditProfile);
        openModal(popupEditProfile);
    }
});

pageContent.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__close') || !evt.target.closest('.popup__content')) {
        if (evt.target.closest('.popup_type_new-card')) {
            closeModal(popupNewCard);  
        } else if (evt.target.closest('.popup_type_edit')) {
            closeModal(popupEditProfile); 
        } else if (evt.target.closest('.popup_type_image')) {
            closeModal(popupImage);
        }
    }
});

document.addEventListener('keyup', function(evt) {
    if (evt.key === 'Escape') {
        if (popupNewCard.classList.contains('popup_is-opened')) {
            closeModal(popupNewCard);
        } else if (popupEditProfile.classList.contains('popup_is-opened')) {
            closeModal(popupEditProfile);
        } else if (popupImage.classList.contains('popup_is-opened')) {
            closeModal(popupImage);
        }
    }
});

formEditProfile.addEventListener('submit', function(evt) {
    saveEditModal(evt);
});

formAddCard.addEventListener('submit', function(evt) {
    saveNewCard(evt);
});





 







