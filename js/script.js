// кнопка редактирования профиля
let editButton = document.querySelector('.profile__edit-button');
// кнопка добавления новлй карточки
let addButton = document.querySelector('.profile__add-button')

let editForm = document.querySelector('.form__form')
// попап редактирования
let popupEdit = document.getElementById('profileForm');
// попап добавления 
let popupAdd = document.getElementById('addCardForm')
// кнопка закрытия попапа редактирования
let closeEditFormButton = popupEdit.querySelector('form__toggle')
// кнопка закрытия попапа добавления
let closeAddFormButton = popupAdd.querySelector('form__toggle')


let currentName = document.querySelector('.profile__name');
let currentDescription = document.querySelector('.profile__description');

let fieldName = document.querySelector('#profileName');
let fieldDescription = document.querySelector('#profileDescription');

function openPopup(popup) {
  popup.classList.add('form_active');
  fieldName.value = currentName.textContent;
  fieldDescription.value = currentDescription.textContent;
}

function closePopup(popup) {
  popup.classList.remove('form_active');
}

function changeName(evt) {
  evt.preventDefault();
  currentName.textContent = fieldName.value;
  currentDescription.textContent = fieldDescription.value;
  closePopup();
}

const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

const initialCards = [
  {
    name: 'Собакин',
    link: './images/elements/dog.jpg'
  },
  {
    name: 'Осень',
    link: './images/elements/autumn.jpg'
  },
  {
    name: 'Норвегия',
    link: './images/elements/norway.jpg'
  },
  {
    name: 'Котики',
    link: './images/elements/cat.jpg'
  },
  {
    name: 'Горы',
    link: './images/elements/mountain.jpg'
  },
  {
    name: 'Северное сияние',
    link: './images/elements/nord.jpg'
  }
];

const addCard = (element) => {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__title').textContent = element.name;
  elementCard.querySelector('.element__photo').src = element.link;
  elementCard.querySelector('.element__photo').alt = element.name;
  elementsContainer.append(elementCard);
}

initialCards.forEach((element) => {
  addCard(element)
})

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popupEdit.addEventListener('submit', changeName);