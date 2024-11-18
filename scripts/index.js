const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function addCard() {
    initialCards.forEach(function (card) {
        const initialCardElement = cardTemplate.querySelector('.card').cloneNode(true);
        initialCardElement.querySelector('.card__image').src = card.link;
        initialCardElement.querySelector('.card__title').textContent = card.name;
        dltCard(initialCardElement);
    
        placesList.append(initialCardElement);
    });
}

function dltCard(initialCardElement) {
    initialCardElement.querySelector('.card__delete-button').addEventListener('click', function() {
        initialCardElement.remove();
    });
}

addCard();








