const selectors = {
    formSelector: '.form',
    inputSelector: '.form__input-field',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_inactive',
    inputErrorClass: 'form__input-field_error',
    errorClass: 'form__input-error_active'
}

const formElement = document.querySelector('.form');

const inputElement = document.querySelector('.form__input-field');

const formError = formElement.querySelector(`.${inputElement.id}-error`);

class FormValidator {
    constructor(formElement, selectors) {
        this._formElement = formElement;
        this._selectors = selectors;
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
        }
        else {
            hideInputError(formElement, inputElement, selectors);
        }
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._selectors.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._selectors.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._selectors.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._selectors.errorClass);
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._selectors.inputSelector));
        const buttonElement = formElement.querySelector(this._selectors.submitButtonSelector);
        
        inputList.forEach(input => {
            input.addEventListener('input', () => {
                isValid(inputElement);
                tuggleButtonState(inputList, buttonElement, this._selectors);
            });
        });
    };

    _enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._selectors.formSelector));
    
        formList.forEach(formElement => {
            setEventListeners(formElement, this._selectors);
        });
    };
}

// const showInputError = (inputElement, errorMessage) => {
//     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(this._selectors.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(this._selectors.errorClass);
// };

// const hideInputError = (formElement, inputElement, selectors) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(selectors.inputErrorClass);
//     errorElement.textContent = '';
//     errorElement.classList.remove(selectors.errorClass);
// };

// const isValid = (formElement, inputElement, selectors) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
//     }
//     else {
//         hideInputError(formElement, inputElement, selectors);
//     }
// };

// function setEventListeners(formElement, selectors) {
//     const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
//     const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             isValid(formElement, inputElement, selectors);
//             tuggleButtonState(inputList, buttonElement, selectors);
//         });
//     });
// };

function enableValidation(selectors) {
    const formList = Array.from(document.querySelectorAll(selectors.formSelector));

    formList.forEach(formElement => {
        setEventListeners(formElement, selectors);
    });
};


function hasInvalidInput(inputList) {
    return Array.from(inputList).some((inputElement) => !inputElement.validity.valid)
};

function tuggleButtonState (inputList, buttonElement, selectors) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(selectors.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove(selectors.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

enableValidation(selectors);
