import './vendor/focus-visible.min.js';
import './_vars';

const actionsBtnNotifications = document.querySelector('.actions__btn--notifications');
const modalNotificationsBtnClose = document.querySelector('.modal-notifications__btn-close');
const modalNotifications = document.querySelector('.modal-notifications');
const popupNewsBtnClose = document.querySelector('.popup-news__btn-close');
const popupNews = document.querySelector('.popup-news');
const notificationsContentLinkUnread = document.querySelector('.notifications-content__link--unread');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');

actionsBtnNotifications.addEventListener("click", function () {
  modalNotifications.classList.add("modal-notifications--opened");
});

notificationsContentLinkUnread.addEventListener("click", function () {
  popupNews.classList.remove("popup-news--closed");
  overlay.classList.add('overlay--active');
  body.style.overflow = "hidden";
});

modalNotificationsBtnClose.addEventListener("click", function () {
  modalNotifications.classList.remove("modal-notifications--opened");
});

popupNewsBtnClose.addEventListener("click", function () {
  popupNews.classList.add("popup-news--closed");
  overlay.classList.remove('overlay--active');
  body.style.overflow = "";
});

overlay.addEventListener('click', function () {
  popupNews.classList.add("popup-news--closed");
  overlay.classList.remove('overlay--active');
  body.style.overflow = "";
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!popupNews.classList.contains("popup-news--closed")) {
      event.preventDefault();
      popupNews.classList.add("popup-news--closed");
      overlay.classList.remove('overlay--active');
      body.style.overflow = "";
    }
  }
});


