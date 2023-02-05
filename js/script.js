// кнопка редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
// кнопка добавления новлй карточки
const addButton = document.querySelector('.profile__add-button');

const editForm = document.querySelector('.form');


// попап редактирования
const popupEdit = document.getElementById('profileForm');
// попап добавления 
const popupAdd = document.getElementById('addCardForm');
// кнопка закрытия попапа редактирования
const closeEditFormButton = popupEdit.querySelector('.popup__close-button');
// кнопка закрытия попапа добавления
const closeAddFormButton = popupAdd.querySelector('.popup__close-button');


const currentName = document.querySelector('.profile__name');
const currentDescription = document.querySelector('.profile__description');

const fieldName = document.querySelector('#profileName');
const fieldDescription = document.querySelector('#profileDescription');

const fieldTitle = document.getElementById('placeTitle');
const fieldLink = document.getElementById('placeLink');

const popupPhotoView = document.getElementById('viewPhoto');
const popupPhoto = popupPhotoView.querySelector('.popup__photo');
const popupPhotoCapture = popupPhotoView.querySelector('.popup__photo-caption');
const buttonClosePopupPhoto = popupPhotoView.querySelector('.popup__close-button');

function openPopup(popup, evt) {
  popup.classList.add('popup_active');
  const popupId = popup.id

  switch(popupId) {
    case 'profileForm':
      fieldName.value = currentName.textContent;
      fieldDescription.value = currentDescription.textContent;
    case 'viewPhoto':
      popupPhoto.src = evt.target.src;
      popupPhotoCapture.textContent = evt.target.alt;
  }
    
}

function closePopup(evt) {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_active');
}

function changeName(evt) {
  evt.preventDefault();
  currentName.textContent = fieldName.value;
  currentDescription.textContent = fieldDescription.value;
  closePopup(evt);
}

const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

const initialCards = [
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
  },
  {
    name: 'Собакин',
    link: './images/elements/dog.jpg'
  },
];

const addCard = (element) => {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__title').textContent = element.name;
  elementCard.querySelector('.element__photo').src = element.link;
  elementCard.querySelector('.element__photo').alt = element.name;
  elementCard.querySelector('.element__photo').addEventListener('click', (evt) => openPopup(popupPhotoView, evt))
  elementsContainer.prepend(elementCard);
  return elementCard;
}

const addNewCard = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: fieldTitle.value,
    link: fieldLink.value,
  }
  const newCard = addCard(cardData);
  newCard.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  newCard.querySelector('.element__like-button').addEventListener('click', addLike);
  closePopup(evt);
}

initialCards.forEach((element) => {
  addCard(element);
})

let deleteButtons = document.querySelectorAll('.element__delete-button');
let likeButtons = document.querySelectorAll('.element__like-button');

const deleteCard = (evt) => {
  const targetCard = evt.target.closest('.element');
  console.log(targetCard);
  targetCard.remove();
}

const addLike = (evt) => {
  evt.target.classList.toggle('element__like-button_active')
}

deleteButtons.forEach(button => {
  button.addEventListener('click', deleteCard)
})


likeButtons.forEach(button => {
  button.addEventListener('click', addLike)
})

addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', () => openPopup(popupEdit));
closeEditFormButton.addEventListener('click', closePopup);
closeAddFormButton.addEventListener('click', closePopup);
buttonClosePopupPhoto.addEventListener('click', closePopup)
popupEdit.addEventListener('submit', changeName);
popupAdd.addEventListener('submit', addNewCard);


