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

const showInputError = (formElement, inputElement, errorMessage, selectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (formElement, inputElement, selectors) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(selectors.errorClass);
};

const isValid = (formElement, inputElement, selectors) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
    }
    else {
        hideInputError(formElement, inputElement, selectors);
    }
};

function setEventListeners(formElement, selectors) {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, selectors);
            tuggleButtonState(inputList, buttonElement, selectors);
        });
    });
};

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
