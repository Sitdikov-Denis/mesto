


// исходный массив карточек
const autumn = new URL('../images/elements/autumn.jpg', import.meta.url);
const norway = new URL('../images/elements/norway.jpg', import.meta.url);
const cat = new URL('../images/elements/cat.jpg', import.meta.url)
const mountains = new URL('../images/elements/mountain.jpg', import.meta.url)
const nord = new URL('../images/elements/nord.jpg', import.meta.url)
const dog = new URL('../images/elements/dog.jpg', import.meta.url)

export const initialCards = [
  {
    name: 'Осень',
    link: autumn
  },
  {
    name: 'Норвегия',
    link: norway
  },
  {
    name: 'Котики',
    link: cat
  },
  {
    name: 'Горы',
    link: mountains
  },
  {
    name: 'Северное сияние',
    link: nord
  },
  {
    name: 'Собакин',
    link: dog
  },
];




 export const currentParams = {
  formSelector: '.form',
  inputSelector: '.form__input-field',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input-field_error',
  errorClass: 'form__input-error_active'
}

// форма редактирования
 export const formEditProfile = document.querySelector('#profileForm').querySelector('.form');

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

// селекторы
 export const ELEMENTS_CONTAINER_SELECTOR = '.elements'
 export const CARD_TEMPLATE_SELECTOR = '#element-template'
 export const POPUP_WITH_PHOTO_SELECTOR = '#viewPhoto'
 export const POPUP_EDIT_FORM_SELECTOR = '#profileForm'
 export const POPUP_ADD_CARD_FORM_SELECTOR = '#addCardForm'
 export const POPUP_PHOTO_SELECTOR = '.popup__photo'
 export const POPUP_PHOTO_CAPTION_SELECTOR = '.popup__photo-caption'
