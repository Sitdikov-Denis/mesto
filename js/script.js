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

const fieldName = document.getElementById('name-input');
const fieldDescription = document.getElementById('description-input');

const fieldTitle = document.getElementById('title-input');
const fieldLink = document.getElementById('url-input');

const popupPhotoView = document.getElementById('viewPhoto');
const popupPhoto = popupPhotoView.querySelector('.popup__photo');
const popupPhotoCapture = popupPhotoView.querySelector('.popup__photo-caption');
const buttonClosePopupPhoto = popupPhotoView.querySelector('.popup__close-button');



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

export class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector)
    .content.querySelector('.element').cloneNode(true);

    return cardElement;
  }

  _generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__photo').src = this._image;
    this._deleteButton = this._element.querySelector('.element__delete-button')
    this._likeButton = this._element.querySelector('.element__like-button')
    this._photo = this._element.querySelector('.element__photo')
    this._setEventListeners()
    return this._element
  }

  _deleteCard() {
    this._element.remove();
    console.log('delete')
  };

  _addLike() {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _openPhotoViewPopup(popup, evt) {
    openPopup(popup, evt)
    popupPhotoCapture.textContent = this._title;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard()
    })

    this._likeButton.addEventListener('click', () => {
      this._addLike()
    })

    this._photo.addEventListener('click', (evt) => {
      this._openPhotoViewPopup(popupPhotoView, evt)
    })

  }
}

initialCards.forEach(initialCard => {
  const card = new Card(initialCard, '#element-template');

  const cardElement = card._generateCard();
  
  document.querySelector('.elements').append(cardElement);
})


const closeByEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
}


const closeByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup()
    console.log(evt.target) 
    console.log(evt.currentTarget)
  }
}

function openPopup(popup, evt) {
  popup.classList.add('popup_active');
  const popupId = popup.id;

  switch(popupId) {
    case 'profileForm':
      fieldName.value = currentName.textContent;
      fieldDescription.value = currentDescription.textContent;
      break
    case 'viewPhoto':
      popupPhoto.src = evt.target.src;
      popupPhotoCapture.textContent = evt.target.alt;
      break
    case 'addCardForm':
      fieldTitle.value = '';
      fieldLink.value = '';
      break
  };

  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('click', closeByOverlay);
  
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach(form => {
    const buttonElement = form.querySelector('.form__submit-button');
    const inputFields = form.querySelectorAll('.form__input-field')
    inputFields.forEach(inputField => {
      if (inputField.value) {
        isValid(form, inputField, selectors)
      }
      else {
        hideInputError(form, inputField, selectors)
      }
    })
    tuggleButtonState(inputFields, buttonElement, selectors);
  })
};

function closePopup() {
  const popup = document.querySelector('.popup_active')
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEsc)
  document.removeEventListener('click', closeByOverlay)
};

function changeName(evt) {
  evt.preventDefault();
  currentName.textContent = fieldName.value;
  currentDescription.textContent = fieldDescription.value;
};

const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;



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

// initialCards.forEach((element) => {
//   addCard(element);
// });

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

  if (evt.target.classList.contains('popup__close-button')) {
    closePopup()
  }
});


addButton.addEventListener('click', (evt) => openPopup(popupAddElem, evt));
editButton.addEventListener('click', (evt) => openPopup(popupEdit, evt));
popupEdit.addEventListener('submit', (evt) => {
  changeName(evt);
  closePopup();
});
popupAddElem.addEventListener('submit', (evt) => {
  addNewCard(evt);
  closePopup();
});



// -----------------programming in OOP----------------------------------------------

// const initialCards = [
//   {
//     name: 'Осень',
//     link: './images/elements/autumn.jpg'
//   },
//   {
//     name: 'Норвегия',
//     link: './images/elements/norway.jpg'
//   },
//   {
//     name: 'Котики',
//     link: './images/elements/cat.jpg'
//   },
//   {
//     name: 'Горы',
//     link: './images/elements/mountain.jpg'
//   },
//   {
//     name: 'Северное сияние',
//     link: './images/elements/nord.jpg'
//   },
//   {
//     name: 'Собакин',
//     link: './images/elements/dog.jpg'
//   },
// ];






