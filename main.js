(()=>{"use strict";var t={704:(t,e,n)=>{t.exports=n.p+"333c4cc4f5ce1e6e6241.jpg"},122:(t,e,n)=>{t.exports=n.p+"88c8df372a7b2f4fbfd7.jpg"},876:(t,e,n)=>{t.exports=n.p+"c0453686e070b6fd2e28.jpg"},932:(t,e,n)=>{t.exports=n.p+"9f4110b7dfe7635efe34.jpg"},229:(t,e,n)=>{t.exports=n.p+"9c7202d9332d94591365.jpg"},907:(t,e,n)=>{t.exports=n.p+"8cc7952a0dd74e6125c4.jpeg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationParams=n,this._formElement=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationParams.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationParams.submitButtonSelector)}var n,r;return n=t,(r=[{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationParams.inputErrorClass),n.textContent=e,n.classList.add(this._validationParams.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationParams.inputErrorClass),e.classList.remove(this._validationParams.errorClass),e.textContent=""}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState(t._inputList,t._submitButton,t._validationParams.inactiveButtonClass)}))}))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(t,e){this._hasInvalidInput(t)?(e.classList.add(this._validationParams.inactiveButtonClass),e.setAttribute("disabled",!0)):(e.classList.remove(this._validationParams.inactiveButtonClass),e.removeAttribute("disabled"))}},{key:"resetPopupValidationState",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState(this._inputList,this._submitButton)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function a(t,e,n){return(e=u(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_handleKeyDown",(function(t){"Escape"===t.key&&n.close()})),a(this,"_closeOverlay",(function(t){t.target===t.currentTarget&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleKeyDown),this._popupCloseButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._closeOverlay)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleKeyDown)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._popupPhoto=document.querySelector(e),r._popupPhotoCapture=document.querySelector(n),r}return e=a,(n=[{key:"open",value:function(t,e){this._popupPhotoCapture.textContent=t,this._popupPhoto.src=e,this._popupPhoto.alt=t,f(y(a.prototype),"open",this).call(this)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=t.validator,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._validator=r,n._handleFormSubmit=o,n._form=n._popup.querySelector(".form"),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this,e=Array.from(this._validator._formElement.querySelectorAll(this._validator._validationParams.inputSelector));return this._element={},e.forEach((function(e){t._element[e.name]=e.value})),this._element}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t._form.reset(),t.close()})),v(_(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){v(_(a.prototype),"close",this).call(this)}},{key:"open",value:function(){this._form.reset(),this._validator.resetPopupValidationState(),v(_(a.prototype),"open",this).call(this)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var O=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=e.nameSelector,this._descriptionSelector=e.descriptionSelector,this._currentName=document.querySelector(this._nameSelector),this._currentDescription=document.querySelector(this._descriptionSelector),this._avatar=document.querySelector(".profile__photo")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._infoObject={name:this._currentName.textContent,description:this._currentDescription.textContent},this._infoObject}},{key:"setUserInfo",value:function(t,e,n,r){this._currentName.textContent=t,this._currentDescription.textContent=e,this._avatar.src=n,this._id=r}},{key:"getID",value:function(){return this._id}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),E=[{name:"Байкал",link:new URL(n(704),n.b)},{name:"Норвегия",link:new URL(n(932),n.b)},{name:"Лондон",link:new URL(n(122),n.b)},{name:"Радужные горы",link:new URL(n(876),n.b)},{name:"Сокорта",link:new URL(n(907),n.b)},{name:"Прага",link:new URL(n(229),n.b)}],C={formSelector:".form",inputSelector:".form__input-field",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input-field_error",errorClass:"form__input-error_active"},L=document.querySelector("#profileForm").querySelector(".form"),q=document.querySelector("#profileImageForm").querySelector(".form"),I=document.querySelector("#addCardForm").querySelector(".form"),R=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile__add-button"),B=document.querySelector("#name-input"),D=document.querySelector("#description-input"),x=document.querySelector(".profile__photo"),U=document.querySelector(".profile__photo-block");function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===F(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},N.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===F(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=t.handleConfirmation;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleConfirmation=r,n._form=n._popup.querySelector(".form"),n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleConfirmation(t.cardID,t.card),t.close()})),N(H(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(t,e){this.cardID=t,this.card=e,N(H(a.prototype),"open",this).call(this)}},{key:"close",value:function(){N(H(a.prototype),"close",this).call(this)}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._params=e,this._queryParams={},this._queryParams.headers=this._params.headers}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._params.baseRoute,"/cards"),this._queryParams).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._params.baseRoute,"/users/me"),this._queryParams).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"patchUserInfo",value:function(t,e){var n={method:"PATCH",headers:this._queryParams.headers,body:JSON.stringify({name:t,about:e})};return fetch("".concat(this._params.baseRoute,"/users/me"),n).then((function(t){return t.ok?t.json():Promise.reject("Ошибка  патч инфы: ".concat(t.status))}))}},{key:"patchUserPhoto",value:function(t){var e={method:"PATCH",headers:this._queryParams.headers,body:JSON.stringify({avatar:t})};return fetch("".concat(this._params.baseRoute,"/users/me/avatar"),e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка  патч фотки: ".concat(t.status))}))}},{key:"addNewCard",value:function(t){var e={method:"POST",headers:this._queryParams.headers,body:JSON.stringify({name:t.name,link:t.link})};return fetch("".concat(this._params.baseRoute,"/cards"),e).then((function(t){return t.ok?t.json():Promise.reject("Ошибка пост карточки: ".concat(t.status))}))}},{key:"handleLikeButton",value:function(t,e){if(e){var n={method:"DELETE",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/likes/").concat(t),n).then((function(t){return t.ok?t.json():Promise.reject("Ошибка удаление лайка карточки: ".concat(t.status))}))}var r={method:"PUT",headers:this._queryParams.headers};return fetch("".concat(this._params.baseRoute,"/cards/likes/").concat(t),r).then((function(t){return t.ok?t.json():Promise.reject("Ошибка лайк карточки: ".concat(t.status))}))}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}var W=function(){function t(e,n,r){var o=this,i=e.data,a=e.handleCardClick,u=e.handleDeleteIconClick,c=e.handleLikeButtonClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=i.name,this._imageLink=i.link,this._likes=i.likes,this._id=i._id,this._owner=i.owner._id,this._myID=n,this._likesLength=this._likes.length,this._cardSelector=r,this._handleCardClick=a,this._handleDeleteIconClick=u,this._handleLike=c,this._isLiked=this._likes.some((function(t){return t._id===o._myID}))}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_openPhotoViewPopup",value:function(){this._handleCardClick(this._name,this._imageLink)}},{key:"_handleDeletePhoto",value:function(){this._handleDeleteIconClick(this._id,this._element)}},{key:"_toggleLike",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._photo.addEventListener("click",(function(){t._openPhotoViewPopup()})),this._myCard()&&this._deleteButton.addEventListener("click",(function(){t._handleDeletePhoto()})),this._likeButton.addEventListener("click",(function(){t._handleLike(t._id,t._isLiked,(function(e){t._isLiked=!t._isLiked,t._likeCounter.textContent=e.likes.length,t._toggleLike()}))}))}},{key:"generateCard",value:function(){return this._myCard(),this._element=this._getTemplate(),this._photo=this._element.querySelector(".element__photo"),this._deleteButton=this._element.querySelector(".element__basket-button"),this._likeButton=this._element.querySelector(".element__like-button"),this._isLiked&&this._likeButton.classList.add("element__like-button_active"),this._likeCounter=this._element.querySelector(".element__like-count"),this._myCard()||this._deleteButton.remove(),this._likeCounter.textContent=this._likesLength,this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._photo.src=this._imageLink,this._photo.alt=this._name,this._element}},{key:"_like",value:function(){this._isLiked=!this._isLiked}},{key:"_myCard",value:function(){if(this._myID===this._owner)return!0}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function X(t,e,n){return new W({data:t,handleCardClick:function(t,n){e.open(t,n)},handleDeleteIconClick:function(t,e){n.open(t,e)},handleLikeButtonClick:function(t,e,n){Z.handleLikeButton(t,e).then((function(t){console.log(t),n(t)})).catch((function(t){console.log(t)}))}},Y.getID(),"#element-template")}var Y=new O({nameSelector:".profile__name",descriptionSelector:".profile__description"}),Z=new z({baseRoute:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"03a4523e-62a7-4ee4-ae37-dcf3604823ce","Content-Type":"application/json"}});Z.getUserInfo().then((function(t){Y.setUserInfo(t.name,t.about,t.avatar,t._id),console.log(t._id)})).catch((function(t){console.log(t)}));var $=new w({items:E,renderer:function(t){var e=X(t,ut,it).generateCard();$.addItem(e)}},".elements");Z.getInitialCards().then((function(t){console.log(t),$.renderItems(t)})).catch((function(t){console.log(t)}));var tt=new r(L,C);tt.enableValidation();var et=new r(I,C);et.enableValidation();var nt=new r(q,C);nt.enableValidation();var rt=new S({validator:nt,handleFormSubmit:function(t){handleDeleteIconClick.then((function(t){x.src=t.avatar})).catch((function(t){console.log(t)}))}},"#profileImageForm"),ot=new S({validator:tt,handleFormSubmit:function(t){Z.patchUserInfo(t.name,t.description).then((function(t){Y.setUserInfo(t.name,t.about,t.avatar)})).catch((function(t){console.log(t)}))}},"#profileForm"),it=new J({handleConfirmation:function(t,e){Z.deleteCard(t).then((function(t){console.log(t),e.remove()})).catch((function(t){console.log(t)}))}},"#deleteImagePopup"),at=new S({validator:et,handleFormSubmit:function(t){Z.addNewCard(t).then((function(t){var e=X(t,ut,it).generateCard();$.addItem(e)})).catch((function(t){console.log(t)}))}},"#addCardForm"),ut=new h("#viewPhoto",".popup__photo",".popup__photo-caption");R.addEventListener("click",(function(){ot.open();var t=Y.getUserInfo();B.value=t.name,D.value=t.description})),T.addEventListener("click",(function(){at.open()})),U.addEventListener("click",(function(){rt.open()})),ut.setEventListeners(),ot.setEventListeners(),at.setEventListeners(),rt.setEventListeners(),rt.setEventListeners(),it.setEventListeners()})()})();