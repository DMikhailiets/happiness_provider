"use strict";

var burgerIsActive = function burgerIsActive() {
  document.getElementById('Header').classList.toggle('isActive');
  document.getElementById('root').classList.toggle('lock');
};

var descriptionSplit = function descriptionSplit() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;
  var elementList = document.querySelectorAll('.goodDescription');
  elementList.forEach(function (description) {
    if (description.innerHTML.length > n) {
      var text = description.innerHTML.slice(0, n) + '...';
      description.replaceWith(document.createTextNode(text));
    }
  });
};

descriptionSplit();

var titleSplit = function titleSplit() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  var elementsList = document.querySelectorAll('.goodTitle');
  elementsList.forEach(function (title) {
    if (title.innerHTML.length > n) {
      var text = title.innerHTML.slice(0, n) + '...';
      title.replaceWith(document.createTextNode(text));
    }
  });
};

titleSplit();