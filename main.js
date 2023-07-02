(()=>{"use strict";var t={704:(t,e,n)=>{t.exports=n.p+"333c4cc4f5ce1e6e6241.jpg"},122:(t,e,n)=>{t.exports=n.p+"88c8df372a7b2f4fbfd7.jpg"},876:(t,e,n)=>{t.exports=n.p+"c0453686e070b6fd2e28.jpg"},932:(t,e,n)=>{t.exports=n.p+"9f4110b7dfe7635efe34.jpg"},229:(t,e,n)=>{t.exports=n.p+"9c7202d9332d94591365.jpg"},907:(t,e,n)=>{t.exports=n.p+"8cc7952a0dd74e6125c4.jpeg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validationParams=n,this._formElement=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationParams.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationParams.submitButtonSelector)}var n,r;return n=t,(r=[{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._validationParams.inputErrorClass),n.textContent=e,n.classList.add(this._validationParams.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._validationParams.inputErrorClass),e.classList.remove(this._validationParams.errorClass),e.textContent=""}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState(t._inputList,t._submitButton,t._validationParams.inactiveButtonClass)}))}))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(t,e){this._hasInvalidInput(t)?(e.classList.add(this._validationParams.inactiveButtonClass),e.setAttribute("disabled",!0)):(e.classList.remove(this._validationParams.inactiveButtonClass),e.removeAttribute("disabled"))}},{key:"resetPopupValidationState",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState(this._inputList,this._submitButton)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function u(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_handleKeyDown",(function(t){"Escape"===t.key&&n.close()})),u(this,"_closeOverlay",(function(t){t.target===t.currentTarget&&n.close()})),u(this,"close",(function(){n._popup.classList.remove("popup_active"),document.removeEventListener("keydown",n._handleKeyDown)})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleKeyDown)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._closeOverlay),this._popupCloseButton.addEventListener("click",this.close)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._popupPhoto=document.querySelector(e),r._popupPhotoCapture=document.querySelector(n),r}return e=u,(n=[{key:"open",value:function(t,e){this._popupPhotoCapture.textContent=t,this._popupPhoto.src=e,this._popupPhoto.alt=t,f(y(u.prototype),"open",this).call(this)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.validator,o=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._validator=r,n._handleFormSubmit=o,n._form=n._popup.querySelector(".form"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this,e=Array.from(this._validator._formElement.querySelectorAll(this._validator._validationParams.inputSelector));return this._element={},e.forEach((function(e){t._element[e.name]=e.value})),this._element}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t._form.reset(),t.close()})),h(_(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){h(_(u.prototype),"close",this).call(this)}},{key:"open",value:function(){this._form.reset(),this._validator.resetPopupValidationState(),h(_(u.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var P=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(t){var e=this;this.clear(),t.forEach((function(t){e._renderer(t)}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var O=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=e.nameSelector,this._descriptionSelector=e.descriptionSelector,this._currentName=document.querySelector(this._nameSelector),this._currentDescription=document.querySelector(this._descriptionSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._infoObject={name:this._currentName.textContent,description:this._currentDescription.textContent},this._infoObject}},{key:"setUserInfo",value:function(t,e){this._currentName.textContent=t,this._currentDescription.textContent=e}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),E=[{name:"Байкал",link:new URL(n(704),n.b)},{name:"Норвегия",link:new URL(n(932),n.b)},{name:"Лондон",link:new URL(n(122),n.b)},{name:"Радужные горы",link:new URL(n(876),n.b)},{name:"Сокорта",link:new URL(n(907),n.b)},{name:"Прага",link:new URL(n(229),n.b)}],C={formSelector:".form",inputSelector:".form__input-field",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input-field_error",errorClass:"form__input-error_active"},L=document.querySelector("#profileForm").querySelector(".form"),R=document.querySelector("#profileImageForm").querySelector(".form"),q=document.querySelector("#addCardForm").querySelector(".form"),I=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile__add-button"),B=document.querySelector("#name-input"),x=document.querySelector("#description-input"),D=document.querySelector(".profile__photo"),F=document.querySelector(".profile__photo-block");function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var A=function(){function t(e,n){var r=e.data,o=e.handleCardClick,i=e.handleDeleteIconClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._imageLink=r.link,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteIconClick=i}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_openPhotoViewPopup",value:function(){this._handleCardClick(this._name,this._imageLink)}},{key:"_handleDeletePhoto",value:function(){this._handleDeleteIconClick()}},{key:"_deleteCard",value:function(){this._element.remove()}},{key:"_toggleLike",value:function(){this._likeButton.classList.toggle("element__like-button_active")}},{key:"_setEventListeners",value:function(){var t=this;this._photo.addEventListener("click",(function(){t._openPhotoViewPopup()})),this._deleteButton.addEventListener("click",(function(){t._deleteCard(),t._handleDeletePhoto()})),this._likeButton.addEventListener("click",(function(){t._toggleLike()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._photo=this._element.querySelector(".element__photo"),this._deleteButton=this._element.querySelector(".element__basket-button"),this._likeButton=this._element.querySelector(".element__like-button"),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._photo.src=this._imageLink,this._photo.alt=this._name,this._element}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function N(t,e,n){return new A({data:t,handleCardClick:function(t,n){e.open(t,n)},handleDeleteIconClick:function(){n.open()}},"#element-template")}function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.handleConfirmation;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleConfirmation=r,n._form=n._popup.querySelector(".form"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleConfirmation(),t.close()})),z(G(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(t){this.deleteCard=t,z(G(u.prototype),"open",this).call(this)}},{key:"close",value:function(){z(G(u.prototype),"close",this).call(this)}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}var X=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._params=e,this._queryParams={},this._queryParams.headers=this._params.headers}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._params.baseRoute,"/cards"),this._queryParams).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Y=new O({nameSelector:".profile__name",descriptionSelector:".profile__description"}),Z=new X({baseRoute:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"03a4523e-62a7-4ee4-ae37-dcf3604823ce","Content-Type":"application/json"}}),$=new P({items:E,renderer:function(t){var e=N(t,at,it).generateCard();$.addItem(e)}},".elements");Z.getInitialCards().then((function(t){$.renderItems(t)})).catch((function(t){console.log(t)}));var tt=new r(L,C);tt.enableValidation();var et=new r(q,C);et.enableValidation();var nt=new r(R,C);nt.enableValidation();var rt=new S({validator:nt,handleFormSubmit:function(t){D.src=t.photo}},"#profileImageForm"),ot=new S({validator:tt,handleFormSubmit:function(t){Y.setUserInfo(t.name,t.description)}},"#profileForm"),it=new J({handleConfirmation:function(){console.log("hola")}},"#deleteImagePopup"),ut=new S({validator:et,handleFormSubmit:function(t){var e=N(t,at,it).generateCard();$.addItem(e)}},"#addCardForm"),at=new m("#viewPhoto",".popup__photo",".popup__photo-caption");I.addEventListener("click",(function(){ot.open();var t=Y.getUserInfo();B.value=t.name,x.value=t.description})),T.addEventListener("click",(function(){ut.open()})),F.addEventListener("click",(function(){rt.open()})),$.renderItems(),at.setEventListeners(),ot.setEventListeners(),ut.setEventListeners(),rt.setEventListeners(),rt.setEventListeners(),it.setEventListeners()})()})();