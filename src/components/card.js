import { initialCards } from "./cards.js";
import { placesList, cardTemplate } from "./config.js";
import { openImage } from "./modal.js";

export function deleteCard(cardElement) {
    cardElement.remove();
}

export function likeCard(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

export function createCard(card, deleteCard, likeCard, openImage) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image'); 

    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').alt = card.name;

    deleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });

    likeButton.addEventListener('click', function() {
        likeCard(likeButton);
    });


    cardImage.addEventListener('click', function() {
        openImage(card.link, card.name);
    });

    return cardElement;
}

export function renderCards(createCard, deleteCard, likeCard, openImage) {
    initialCards.forEach(function (card) {
        placesList.append(createCard(card, deleteCard, likeCard, openImage));
    });
}