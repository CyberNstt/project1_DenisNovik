let burgerElem = document.getElementById('HeaderMenuMobilePopup');
let burgerMenu = burgerElem.querySelector('.HeaderMenuMobileBurger');

burgerMenu.onclick = function (openFunction) {
	burgerElem.classList.toggle('open');
};



let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function (closeFunction) {
	menuElem.classList.toggle('open');
};