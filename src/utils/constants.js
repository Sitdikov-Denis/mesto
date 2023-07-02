


// исходный массив карточек
const baikal = new URL('../images/elements/baikal.jpg', import.meta.url);
const norway = new URL('../images/elements/norway.jpg', import.meta.url);
const london = new URL('../images/elements/london.jpg', import.meta.url)
const mountains = new URL('../images/elements/mountain.jpg', import.meta.url)
const sokorta = new URL('../images/elements/sokorta.jpeg', import.meta.url)
const praga = new URL('../images/elements/praga.jpg', import.meta.url)

export const initialCards = [
  {
    name: 'Байкал',
    link: baikal
  },
  {
    name: 'Норвегия',
    link: norway
  },
  {
    name: 'Лондон',
    link: london
  },
  {
    name: 'Радужные горы',
    link: mountains
  },
  {
    name: 'Сокорта',
    link: sokorta
  },
  {
    name: 'Прага',
    link: praga
  },
];




 export const currentParams = {
  formSelector: '.form',
  inputSelector: '.form__input-field',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input-field_error',
  errorClass: 'form__input-error_active'
};

// форма редактирования
 export const formEditProfile = document.querySelector('#profileForm').querySelector('.form');

 // форма редактирования фото профиля
 export const formEditPhotoProfile = document.querySelector('#profileImageForm').querySelector('.form');

// форма добавления
 export const formAddCard = document.querySelector('#addCardForm').querySelector('.form');

// кнопка редактирования профиля
 export const editButton = document.querySelector('.profile__edit-button');

// кнопка добавления нового элемента
 export const addButton = document.querySelector('.profile__add-button');

// получение текущих значений имени и описания профиля
 export const userInfoSelectors = {nameSelector:'.profile__name', descriptionSelector:'.profile__description'};

// поля формы редактирования профиля
 export const fieldName = document.querySelector('#name-input');
 export const fieldDescription = document.querySelector('#description-input');

 // аватар
 export const profilePhoto = document.querySelector('.profile__photo');

 // оверлей аватара
 export const profilePhotoOverlay = document.querySelector('.profile__photo-block');
 
// селекторы
 export const ELEMENTS_CONTAINER_SELECTOR = '.elements';
 export const CARD_TEMPLATE_SELECTOR = '#element-template';
 export const POPUP_WITH_PHOTO_SELECTOR = '#viewPhoto';
 export const POPUP_EDIT_FORM_SELECTOR = '#profileForm';
 export const POPUP_ADD_CARD_FORM_SELECTOR = '#addCardForm';
 export const POPUP_PHOTO_SELECTOR = '.popup__photo';
 export const POPUP_PHOTO_CAPTION_SELECTOR = '.popup__photo-caption';
 export const POPUP_PHOTO_PROFILE_SELECTOR = '#profileImageForm';
 export const POPUP_DELETE_CARD_SELECTOR = '#deleteImagePopup'

 // параметры для Api
export const BASE_ROUTE = 'https://mesto.nomoreparties.co/v1/cohort-42';
export const TOKEN = '03a4523e-62a7-4ee4-ae37-dcf3604823ce';

