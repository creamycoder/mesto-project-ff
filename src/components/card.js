import { cardTemplate } from "./config.js";

export function deleteCard(cardElement) {
    cardElement.remove();
}

export function likeCard(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

export function createCard(card, handlers) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title'); 

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardTitle.textContent = card.name;

    deleteButton.addEventListener('click', function() {
       handlers.delete(cardElement);
    });

    likeButton.addEventListener('click', function() {
        handlers.like(likeButton);
    });


    cardImage.addEventListener('click', function() {
        handlers.open(card.link, card.name);
    });

    return cardElement;
}

