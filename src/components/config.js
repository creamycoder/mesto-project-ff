export const content = document.querySelector('.content');
export const placesList = content.querySelector('.places__list');
export const cardTemplate = document.querySelector('#card-template').content;
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const popupEditProfile = document.querySelector('.popup_type_edit');
export const popupOpenImage = document.querySelector('.popup_type_image');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAvatarButton = document.querySelector('.profile__image-overlay');
export const popupImage = popupOpenImage.querySelector('.popup__image');
export const popupCaption = popupOpenImage.querySelector('.popup__caption');
export const editNameInput = popupEditProfile.querySelector('.popup__input_type_name');
export const editDescriptionInput = popupEditProfile.querySelector('.popup__input_type_description');
export const editUrlInput = popupAvatar.querySelector('.popup__input_type_url');
export const currentProfileName = content.querySelector('.profile__title');
export const currentProfileDescription = content.querySelector('.profile__description');
export const currentProfileAvatar = content.querySelector('.profile__image');
export const formEditProfile = popupEditProfile.querySelector('.popup__form');
export const formAddCard = popupNewCard.querySelector('.popup__form');
export const formAvatar = popupAvatar.querySelector('.popup__form');
export const addNameInput = popupNewCard.querySelector('.popup__input_type_card-name');
export const addLinkInput = popupNewCard.querySelector('.popup__input_type_url');
export const popupEditButton = popupEditProfile.querySelector('.popup__button');
export const popupAvatarButton = popupAvatar.querySelector('.popup__button');
export const popupAddButton = popupNewCard.querySelector('.popup__button');
