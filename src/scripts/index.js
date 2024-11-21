import '../pages/index.css';

const avatar  = new URL('../images/avatar.jpg', import.meta.url);
const card_1  = new URL('../images/card_1.jpg', import.meta.url);
const card_2  = new URL('../images/card_2.jpg', import.meta.url);
const card_3  = new URL('../images/card_3.jpg', import.meta.url);
const add_icon  = new URL('../images/add-icon.svg', import.meta.url);
const close  = new URL('../images/close.svg', import.meta.url);
const delete_icon  = new URL('../images/delete-icon.svg', import.meta.url);
const edit_icon  = new URL('../images/edit-icon.svg', import.meta.url);
const like_active  = new URL('../images/like-active.svg', import.meta.url);
const like_inactive  = new URL('../images/like-inactive.svg', import.meta.url);
const logo  = new URL('../images/logo.svg', import.meta.url);
const inter_Black = new URL('../vendor/fonts/Inter-Black.woff2', import.meta.url);
const inter_Medium = new URL('../vendor/fonts/Inter-Medium.woff2', import.meta.url);
const inter_Regular = new URL('../vendor/fonts/Inter-Regular.woff2', import.meta.url);

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const localImages = [
    {name: 'avatar', link: avatar},
    {name: 'card_1', link: card_1},
    {name: 'card_2', link: card_2},
    {name: 'card_3', link: card_3},
    {name: 'add-icon', link: add_icon},
    {name: 'close', link: close},
    {name: 'delete-icon', link: delete_icon},
    {name: 'edit-icon', link: edit_icon},
    {name: 'like-active', link: like_active},
    {name: 'like-inactive', link: like_inactive},
    {name: 'logo', link: logo},
    {name: 'Inter-Black', link: inter_Black},
    {name: 'Inter-Medium', link: inter_Medium},
    {name: 'Inter-Regular', link: inter_Regular},
];

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








