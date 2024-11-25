import { initialCards } from "./cards.js";
import { placesList, cardTemplate } from "./config.js";

export const DeleteCard = (function() {
    function deleteCard(сardElement) {   
        сardElement.remove();
    }

    return { delete: deleteCard };
}());

export const LikeCard = (function() {
    function likeCard(likeButton) {
        likeButton.classList.toggle('card__like-button_is-active');
    }

    return { like: likeCard };
}());

export const OpenImage = (function(){
    function openImage(modal, link, alt) {
        const modalImage = modal.querySelector('.modal__image');
        const modalCaption = modal.querySelector('.modal__caption');

        modalImage.src = link;
        modalImage.alt = alt;
        modalCaption.textContent = alt;

        modal.classList.add('popup_is-opened');
    }

    return { open: openImage };
}());

export const CreateCard = (function() {
    function createCard(card, {deleteCard, likeCard}) {
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        const deleteButton = cardElement.querySelector('.card__delete-button');
        const likeButton = cardElement.querySelector('.card__like-button');
        const cardImage = cardElement.querySelector('.card__image');
        const cardTitle = cardElement.querySelector('.card__title');
    
        cardElement.querySelector('.card__image').src = card.link;
        cardElement.querySelector('.card__title').textContent = card.name;
        cardElement.querySelector('.card__image').alt = card.name;

        cardImage.src = card.link;
        cardImage.alt = card.name;
        cardTitle.textContent = card.name;
    
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

    return { create: createCard };
}());

 export const RenderCards = (function() {

    function renderCards(deleteCard, createCard, likeCard) {
        initialCards.forEach(function (card) {
            placesList.append(createCard(card, {
                deleteCard: deleteCard,
                likeCard: likeCard
            }));
        });
    }

    return  {render: renderCards };
}());