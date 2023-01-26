let closeButton = document.querySelector('.profile-form__toggle');
let editButton = document.querySelector('.profile__edit-button');
console.log(editButton)
let popup = document.querySelector('.profile-form');

let editForm = document.querySelector('.profile-form__form');

let currentName = document.querySelector('.profile__name');
let currentDescription = document.querySelector('.profile__description');

let fieldName = document.querySelector('#profileName');
let fieldDescription = document.querySelector('#profileDescription');

function popupOpen() {
  popup.classList.add('profile-form_active');
  fieldName.value = currentName.textContent;
  fieldDescription.value = currentDescription.textContent;
}

function popupClose() {
  popup.classList.remove('profile-form_active');
}

function changeName(evt) {
  evt.preventDefault();
  currentName.textContent = fieldName.value;
  currentDescription.textContent = fieldDescription.value;
  popupClose();
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

initialCards.forEach((element) => {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__title').textContent = element.name;
  elementCard.querySelector('.element__photo').src = element.link;
  elementCard.querySelector('.element__photo').alt = element.name;
  elementsContainer.append(elementCard);
})

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
editForm.addEventListener('submit', changeName);