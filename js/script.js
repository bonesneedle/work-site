
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const wrapper = document.querySelector('.wrapper');

//input==============================================
let inputEmail = document.querySelector('.form-newsletter__input');
let placeholderInputEmail = inputEmail.placeholder;
inputEmail.addEventListener("focus", (e) => {
	inputEmail.placeholder = "";
});
inputEmail.addEventListener("blur", (e) => {
	inputEmail.placeholder = placeholderInputEmail;
});
//<<input/>///////////////////////////////////////

document.addEventListener("click", (event) => {
	//BURGER MENU>>====
	if (event.target.closest('.header__burger')) {
		menu.classList.toggle('_burger-active');
		burger.classList.toggle('_burger-active');
		header.classList.toggle('_burger-active');
		if (burger.classList.contains('_burger-active')) {
			document.body.style.overflow = "hidden";
		}
		else {
			document.body.style.overflow = "auto";
		}
	}
	//<<burger menu=====

	//OPEN IMG BY CLICK>>=============
	if (event.target.closest('img[data-open="true"]')) {
		let img = event.target.closest('img[data-open="true"]');
		let sourceImg = img.getAttribute('src');
		let altImg = img.getAttribute('alt');
		wrapper.insertAdjacentHTML('afterbegin',
			`<div class="open-img"><span class="open-img__close"></span><img src="${sourceImg}" alt="${altImg}"></div>`);
		LockBody();
	}
	//закрытие по крестику
	if (event.target.closest('.open-img__close')) {
		CloseImg();
	}
	//закрытие по нажатию на фон
	if (event.target == event.target.closest('.open-img')) {
		CloseImg();
	}
	//<<open imbg ny click==
});

document.addEventListener("keydown", (event) => {
	//OPEN IMG BY click>>=============
	//close img
	if (event.code == "Escape") {
		let closeImg = document.querySelector('.open-img');
		if (closeImg) {
			CloseImg();
		}
	}
	//<<close img
	//<<open imbg by click==
});

function LockBody() {
	const body = document.querySelector('body');
	const paddingRight = window.innerWidth - body.offsetWidth + "px";
	body.style.paddingRight = paddingRight;
	body.classList.add('lock')
}
function UnlockBody() {
	const body = document.querySelector('body');
	if (body.classList.contains('lock')) {
		body.style.paddingRight = "0px";
		body.classList.remove('lock');
	}
}
function CloseImg() {
	let img = document.querySelector('.open-img');
	if (img) {
		img.remove();
		UnlockBody();
	}
}