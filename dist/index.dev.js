"use strict";

var burgerIsActive = function burgerIsActive() {
  document.getElementById('Header').classList.toggle('isActive');
  document.getElementById('root').classList.toggle('lock');
};