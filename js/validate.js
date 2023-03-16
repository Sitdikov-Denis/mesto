const formElement = document.querySelector('.form');

const inputElement = document.querySelector('.form__input-field');

const formError = formElement.querySelector(`.${inputElement.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input-field_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input-field_error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error_active');
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(formElement, inputElement);
    }
};

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.form__input-field'));
    const buttonElement = formElement.querySelector('.form__submit-button');
    
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            tuggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach(formElement => {
        setEventListeners(formElement);
    });
};

enableValidation();

function hasInvalidInput(inputList) {
    return Array.from(inputList).some((inputElement) => !inputElement.validity.valid)
};

function tuggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('form__submit-button_inactive');
        buttonElement.setAttribute('disabled', true);
    }
    else {
        buttonElement.classList.remove('form__submit-button_inactive');
        buttonElement.removeAttribute('disabled');
    }
}