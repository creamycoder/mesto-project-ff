import { currentProfileName, currentProfileDescription, popupEditProfile, popupNewCard, placesList, formAddCard, popupImage } from './config.js';
import { initialCards } from './cards.js';
import { createCard, deleteCard, likeCard } from './card.js';

export function openModal(modal) {
    if (modal) {
        modal.classList.add('popup_is-animated');

        setTimeout(() => {
            modal.classList.remove('popup_is-animated');  
            modal.classList.add('popup_is-opened'); 
        }, 0);
    }
}

export function closeModal(modal) {
    if (modal) {
        modal.classList.add('popup_is-animated');
        modal.classList.remove('popup_is-opened');
        
        setTimeout(() => {
            modal.classList.remove('popup_is-animated');
        }, 600);
    }
}

export function fillEditModal(modal) {
    const nameInput = modal.querySelector('.popup__input_type_name');
    const descriptionInput = modal.querySelector('.popup__input_type_description');

    nameInput.value = currentProfileName.textContent;
    descriptionInput.value = currentProfileDescription.textContent;
}

export function saveEditModal(evt) {
    evt.preventDefault();

    const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
    const descriptionInput = popupEditProfile.querySelector('.popup__input_type_description');

    currentProfileName.textContent = nameInput.value;
    currentProfileDescription.textContent = descriptionInput.value;

    closeModal(popupEditProfile);
}

export function saveNewCard(evt) {
    evt.preventDefault();

    const nameInput = popupNewCard.querySelector('.popup__input_type_card-name');
    const linkInput = popupNewCard.querySelector('.popup__input_type_url');

    const newCard = {
        name: nameInput.value,
        link: linkInput.value,
    };;

    initialCards.unshift(newCard);

    const cardElement = createCard(newCard, deleteCard, likeCard);
    console.log('cardElement: ' + cardElement);

    placesList.prepend(cardElement);
    console.log('placesList: ' + placesList);

    closeModal(popupNewCard);

    formAddCard.reset();
}

export function openImage(link, alt) {
    const modalImage = popupImage.querySelector('.popup__image');
    const modalCaption = popupImage.querySelector('.popup__caption');

    modalImage.src = link;
    modalImage.alt = alt;
    modalCaption.textContent = alt;

    openModal(popupImage);
}