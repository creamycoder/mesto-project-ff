import { createCard, deleteCard, likeCard } from "./card.js";
import { initialCards } from "./cards.js";
import { closePopup, openPopup } from './modal.js';
import { placesList, popupNewCard, popupEditProfile, popupOpenImage, profileAddButton, profileEditButton, 
    popupImage, popupCaption, editNameInput, editDescriptionInput, currentProfileName, currentProfileDescription, 
    formEditProfile, formAddCard, addNameInput, addLinkInput } from './config.js'
import '../pages/index.css';

import { clearValidation, enableValidation } from "./validation.js";

const cardHandlers = {
    create: createCard,
    delete: deleteCard,
    like: likeCard,
    open: openImage,
};

const popups = document.querySelectorAll('.popup');

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

export function renderCards(initialCards, cardHandlers) {
    initialCards.forEach(function (card) {
        placesList.append(cardHandlers.create(card, { delete: cardHandlers.delete, like : cardHandlers.like, open: cardHandlers.open }));
    });
}

export function openImage(link, alt) {
    popupImage.src = link;
    popupImage.alt = alt;
    popupCaption.textContent = alt;

    openPopup(popupOpenImage);
}

export function fillEditPopup() {
    editNameInput.value = currentProfileName.textContent;
    editDescriptionInput.value = currentProfileDescription.textContent;
}

export function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    currentProfileName.textContent = editNameInput.value;
    currentProfileDescription.textContent = editDescriptionInput.value;

    closePopup(popupEditProfile);
}

export function saveNewCard(evt) {
    evt.preventDefault();


    const newCard = {
        name: addNameInput.value,
        link: addLinkInput.value,
    };;

    initialCards.unshift(newCard);
    const cardElement = cardHandlers.create(newCard, { delete: cardHandlers.delete, like : cardHandlers.like, open: cardHandlers.open } );
    placesList.prepend(cardElement);
    closePopup(popupNewCard);
    formAddCard.reset();
}

renderCards(initialCards, cardHandlers);

profileAddButton.addEventListener('click', function() {
    openPopup(popupNewCard);
});

profileEditButton.addEventListener('click', function(evt) {
    openPopup(popupEditProfile);
    fillEditPopup();
});

popups.forEach(function(popup) {
    popup.addEventListener('mousedown', function(evt) {
        if (evt.target.classList.contains('popup__close') || !evt.target.closest('.popup__content')) {
            closePopup(popup);
            if (popup != popupOpenImage) {
                clearValidation(
                    popup, {
                    inputSelector: '.popup__input',
                    submitButtonSelector: '.popup__button',
                    inactiveButtonClass: 'popup__button_disabled'
                });
            }
        }
    });
});

formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', saveNewCard);







