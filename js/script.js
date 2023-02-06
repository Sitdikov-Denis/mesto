// кнопка редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
// кнопка добавления новлй карточки
const addButton = document.querySelector('.profile__add-button');

const editForm = document.querySelector('.form');


// попап редактирования
const popupEdit = document.getElementById('profileForm');
// попап добавления 
const popupAddElem = document.getElementById('addCardForm');
// кнопка закрытия попапа редактирования
const closeEditFormButton = popupEdit.querySelector('.popup__close-button');
// кнопка закрытия попапа добавления
const closeAddFormButton = popupAddElem.querySelector('.popup__close-button');


const currentName = document.querySelector('.profile__name');
const currentDescription = document.querySelector('.profile__description');

const fieldName = document.getElementById('profileName');
const fieldDescription = document.getElementById('profileDescription');

const fieldTitle = document.getElementById('placeTitle');
const fieldLink = document.getElementById('placeLink');

const popupPhotoView = document.getElementById('viewPhoto');
const popupPhoto = popupPhotoView.querySelector('.popup__photo');
const popupPhotoCapture = popupPhotoView.querySelector('.popup__photo-caption');
const buttonClosePopupPhoto = popupPhotoView.querySelector('.popup__close-button');

function openPopup(popup, evt) {
  popup.classList.add('popup_active');
  const popupId = popup.id;

  switch(popupId) {
    case 'profileForm':
      fieldName.value = currentName.textContent;
      fieldDescription.value = currentDescription.textContent;
    case 'viewPhoto':
      popupPhoto.src = evt.target.src;
      popupPhotoCapture.textContent = evt.target.alt;
  };
    
};

function closePopup(evt) {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_active');
};

function changeName(evt) {
  evt.preventDefault();
  currentName.textContent = fieldName.value;
  currentDescription.textContent = fieldDescription.value;
};

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
  elementCard.querySelector('.element__photo').addEventListener('click', (evt) => openPopup(popupPhotoView, evt));
  elementsContainer.prepend(elementCard);
  return elementCard;
};

const addNewCard = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: fieldTitle.value,
    link: fieldLink.value,
  };
  addCard(cardData);
  fieldTitle.value = '';
  fieldLink.value = '';
};

initialCards.forEach((element) => {
  addCard(element);
});

let deleteButtons = document.querySelectorAll('.element__delete-button');
let likeButtons = document.querySelectorAll('.element__like-button');

const deleteCard = (evt) => {
  const targetCard = evt.target.closest('.element');
  targetCard.remove();
};

const addLike = (evt) => {
  evt.target.classList.toggle('element__like-button_active');
};


document.body.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__like')) {
    addLike(evt);
  };

  if (evt.target.classList.contains('element__delete-button')) {
    deleteCard(evt);
  };
});

addButton.addEventListener('click', () => openPopup(popupAddElem));
editButton.addEventListener('click', () => openPopup(popupEdit));
closeEditFormButton.addEventListener('click', closePopup);
closeAddFormButton.addEventListener('click', closePopup);
buttonClosePopupPhoto.addEventListener('click', closePopup);
popupEdit.addEventListener('submit', (evt) => {
  changeName(evt);
  closePopup(evt);
});
popupAddElem.addEventListener('submit', (evt) => {
  addNewCard(evt);
  closePopup(evt);
});