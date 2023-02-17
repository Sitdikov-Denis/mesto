const formElement = document.querySelector('.form');


const inputElement = document.querySelector('.form__input-field');

const formError = formElement.querySelector(`.${inputElement.id}-error`)

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add('form__input-field_error')
    errorElement.textContent = errorMessage
    errorElement.classList.add('form__input-error_active')
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input-field_error')
    errorElement.textContent = ''
    errorElement.classList.remove('form__input-error_active')
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input-field'))

    inputList.forEach((inputElement)=>{
        inputElement.addEventListener('input', ()=> {
            isValid(formElement, inputElement)
        })
    })
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'))

    formList.forEach(formElement => {
        setEventListeners(formElement)
    })
}

enableValidation()

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
    }
    else {
        hideInputError(formElement, inputElement)
    }
}

// formElement.addEventListener('input', isValid);