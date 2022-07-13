(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{v:()=>d,G:()=>y});var t=document.querySelector(".root"),r=t.querySelector(".profile__btn-edit"),n=t.querySelector(".profile__btn-add"),o=document.querySelector("#inputEditName"),i=document.querySelector("#inputEditText"),a=document.querySelector("#tempCard").content,c=t.querySelector(".gallery"),u=t.querySelector("#formAdd"),s=document.querySelector("#formEdit"),l=document.querySelector("#formAddAvatar"),p=t.querySelector("#popupEdit"),f=t.querySelector("#popupAddCard"),h=t.querySelector("#popupCardImg"),d=t.querySelector(".popup__image"),y=t.querySelector(".popup__image-name"),_=document.querySelector("#popupAvatar"),v=document.querySelector("#popupDeleteCard"),m=document.querySelector(".profile__edit-icon"),b=document.querySelector(".profile__photo"),C={formSelector:".form",inputSelector:".popup__edit-input",submitButtonSelector:".popup__btn-save",inactiveButtonClass:"popup_btn-disable",inputErrorSelector:".popup__input-error",errorClass:"popup__input-error_active"};function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=r,this._parametersValidator=t;var n=this._parametersValidator,o=n.submitButtonSelector,i=n.inputSelector;this._submitBtn=this._form.querySelector(o),this._inputsList=Array.from(this._form.querySelectorAll(i))}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).classList.add(this._parametersValidator.errorClass)}},{key:"_hideInputError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).classList.remove(this._parametersValidator.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_toggleButtonState",value:function(){this._inputsList.some((function(e){return!e.validity.valid}))?this.disableSubmitButton():(this._submitBtn.classList.remove(this._parametersValidator.inactiveButtonClass),this._submitBtn.removeAttribute("disabled"))}},{key:"disableSubmitButton",value:function(){this._submitBtn.classList.add(this._parametersValidator.inactiveButtonClass),this._submitBtn.setAttribute("disabled",!0)}},{key:"resetInputErorr",value:function(){var e=this;this._inputsList.forEach((function(t){e._hideInputError(t)}))}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var O=function(){function e(t,r,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleCardClick=r,this._handleLikeClick=n,this._handleRemoveIconClick=o,this._idCard=t._id,this._idOwner=t.owner._id,this._idMyUser="4987bc3550b8e71731203311",this._listUserLikes=t.likes,this._nameCard=t.name,this._linkCard=t.link,this._popupImageName=y,this._selectorTemplateCard=i,this._templateCardContent=this._selectorTemplateCard.querySelector(".gallery__card").cloneNode(!0)}var t,r;return t=e,(r=[{key:"createTemplateCard",value:function(){return this._galleryCardImage=this._templateCardContent.querySelector(".gallery__card-img"),this._templateCardContent.querySelector(".gallery__card-name").textContent="".concat(this._nameCard),this._galleryCardImage.src="".concat(this._linkCard),this._galleryCardImage.alt="".concat(this._nameCard),this._buttonLike=this._templateCardContent.querySelector(".gallery__btn-favorites"),this._hiddenBtnTrash(),this._counterLikes(),this._setEventListeners(),this.setFavorites(this._listUserLikes),this._templateCardContent}},{key:"_checkLikes",value:function(){var e=this;return this._listUserLikes.some((function(t){return t._id==e._idMyUser}))}},{key:"setFavorites",value:function(e){this._templateCardContent.querySelector(".gallery__counter-favorites").textContent=e.length,this._listUserLikes=e,this._checkLikes()?this._buttonLike.classList.add("gallery__btn-favorites_active"):this._buttonLike.classList.remove("gallery__btn-favorites_active")}},{key:"_hiddenBtnTrash",value:function(){this._idMyUser!==this._idOwner&&(this.deleteTrashIcon=this._templateCardContent.querySelector(".gallery__btn-trash").style.visibility="hidden")}},{key:"_removeCard",value:function(){this._templateCardContent.remove(),this._templateCardContent=null}},{key:"_counterLikes",value:function(){this._templateCardContent.querySelector(".gallery__counter-favorites").textContent=this._listUserLikes.length}},{key:"_openImagePopup",value:function(){d.src="".concat(this._linkCard),d.alt="".concat(this._nameCard),this._popupImageName.textContent="".concat(this._nameCard),this._handleCardClick(this._nameCard,this._linkCard)}},{key:"_setEventListeners",value:function(){var e=this;this._templateCardContent.querySelector(".gallery__btn-favorites").addEventListener("click",(function(){e._handleLikeClick(e._idCard,e._checkLikes(),e)})),this._templateCardContent.querySelector(".gallery__btn-trash").addEventListener("click",(function(){e._handleRemoveIconClick(e._idCard,e)})),this._templateCardContent.querySelector(".gallery__card-img").addEventListener("click",(function(){return e._openImagePopup()}))}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var E=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._selectorContainer=r}var t,r;return t=e,(r=[{key:"printElement",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._selectorContainer.append(e)}},{key:"addItemUser",value:function(e){this._selectorContainer.prepend(e)}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._searchOpenedPopup=t,this._buttonPopupClose=this._searchOpenedPopup.querySelector(".popup__btn-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._searchOpenedPopup.classList.toggle("popup_opened"),this._searchOpenedPopup.classList.toggle("popup_close"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._searchOpenedPopup.classList.toggle("popup_opened"),this._searchOpenedPopup.classList.toggle("popup_close"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupOnOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonPopupClose.addEventListener("click",(function(){return e.close()})),this._searchOpenedPopup.addEventListener("mousedown",(function(t){return e._closePopupOnOverlay(t)}))}}])&&P(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=q(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},T.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function B(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(n);if(o){var r=R(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function a(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._submitFormCallback=t,r._popupForm=r._searchOpenedPopup.querySelector(".form"),r._inputsList=r._searchOpenedPopup.querySelectorAll(".popup__edit-input"),r._submitButtonForm=r._searchOpenedPopup.querySelector(".popup__btn-save"),r}return t=a,(r=[{key:"close",value:function(){T(R(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._resultForm={},this._inputsList.forEach((function(t){e._resultForm[t.name]=t.value})),this._resultForm}},{key:"loadingStatus",value:function(e){1==e?this._submitButtonForm.innerText="Сохранение...":0==e?this._submitButtonForm.innerText="Сохранить":"createCard"==e&&(this._submitButtonForm.innerText="Создать")}},{key:"setEventListeners",value:function(){var e=this;T(R(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(e._getInputValues()),e.loadingStatus(!0),e.close()}))}}])&&I(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(j);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=D(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},F.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function V(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(n);if(o){var r=J(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return V(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._searchOpenedPopup.querySelector(".popup__image"),t._popupImageName=t._searchOpenedPopup.querySelector(".popup__image-name"),t}return t=a,(r=[{key:"open",value:function(e,t){F(J(a.prototype),"open",this).call(this),this._popupImage.src="".concat(t),this._popupImage.alt="".concat(e),this._popupImageName.textContent="".concat(e)}}])&&z(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(j);function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t.name),this._profileDescription=document.querySelector(t.description),this._profileAvatar=document.querySelector(t.avatar)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(e){return{name:this._profileName.textContent=e.serverName,description:this._profileDescription.textContent=e.serverJob,avatar:this._profileAvatar.src=e.serverAvatar}}},{key:"setUserInfo",value:function(e,t,r){return{name:this._profileName.textContent=e.value,job:this._profileDescription.textContent=t.value,avatar:this._profileAvatar.src=r}}}])&&M(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileInfoUrl=t.profileInfoUrl,this._profileAvatarUrl=t.profileAvatarUrl,this._authorization=t.tokenAuthorization,this._cardsUrl=t.cardsUrl,this._likeCardUrl=t.likeCardUrl,this._deleteCardUrl=t.deleteCardUrl}var t,r;return t=e,(r=[{key:"_checkError",value:function(e){if(e.ok)return e.json()}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{method:"GET",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка с каточками: ".concat(e))}))}},{key:"getProfileInfo",value:function(){return fetch(this._profileInfoUrl,{method:"GET",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка с профилем: ".concat(e))}))}},{key:"changeProfileInfo",value:function(e){return fetch(this._profileInfoUrl,{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.job)})}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка при отправке профиля: ".concat(e))}))}},{key:"addCardServer",value:function(e){return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.formName),link:"".concat(e.formText)})}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка при отправке карточки: ".concat(e))}))}},{key:"deleteCardServer",value:function(e){return fetch(this._deleteCardUrl+"".concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка при удалении карточки: ".concat(e))}))}},{key:"addAvatarServer",value:function(e){return fetch(this._profileAvatarUrl,{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e.formText)})}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка при отправке аватара: ".concat(e))}))}},{key:"likeCardServer",value:function(e){return fetch(this._likeCardUrl+"".concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка при добавлении лайка: ".concat(e))}))}},{key:"deletelikeCardServer",value:function(e){return fetch(this._likeCardUrl+"".concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then(this._checkError).catch((function(e){return Promise.reject("произошла ошибка при удалении лайка: ".concat(e))}))}}])&&K(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Y(){return Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Z(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},Y.apply(this,arguments)}function Z(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=te(e)););return e}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}function ee(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},te(e)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=te(n);if(o){var r=te(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ee(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._submitDelete=t._searchOpenedPopup.querySelector(".form"),t._submitButtonForm=t._searchOpenedPopup.querySelector(".popup__btn-save"),t}return t=a,(r=[{key:"submitDeleteCard",value:function(e){this._btnSubmitCallback=e}},{key:"loadingStatus",value:function(e){1==e?this._submitButtonForm.innerText="Сохранение...":0==e&&(this._submitButtonForm.innerText="Да")}},{key:"setEventListeners",value:function(){var e=this;Y(te(a.prototype),"setEventListeners",this).call(this),this._submitDelete.addEventListener("submit",(function(t){t.preventDefault(),e.loadingStatus(!0),e._btnSubmitCallback()}))}}])&&X(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(j),ne=new Q({tokenAuthorization:"6e087a0f-c27a-43c1-a0e6-91ac2272b53b",profileInfoUrl:"https://nomoreparties.co/v1/cohort-40/users/me",profileAvatarUrl:"https://mesto.nomoreparties.co/v1/cohort-40/users/me/avatar",deleteCardUrl:"https://mesto.nomoreparties.co/v1/cohort-40/cards/",likeCardUrl:"https://mesto.nomoreparties.co/v1/cohort-40/cards/",cardsUrl:"https://mesto.nomoreparties.co/v1/cohort-40/cards"}),oe=new g(C,s),ie=new g(C,u),ae=new g(C,l);ae.enableValidation(),oe.enableValidation(),ie.enableValidation();var ce=new re(v);function ue(e,t){ye.open(e,t)}function se(e,t,r){t?ne.deletelikeCardServer(e).then((function(e){console.log(e.likes),r.setFavorites(e.likes)})).catch((function(e){console.warn("Ошибка при удалении лайка: ".concat(e))})):ne.likeCardServer(e).then((function(e){console.log(e.likes),r.setFavorites(e.likes)})).catch((function(e){console.warn("Ошибка при установлении лайка: ".concat(e))}))}function le(e,t){ce.submitDeleteCard((function(){!function(e,t){ne.deleteCardServer(e).then((function(e){t._removeCard(),ce.loadingStatus(!1),ce.close()})).catch((function(e){return Promise.reject("Ошибка при удалении карточки: ".concat(e))}))}(e,t)})),ce.open()}function pe(e){return new O(e,ue,se,le,a).createTemplateCard()}ce.setEventListeners();var fe=new E({renderer:function(e){fe.addItem(pe(e))}},c);ne.getInitialCards().then((function(e){fe.printElement(e)})).catch((function(e){return Promise.reject("Ошибка с карточками загружеными с сервера: ".concat(e))}));var he=new A(f,(function(e){ne.addCardServer(e).then((function(e){var t=pe(e);fe.addItemUser(t),ie.disableSubmitButton()})).catch((function(e){return Promise.reject("Ошибка при добавлении карточки: ".concat(e))})).finally((function(){he.loadingStatus("createCard")}))})),de=new A(p,(function(){var e=_e.setUserInfo(o,i,b.src);ne.changeProfileInfo(e).catch((function(e){return Promise.reject("Ошибка при отправке профиля: ".concat(e))})).finally((function(){de.loadingStatus(!1)}))})),ye=new G(h),_e=new H({name:".profile__name",description:".profile__description",avatar:".profile__photo"}),ve=new A(_,(function(e){ne.addAvatarServer(e).catch((function(e){return Promise.reject("Ошибка при добавлении аватара: ".concat(e))})).finally((function(){ve.loadingStatus(!1)})),b.src=e.formText,ae.disableSubmitButton()}));ve.setEventListeners(),m.addEventListener("click",(function(){ve.open(),ae.resetInputErorr()})),n.addEventListener("click",(function(){he.open(),ie.resetInputErorr()})),ne.getProfileInfo().then((function(e){return{serverName:e.name,serverJob:e.about,serverAvatar:e.avatar}})).then((function(e){_e.getUserInfo(e)})).catch((function(e){return Promise.reject("Ошибка с профилем: ".concat(e))})),r.addEventListener("click",(function(){de.open(),ne.getProfileInfo().then((function(e){return{serverName:e.name,serverJob:e.about,serverAvatar:e.avatar}})).then((function(e){var t=_e.getUserInfo(e);o.value=t.name,i.value=t.description,oe.resetInputErorr()})).catch((function(e){return Promise.reject("Ошибка при получении профиля: ".concat(e))}))})),de.setEventListeners(),he.setEventListeners(),ye.setEventListeners()})();