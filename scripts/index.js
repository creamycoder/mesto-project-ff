const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function renderCards() {
    initialCards.forEach(function (card) {
        placesList.append(createCard(card, {
            deleteCard: deleteCard,
        }));
    });
}

function createCard(card, {deleteCard}) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').alt = card.name;

    deleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });
    return cardElement;
}

function deleteCard(сardElement) {   
    сardElement.remove();
}

renderCards();








