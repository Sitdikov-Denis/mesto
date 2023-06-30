import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import {
  addButton,
  currentParams,
  editButton,
  fieldDescription,
  fieldName,
  initialCards,
  userInfoSelectors,
  formAddCard,
  formEditProfile,
  POPUP_PHOTO_SELECTOR,
  POPUP_PHOTO_CAPTION_SELECTOR,
  POPUP_WITH_PHOTO_SELECTOR,
  ELEMENTS_CONTAINER_SELECTOR,
  POPUP_EDIT_FORM_SELECTOR,
  POPUP_ADD_CARD_FORM_SELECTOR,
  POPUP_PHOTO_PROFILE_SELECTOR,
  profilePhoto, 
  formEditPhotoProfile,
  profilePhotoOverlay
} from "../utils/constants.js";

import {createCard} from "../utils/utils.js";

import "./index.css";

// создание экземпляра класса информации о пользователе
const userInfo = new UserInfo(userInfoSelectors);

// заполнение страницы исходным массивом
const cardListSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item, popupPhotoView);
    const cardElement = card.generateCard();
    cardListSection.addItem(cardElement);
  }
}, ELEMENTS_CONTAINER_SELECTOR);

// создание объектов валидатора
const formEditProfileValidator = new FormValidator(formEditProfile, currentParams);
formEditProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(formAddCard, currentParams);
formAddCardValidator.enableValidation();

const formEditProfileImageValidator = new FormValidator(formEditPhotoProfile, currentParams);
formEditProfileImageValidator.enableValidation()

// создание попапа редактирования фото профиля
const popupEditProfilePhoto = new PopupWithForm({
  validator: formEditProfileImageValidator,
  handleFormSubmit: (formData) => {
    profilePhoto.src = formData.photo;
  }
}, POPUP_PHOTO_PROFILE_SELECTOR);

// создание попапа редактирования профиля
const popupEditProfile = new PopupWithForm({
  validator: formEditProfileValidator,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData.name, formData.description);
  }
}, POPUP_EDIT_FORM_SELECTOR);

// создание попапа добавления нового элемента
const popupAddCard = new PopupWithForm({
  validator: formAddCardValidator,
  handleFormSubmit: (formData) => {
    const card = createCard({name: formData.name, link: formData.description}, popupPhotoView)
    const cardElement = card.generateCard();
    cardListSection.addItem(cardElement);
  }
}, POPUP_ADD_CARD_FORM_SELECTOR);

// создание попапа просмотра фото
const popupPhotoView = new PopupWithImage(
  POPUP_WITH_PHOTO_SELECTOR,
  POPUP_PHOTO_SELECTOR,
  POPUP_PHOTO_CAPTION_SELECTOR
);

// слушатель на кнопке редактирования профиля
editButton.addEventListener('click', () => {
  popupEditProfile.open();
  const info = userInfo.getUserInfo();
  fieldName.value = info.name;
  fieldDescription.value = info.description;
});

// слушатель на кнопке добавления новой карточки
addButton.addEventListener('click', () => {
  popupAddCard.open();
});

// слушатель на оверлее фото профиля
profilePhotoOverlay.addEventListener('click', () => {
  popupEditProfilePhoto.open()
});

cardListSection.renderItems();
popupPhotoView.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfilePhoto.setEventListeners();